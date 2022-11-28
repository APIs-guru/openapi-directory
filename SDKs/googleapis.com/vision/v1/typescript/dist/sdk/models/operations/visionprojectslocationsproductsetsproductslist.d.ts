import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VisionProjectsLocationsProductSetsProductsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class VisionProjectsLocationsProductSetsProductsListQueryParams extends SpeakeasyBase {
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
export declare class VisionProjectsLocationsProductSetsProductsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VisionProjectsLocationsProductSetsProductsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VisionProjectsLocationsProductSetsProductsListSecurity extends SpeakeasyBase {
    option1?: VisionProjectsLocationsProductSetsProductsListSecurityOption1;
    option2?: VisionProjectsLocationsProductSetsProductsListSecurityOption2;
}
export declare class VisionProjectsLocationsProductSetsProductsListRequest extends SpeakeasyBase {
    pathParams: VisionProjectsLocationsProductSetsProductsListPathParams;
    queryParams: VisionProjectsLocationsProductSetsProductsListQueryParams;
    security: VisionProjectsLocationsProductSetsProductsListSecurity;
}
export declare class VisionProjectsLocationsProductSetsProductsListResponse extends SpeakeasyBase {
    contentType: string;
    listProductsInProductSetResponse?: shared.ListProductsInProductSetResponse;
    statusCode: number;
}
