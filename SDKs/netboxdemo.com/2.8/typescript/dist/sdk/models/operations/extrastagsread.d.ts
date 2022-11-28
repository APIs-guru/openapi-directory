import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExtrasTagsReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class ExtrasTagsReadRequest extends SpeakeasyBase {
    pathParams: ExtrasTagsReadPathParams;
}
export declare class ExtrasTagsReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tag?: shared.Tag;
}
