import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GdataCompositeMedia } from "./gdatacompositemedia";



// GdataDiffChecksumsResponse
/** 
 * gdata
**/
export class GdataDiffChecksumsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=checksumsLocation" })
  checksumsLocation?: GdataCompositeMedia;

  @SpeakeasyMetadata({ data: "json, name=chunkSizeBytes" })
  chunkSizeBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=objectLocation" })
  objectLocation?: GdataCompositeMedia;

  @SpeakeasyMetadata({ data: "json, name=objectSizeBytes" })
  objectSizeBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=objectVersion" })
  objectVersion?: string;
}
