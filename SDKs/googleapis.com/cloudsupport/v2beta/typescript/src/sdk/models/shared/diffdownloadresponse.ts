import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CompositeMedia } from "./compositemedia";


// DiffDownloadResponse
/** 
 * # gdata.* are outside protos with mising documentation
**/
export class DiffDownloadResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=objectLocation" })
  objectLocation?: CompositeMedia;
}
