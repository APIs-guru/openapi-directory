import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportQueryParams extends SpeakeasyBase {
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
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportSecurity extends SpeakeasyBase {
    option1?: CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportSecurityOption1;
    option2?: CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportSecurityOption2;
}
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportRequest extends SpeakeasyBase {
    pathParams: CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportPathParams;
    queryParams: CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportQueryParams;
    request?: shared.ImportCryptoKeyVersionRequest;
    security: CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportSecurity;
}
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportResponse extends SpeakeasyBase {
    contentType: string;
    cryptoKeyVersion?: shared.CryptoKeyVersion;
    statusCode: number;
}
