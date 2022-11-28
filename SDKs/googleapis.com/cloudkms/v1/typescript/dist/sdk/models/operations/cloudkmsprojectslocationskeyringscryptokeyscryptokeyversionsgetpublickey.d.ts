import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKeyPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKeyQueryParams extends SpeakeasyBase {
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
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKeySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKeySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKeySecurity extends SpeakeasyBase {
    option1?: CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKeySecurityOption1;
    option2?: CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKeySecurityOption2;
}
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKeyRequest extends SpeakeasyBase {
    pathParams: CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKeyPathParams;
    queryParams: CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKeyQueryParams;
    security: CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKeySecurity;
}
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKeyResponse extends SpeakeasyBase {
    contentType: string;
    publicKey?: shared.PublicKey;
    statusCode: number;
}
