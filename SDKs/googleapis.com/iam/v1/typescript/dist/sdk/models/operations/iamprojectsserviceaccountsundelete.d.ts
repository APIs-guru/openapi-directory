import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class IamProjectsServiceAccountsUndeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class IamProjectsServiceAccountsUndeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class IamProjectsServiceAccountsUndeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IamProjectsServiceAccountsUndeleteRequest extends SpeakeasyBase {
    pathParams: IamProjectsServiceAccountsUndeletePathParams;
    queryParams: IamProjectsServiceAccountsUndeleteQueryParams;
    request?: Map<string, any>;
    security: IamProjectsServiceAccountsUndeleteSecurity;
}
export declare class IamProjectsServiceAccountsUndeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    undeleteServiceAccountResponse?: shared.UndeleteServiceAccountResponse;
}
