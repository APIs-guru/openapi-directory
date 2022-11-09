import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UploadSubtitleDto
/** 
 * Upload subtitles dto.
**/
export class UploadSubtitleDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=Data" })
  data: string;

  @Metadata({ data: "json, name=Format" })
  format: string;

  @Metadata({ data: "json, name=IsForced" })
  isForced: boolean;

  @Metadata({ data: "json, name=Language" })
  language: string;
}
