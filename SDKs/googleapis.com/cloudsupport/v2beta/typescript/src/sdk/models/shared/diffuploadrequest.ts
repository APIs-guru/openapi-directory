import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CompositeMedia } from "./compositemedia";
import { CompositeMedia } from "./compositemedia";


// DiffUploadRequest
/** 
 * # gdata.* are outside protos with mising documentation
**/
export class DiffUploadRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=checksumsInfo" })
  checksumsInfo?: CompositeMedia;

  @Metadata({ data: "json, name=objectInfo" })
  objectInfo?: CompositeMedia;

  @Metadata({ data: "json, name=objectVersion" })
  objectVersion?: string;
}
