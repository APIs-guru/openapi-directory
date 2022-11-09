import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetAnnotationsUsingPostRequest extends SpeakeasyBase {
    request?: shared.AnnotationRequest;
}
export declare class GetAnnotationsUsingPostResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
