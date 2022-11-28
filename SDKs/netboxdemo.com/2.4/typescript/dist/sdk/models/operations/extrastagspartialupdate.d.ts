import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExtrasTagsPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class ExtrasTagsPartialUpdateRequest extends SpeakeasyBase {
    pathParams: ExtrasTagsPartialUpdatePathParams;
    request: shared.TagInput;
}
export declare class ExtrasTagsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tag?: shared.Tag;
}
