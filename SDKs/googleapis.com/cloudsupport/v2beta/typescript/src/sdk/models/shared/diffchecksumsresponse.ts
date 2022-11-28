import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CompositeMedia } from "./compositemedia";



// DiffChecksumsResponse
/** 
 * # gdata.* are outside protos with mising documentation
**/
export class DiffChecksumsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=checksumsLocation" })
  checksumsLocation?: CompositeMedia;

  @SpeakeasyMetadata({ data: "json, name=chunkSizeBytes" })
  chunkSizeBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=objectLocation" })
  objectLocation?: CompositeMedia;

  @SpeakeasyMetadata({ data: "json, name=objectSizeBytes" })
  objectSizeBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=objectVersion" })
  objectVersion?: string;
}
