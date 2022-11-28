import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare enum CloudkmsProjectsLocationsKeyRingsCryptoKeysListVersionViewEnum {
    CryptoKeyVersionViewUnspecified = "CRYPTO_KEY_VERSION_VIEW_UNSPECIFIED",
    Full = "FULL"
}
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    versionView?: CloudkmsProjectsLocationsKeyRingsCryptoKeysListVersionViewEnum;
}
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysListSecurity extends SpeakeasyBase {
    option1?: CloudkmsProjectsLocationsKeyRingsCryptoKeysListSecurityOption1;
    option2?: CloudkmsProjectsLocationsKeyRingsCryptoKeysListSecurityOption2;
}
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysListRequest extends SpeakeasyBase {
    pathParams: CloudkmsProjectsLocationsKeyRingsCryptoKeysListPathParams;
    queryParams: CloudkmsProjectsLocationsKeyRingsCryptoKeysListQueryParams;
    security: CloudkmsProjectsLocationsKeyRingsCryptoKeysListSecurity;
}
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysListResponse extends SpeakeasyBase {
    contentType: string;
    listCryptoKeysResponse?: shared.ListCryptoKeysResponse;
    statusCode: number;
}
