import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyQueryParams extends SpeakeasyBase {
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
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroySecurity extends SpeakeasyBase {
    option1?: CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroySecurityOption1;
    option2?: CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroySecurityOption2;
}
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyRequest extends SpeakeasyBase {
    pathParams: CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyPathParams;
    queryParams: CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyQueryParams;
    request?: Map<string, any>;
    security: CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroySecurity;
}
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyResponse extends SpeakeasyBase {
    contentType: string;
    cryptoKeyVersion?: shared.CryptoKeyVersion;
    statusCode: number;
}
