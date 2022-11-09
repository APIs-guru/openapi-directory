import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudshellUsersEnvironmentsAddPublicKeyPathParams extends SpeakeasyBase {
    environment: string;
}
export declare class CloudshellUsersEnvironmentsAddPublicKeyQueryParams extends SpeakeasyBase {
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
export declare class CloudshellUsersEnvironmentsAddPublicKeySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudshellUsersEnvironmentsAddPublicKeyRequest extends SpeakeasyBase {
    pathParams: CloudshellUsersEnvironmentsAddPublicKeyPathParams;
    queryParams: CloudshellUsersEnvironmentsAddPublicKeyQueryParams;
    request?: shared.AddPublicKeyRequest;
    security: CloudshellUsersEnvironmentsAddPublicKeySecurity;
}
export declare class CloudshellUsersEnvironmentsAddPublicKeyResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
