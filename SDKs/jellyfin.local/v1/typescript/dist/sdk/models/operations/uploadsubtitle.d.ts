import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UploadSubtitlePathParams extends SpeakeasyBase {
    itemId: string;
}
export declare class UploadSubtitleRequests extends SpeakeasyBase {
    uploadSubtitleDto?: shared.UploadSubtitleDto;
    uploadSubtitleDto1?: shared.UploadSubtitleDto;
    uploadSubtitleDto2?: shared.UploadSubtitleDto;
}
export declare class UploadSubtitleRequest extends SpeakeasyBase {
    pathParams: UploadSubtitlePathParams;
    request: UploadSubtitleRequests;
}
export declare class UploadSubtitleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
