import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PreviewsReadPathParams extends SpeakeasyBase {
    fileId: string;
}
export declare class PreviewsReadRequest extends SpeakeasyBase {
    pathParams: PreviewsReadPathParams;
}
export declare class PreviewsReadResponse extends SpeakeasyBase {
    contentType: string;
    previewResponse?: shared.PreviewResponse;
    statusCode: number;
}
