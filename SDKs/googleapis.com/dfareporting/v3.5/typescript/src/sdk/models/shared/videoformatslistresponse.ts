import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { VideoFormat } from "./videoformat";


// VideoFormatsListResponse
/** 
 * Video Format List Response
**/
export class VideoFormatsListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=videoFormats", elemType: shared.VideoFormat })
  videoFormats?: VideoFormat[];
}
