import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetResourcesSourcesIdSyndicateFormatPathParams extends SpeakeasyBase {
    format: string;
    id: number;
}
export declare class GetResourcesSourcesIdSyndicateFormatQueryParams extends SpeakeasyBase {
    displayMethod?: string;
}
export declare class GetResourcesSourcesIdSyndicateFormatRequest extends SpeakeasyBase {
    pathParams: GetResourcesSourcesIdSyndicateFormatPathParams;
    queryParams: GetResourcesSourcesIdSyndicateFormatQueryParams;
}
export declare class GetResourcesSourcesIdSyndicateFormatResponse extends SpeakeasyBase {
    contentType: string;
    mediaItemWrappeds?: shared.MediaItemWrapped[];
    statusCode: number;
}
