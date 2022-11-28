import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UploadSubtitleDto
/** 
 * Upload subtitles dto.
**/
export class UploadSubtitleDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Data" })
  data: string;

  @SpeakeasyMetadata({ data: "json, name=Format" })
  format: string;

  @SpeakeasyMetadata({ data: "json, name=IsForced" })
  isForced: boolean;

  @SpeakeasyMetadata({ data: "json, name=Language" })
  language: string;
}
