import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVVersionSitesSiteIdsPathParams extends SpeakeasyBase {
    siteIds: string;
    version: string;
}
export declare class GetVVersionSitesSiteIdsRequest extends SpeakeasyBase {
    pathParams: GetVVersionSitesSiteIdsPathParams;
}
export declare class GetVVersionSitesSiteIdsResponse extends SpeakeasyBase {
    contentType: string;
    siteResponse?: shared.SiteResponse;
    statusCode: number;
}
