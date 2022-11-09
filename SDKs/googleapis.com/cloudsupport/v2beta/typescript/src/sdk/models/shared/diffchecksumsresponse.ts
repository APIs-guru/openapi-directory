import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CompositeMedia } from "./compositemedia";
import { CompositeMedia } from "./compositemedia";


// DiffChecksumsResponse
/** 
 * # gdata.* are outside protos with mising documentation
**/
export class DiffChecksumsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=checksumsLocation" })
  checksumsLocation?: CompositeMedia;

  @Metadata({ data: "json, name=chunkSizeBytes" })
  chunkSizeBytes?: string;

  @Metadata({ data: "json, name=objectLocation" })
  objectLocation?: CompositeMedia;

  @Metadata({ data: "json, name=objectSizeBytes" })
  objectSizeBytes?: string;

  @Metadata({ data: "json, name=objectVersion" })
  objectVersion?: string;
}
