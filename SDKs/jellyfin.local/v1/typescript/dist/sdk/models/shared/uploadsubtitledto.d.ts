import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Upload subtitles dto.
**/
export declare class UploadSubtitleDto extends SpeakeasyBase {
    data: string;
    format: string;
    isForced: boolean;
    language: string;
}
