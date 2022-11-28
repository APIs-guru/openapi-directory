import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VisionProjectsLocationsProductsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class VisionProjectsLocationsProductsListQueryParams extends SpeakeasyBase {
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
export declare class VisionProjectsLocationsProductsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VisionProjectsLocationsProductsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VisionProjectsLocationsProductsListSecurity extends SpeakeasyBase {
    option1?: VisionProjectsLocationsProductsListSecurityOption1;
    option2?: VisionProjectsLocationsProductsListSecurityOption2;
}
export declare class VisionProjectsLocationsProductsListRequest extends SpeakeasyBase {
    pathParams: VisionProjectsLocationsProductsListPathParams;
    queryParams: VisionProjectsLocationsProductsListQueryParams;
    security: VisionProjectsLocationsProductsListSecurity;
}
export declare class VisionProjectsLocationsProductsListResponse extends SpeakeasyBase {
    contentType: string;
    listProductsResponse?: shared.ListProductsResponse;
    statusCode: number;
}
