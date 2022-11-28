import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ObjectId
/** 
 * # gdata.* are outside protos with mising documentation
**/
export class ObjectId extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucketName" })
  bucketName?: string;

  @SpeakeasyMetadata({ data: "json, name=generation" })
  generation?: string;

  @SpeakeasyMetadata({ data: "json, name=objectName" })
  objectName?: string;
}
