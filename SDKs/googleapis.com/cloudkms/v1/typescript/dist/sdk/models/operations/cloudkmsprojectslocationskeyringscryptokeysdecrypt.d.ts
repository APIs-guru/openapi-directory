import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptQueryParams extends SpeakeasyBase {
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
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptSecurity extends SpeakeasyBase {
    option1?: CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptSecurityOption1;
    option2?: CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptSecurityOption2;
}
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptRequest extends SpeakeasyBase {
    pathParams: CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptPathParams;
    queryParams: CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptQueryParams;
    request?: shared.DecryptRequest;
    security: CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptSecurity;
}
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptResponse extends SpeakeasyBase {
    contentType: string;
    decryptResponse?: shared.DecryptResponse;
    statusCode: number;
}
