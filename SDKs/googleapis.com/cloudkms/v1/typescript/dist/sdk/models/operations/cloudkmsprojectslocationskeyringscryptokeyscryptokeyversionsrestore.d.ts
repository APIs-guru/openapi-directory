import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestorePathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestoreQueryParams extends SpeakeasyBase {
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
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestoreSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestoreSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestoreSecurity extends SpeakeasyBase {
    option1?: CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestoreSecurityOption1;
    option2?: CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestoreSecurityOption2;
}
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestoreRequest extends SpeakeasyBase {
    pathParams: CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestorePathParams;
    queryParams: CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestoreQueryParams;
    request?: Map<string, any>;
    security: CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestoreSecurity;
}
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestoreResponse extends SpeakeasyBase {
    contentType: string;
    cryptoKeyVersion?: shared.CryptoKeyVersion;
    statusCode: number;
}
