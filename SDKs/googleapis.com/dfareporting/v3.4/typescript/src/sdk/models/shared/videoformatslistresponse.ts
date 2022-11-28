import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VideoFormat } from "./videoformat";



// VideoFormatsListResponse
/** 
 * Video Format List Response
**/
export class VideoFormatsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=videoFormats", elemType: VideoFormat })
  videoFormats?: VideoFormat[];
}
