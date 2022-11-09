import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CompositeMedia } from "./compositemedia";


// DiffUploadResponse
/** 
 * # gdata.* are outside protos with mising documentation
**/
export class DiffUploadResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=objectVersion" })
  objectVersion?: string;

  @Metadata({ data: "json, name=originalObject" })
  originalObject?: CompositeMedia;
}
