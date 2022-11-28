import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CompositeMedia } from "./compositemedia";



// DiffDownloadResponse
/** 
 * # gdata.* are outside protos with mising documentation
**/
export class DiffDownloadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=objectLocation" })
  objectLocation?: CompositeMedia;
}
