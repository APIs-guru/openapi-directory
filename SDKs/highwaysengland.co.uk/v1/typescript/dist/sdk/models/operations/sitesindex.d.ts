import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SitesIndexPathParams extends SpeakeasyBase {
    version: string;
}
export declare class SitesIndexRequest extends SpeakeasyBase {
    pathParams: SitesIndexPathParams;
}
export declare class SitesIndexResponse extends SpeakeasyBase {
    contentType: string;
    siteResponse?: shared.SiteResponse;
    statusCode: number;
}
