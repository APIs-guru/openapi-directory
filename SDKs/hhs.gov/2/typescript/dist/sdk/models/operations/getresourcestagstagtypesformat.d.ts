import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetResourcesTagsTagTypesFormatPathParams extends SpeakeasyBase {
    format: string;
}
export declare class GetResourcesTagsTagTypesFormatRequest extends SpeakeasyBase {
    pathParams: GetResourcesTagsTagTypesFormatPathParams;
}
export declare class GetResourcesTagsTagTypesFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tagTypeMarshallerWrappeds?: shared.TagTypeMarshallerWrapped[];
}
