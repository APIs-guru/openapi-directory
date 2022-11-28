import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetResourcesMediaTypesFormatPathParams extends SpeakeasyBase {
    format: string;
}
export declare class GetResourcesMediaTypesFormatRequest extends SpeakeasyBase {
    pathParams: GetResourcesMediaTypesFormatPathParams;
}
export declare class GetResourcesMediaTypesFormatResponse extends SpeakeasyBase {
    contentType: string;
    mediaTypeHolderWrappeds?: shared.MediaTypeHolderWrapped[];
    statusCode: number;
}
