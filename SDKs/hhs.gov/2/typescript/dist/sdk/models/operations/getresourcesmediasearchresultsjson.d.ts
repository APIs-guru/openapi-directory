import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetResourcesMediaSearchResultsJsonQueryParams extends SpeakeasyBase {
    max?: number;
    offset?: number;
    q: string;
}
export declare class GetResourcesMediaSearchResultsJsonRequest extends SpeakeasyBase {
    queryParams: GetResourcesMediaSearchResultsJsonQueryParams;
}
export declare class GetResourcesMediaSearchResultsJsonResponse extends SpeakeasyBase {
    contentType: string;
    mediaItemWrappeds?: shared.MediaItemWrapped[];
    statusCode: number;
}
