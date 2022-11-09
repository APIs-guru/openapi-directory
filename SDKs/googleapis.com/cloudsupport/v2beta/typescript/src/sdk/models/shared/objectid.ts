import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ObjectId
/** 
 * # gdata.* are outside protos with mising documentation
**/
export class ObjectId extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucketName" })
  bucketName?: string;

  @Metadata({ data: "json, name=generation" })
  generation?: string;

  @Metadata({ data: "json, name=objectName" })
  objectName?: string;
}
