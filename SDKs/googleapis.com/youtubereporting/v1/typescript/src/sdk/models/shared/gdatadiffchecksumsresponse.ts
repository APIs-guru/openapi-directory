import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GdataCompositeMedia } from "./gdatacompositemedia";
import { GdataCompositeMedia } from "./gdatacompositemedia";


// GdataDiffChecksumsResponse
/** 
 * gdata
**/
export class GdataDiffChecksumsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=checksumsLocation" })
  checksumsLocation?: GdataCompositeMedia;

  @Metadata({ data: "json, name=chunkSizeBytes" })
  chunkSizeBytes?: string;

  @Metadata({ data: "json, name=objectLocation" })
  objectLocation?: GdataCompositeMedia;

  @Metadata({ data: "json, name=objectSizeBytes" })
  objectSizeBytes?: string;

  @Metadata({ data: "json, name=objectVersion" })
  objectVersion?: string;
}
