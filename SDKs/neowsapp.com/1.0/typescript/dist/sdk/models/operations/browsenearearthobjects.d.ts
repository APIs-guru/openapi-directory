import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BrowseNearEarthObjectsQueryParams extends SpeakeasyBase {
    page?: number;
    size?: number;
}
export declare class BrowseNearEarthObjectsRequest extends SpeakeasyBase {
    queryParams: BrowseNearEarthObjectsQueryParams;
}
export declare class BrowseNearEarthObjectsResponse extends SpeakeasyBase {
    contentType: string;
    nearEarthObject?: shared.NearEarthObject;
    statusCode: number;
}
