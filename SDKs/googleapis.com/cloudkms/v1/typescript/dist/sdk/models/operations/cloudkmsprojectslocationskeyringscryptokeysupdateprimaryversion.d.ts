import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionQueryParams extends SpeakeasyBase {
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
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionSecurity extends SpeakeasyBase {
    option1?: CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionSecurityOption1;
    option2?: CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionSecurityOption2;
}
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionRequest extends SpeakeasyBase {
    pathParams: CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionPathParams;
    queryParams: CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionQueryParams;
    request?: shared.UpdateCryptoKeyPrimaryVersionRequest;
    security: CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionSecurity;
}
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionResponse extends SpeakeasyBase {
    contentType: string;
    cryptoKey?: shared.CryptoKey;
    statusCode: number;
}
