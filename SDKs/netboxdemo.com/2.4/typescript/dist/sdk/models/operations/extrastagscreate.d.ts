import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExtrasTagsCreateRequest extends SpeakeasyBase {
    request: shared.TagInput;
}
export declare class ExtrasTagsCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tag?: shared.Tag;
}
