import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GdataObjectId
/** 
 * gdata
**/
export class GdataObjectId extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucketName" })
  bucketName?: string;

  @Metadata({ data: "json, name=generation" })
  generation?: string;

  @Metadata({ data: "json, name=objectName" })
  objectName?: string;
}
