import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExtrasTagsUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class ExtrasTagsUpdateRequest extends SpeakeasyBase {
    pathParams: ExtrasTagsUpdatePathParams;
    request: shared.TagInput;
}
export declare class ExtrasTagsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tag?: shared.Tag;
}
