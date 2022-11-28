import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IamProjectsServiceAccountsKeysDisablePathParams extends SpeakeasyBase {
    name: string;
}
export declare class IamProjectsServiceAccountsKeysDisableQueryParams extends SpeakeasyBase {
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
export declare class IamProjectsServiceAccountsKeysDisableSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IamProjectsServiceAccountsKeysDisableRequest extends SpeakeasyBase {
    pathParams: IamProjectsServiceAccountsKeysDisablePathParams;
    queryParams: IamProjectsServiceAccountsKeysDisableQueryParams;
    request?: Map<string, any>;
    security: IamProjectsServiceAccountsKeysDisableSecurity;
}
export declare class IamProjectsServiceAccountsKeysDisableResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
