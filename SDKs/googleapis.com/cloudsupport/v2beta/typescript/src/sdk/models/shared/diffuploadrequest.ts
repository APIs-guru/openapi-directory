import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CompositeMedia } from "./compositemedia";



// DiffUploadRequest
/** 
 * # gdata.* are outside protos with mising documentation
**/
export class DiffUploadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=checksumsInfo" })
  checksumsInfo?: CompositeMedia;

  @SpeakeasyMetadata({ data: "json, name=objectInfo" })
  objectInfo?: CompositeMedia;

  @SpeakeasyMetadata({ data: "json, name=objectVersion" })
  objectVersion?: string;
}
