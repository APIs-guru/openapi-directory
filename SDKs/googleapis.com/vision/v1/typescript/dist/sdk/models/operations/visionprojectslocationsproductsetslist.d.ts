import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VisionProjectsLocationsProductSetsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class VisionProjectsLocationsProductSetsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class VisionProjectsLocationsProductSetsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VisionProjectsLocationsProductSetsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VisionProjectsLocationsProductSetsListSecurity extends SpeakeasyBase {
    option1?: VisionProjectsLocationsProductSetsListSecurityOption1;
    option2?: VisionProjectsLocationsProductSetsListSecurityOption2;
}
export declare class VisionProjectsLocationsProductSetsListRequest extends SpeakeasyBase {
    pathParams: VisionProjectsLocationsProductSetsListPathParams;
    queryParams: VisionProjectsLocationsProductSetsListQueryParams;
    security: VisionProjectsLocationsProductSetsListSecurity;
}
export declare class VisionProjectsLocationsProductSetsListResponse extends SpeakeasyBase {
    contentType: string;
    listProductSetsResponse?: shared.ListProductSetsResponse;
    statusCode: number;
}
