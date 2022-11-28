import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare enum CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListViewEnum {
    CryptoKeyVersionViewUnspecified = "CRYPTO_KEY_VERSION_VIEW_UNSPECIFIED",
    Full = "FULL"
}
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListQueryParams extends SpeakeasyBase {
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
    view?: CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListViewEnum;
}
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListSecurity extends SpeakeasyBase {
    option1?: CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListSecurityOption1;
    option2?: CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListSecurityOption2;
}
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListRequest extends SpeakeasyBase {
    pathParams: CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListPathParams;
    queryParams: CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListQueryParams;
    security: CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListSecurity;
}
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListResponse extends SpeakeasyBase {
    contentType: string;
    listCryptoKeyVersionsResponse?: shared.ListCryptoKeyVersionsResponse;
    statusCode: number;
}
