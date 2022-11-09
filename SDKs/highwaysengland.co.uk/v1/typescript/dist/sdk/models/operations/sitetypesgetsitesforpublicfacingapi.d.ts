import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SiteTypesGetSitesForPublicFacingApiPathParams extends SpeakeasyBase {
    siteTypeId: number;
    version: string;
}
export declare class SiteTypesGetSitesForPublicFacingApiRequest extends SpeakeasyBase {
    pathParams: SiteTypesGetSitesForPublicFacingApiPathParams;
}
export declare class SiteTypesGetSitesForPublicFacingApiResponse extends SpeakeasyBase {
    contentType: string;
    siteTypeLayer?: shared.SiteTypeLayer;
    statusCode: number;
}
