import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateTagPathParams extends SpeakeasyBase {
    projectId: string;
    tagId: string;
}
export declare class UpdateTagHeaders extends SpeakeasyBase {
    trainingKey: string;
}
export declare class UpdateTagRequestsInput extends SpeakeasyBase {
    applicationXml: Uint8Array;
    tag?: shared.TagInput;
    tag1?: shared.TagInput;
    tag2?: shared.TagInput;
    textXml: Uint8Array;
}
export declare class UpdateTagRequest extends SpeakeasyBase {
    pathParams: UpdateTagPathParams;
    headers: UpdateTagHeaders;
    request: UpdateTagRequestsInput;
}
export declare class UpdateTagResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tag?: shared.Tag;
}
