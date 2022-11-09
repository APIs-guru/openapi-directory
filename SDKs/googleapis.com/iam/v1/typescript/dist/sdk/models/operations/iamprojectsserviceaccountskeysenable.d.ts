import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class IamProjectsServiceAccountsKeysEnablePathParams extends SpeakeasyBase {
    name: string;
}
export declare class IamProjectsServiceAccountsKeysEnableQueryParams extends SpeakeasyBase {
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
export declare class IamProjectsServiceAccountsKeysEnableSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IamProjectsServiceAccountsKeysEnableRequest extends SpeakeasyBase {
    pathParams: IamProjectsServiceAccountsKeysEnablePathParams;
    queryParams: IamProjectsServiceAccountsKeysEnableQueryParams;
    request?: Map<string, any>;
    security: IamProjectsServiceAccountsKeysEnableSecurity;
}
export declare class IamProjectsServiceAccountsKeysEnableResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
