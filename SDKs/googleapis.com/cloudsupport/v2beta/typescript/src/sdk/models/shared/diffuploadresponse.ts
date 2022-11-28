import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CompositeMedia } from "./compositemedia";



// DiffUploadResponse
/** 
 * # gdata.* are outside protos with mising documentation
**/
export class DiffUploadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=objectVersion" })
  objectVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=originalObject" })
  originalObject?: CompositeMedia;
}
