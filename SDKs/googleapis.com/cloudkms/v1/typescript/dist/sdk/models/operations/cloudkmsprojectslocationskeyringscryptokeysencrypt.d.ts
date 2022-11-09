import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysEncryptPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysEncryptQueryParams extends SpeakeasyBase {
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
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysEncryptSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysEncryptSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysEncryptSecurity extends SpeakeasyBase {
    option1?: CloudkmsProjectsLocationsKeyRingsCryptoKeysEncryptSecurityOption1;
    option2?: CloudkmsProjectsLocationsKeyRingsCryptoKeysEncryptSecurityOption2;
}
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysEncryptRequest extends SpeakeasyBase {
    pathParams: CloudkmsProjectsLocationsKeyRingsCryptoKeysEncryptPathParams;
    queryParams: CloudkmsProjectsLocationsKeyRingsCryptoKeysEncryptQueryParams;
    request?: shared.EncryptRequest;
    security: CloudkmsProjectsLocationsKeyRingsCryptoKeysEncryptSecurity;
}
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysEncryptResponse extends SpeakeasyBase {
    contentType: string;
    encryptResponse?: shared.EncryptResponse;
    statusCode: number;
}
