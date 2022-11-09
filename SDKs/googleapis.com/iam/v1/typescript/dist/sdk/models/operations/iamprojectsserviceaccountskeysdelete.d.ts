import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class IamProjectsServiceAccountsKeysDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class IamProjectsServiceAccountsKeysDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    etag?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class IamProjectsServiceAccountsKeysDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IamProjectsServiceAccountsKeysDeleteRequest extends SpeakeasyBase {
    pathParams: IamProjectsServiceAccountsKeysDeletePathParams;
    queryParams: IamProjectsServiceAccountsKeysDeleteQueryParams;
    security: IamProjectsServiceAccountsKeysDeleteSecurity;
}
export declare class IamProjectsServiceAccountsKeysDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
