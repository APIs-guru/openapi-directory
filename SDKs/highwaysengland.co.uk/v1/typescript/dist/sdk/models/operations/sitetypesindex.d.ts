import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SiteTypesIndexPathParams extends SpeakeasyBase {
    version: string;
}
export declare class SiteTypesIndexRequest extends SpeakeasyBase {
    pathParams: SiteTypesIndexPathParams;
}
export declare class SiteTypesIndexResponse extends SpeakeasyBase {
    contentType: string;
    siteTypeResponse?: shared.SiteTypeResponse;
    statusCode: number;
}
