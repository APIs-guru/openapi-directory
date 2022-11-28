import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetResourcesTagsIdFormatPathParams extends SpeakeasyBase {
    format: string;
    id: number;
}
export declare class GetResourcesTagsIdFormatRequest extends SpeakeasyBase {
    pathParams: GetResourcesTagsIdFormatPathParams;
}
export declare class GetResourcesTagsIdFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tagMarshallerWrappeds?: shared.TagMarshallerWrapped[];
}
