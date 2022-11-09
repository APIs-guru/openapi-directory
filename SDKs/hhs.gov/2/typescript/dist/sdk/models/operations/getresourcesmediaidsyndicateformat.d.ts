import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetResourcesMediaIdSyndicateFormatPathParams extends SpeakeasyBase {
    format: string;
    id: number;
}
export declare class GetResourcesMediaIdSyndicateFormatQueryParams extends SpeakeasyBase {
    autoplay?: boolean;
    cssClass?: string;
    fontSize?: number;
    imageFloat?: string;
    imageMargin?: string;
    rel?: boolean;
    stripBreaks?: boolean;
    stripClasses?: boolean;
    stripImages?: boolean;
    stripScripts?: boolean;
    stripStyles?: boolean;
}
export declare class GetResourcesMediaIdSyndicateFormatRequest extends SpeakeasyBase {
    pathParams: GetResourcesMediaIdSyndicateFormatPathParams;
    queryParams: GetResourcesMediaIdSyndicateFormatQueryParams;
}
export declare class GetResourcesMediaIdSyndicateFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    syndicateMarshallerWrapped?: shared.SyndicateMarshallerWrapped;
}
