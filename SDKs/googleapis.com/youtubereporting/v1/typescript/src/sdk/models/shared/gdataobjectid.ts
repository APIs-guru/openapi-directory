import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GdataObjectId
/** 
 * gdata
**/
export class GdataObjectId extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucketName" })
  bucketName?: string;

  @SpeakeasyMetadata({ data: "json, name=generation" })
  generation?: string;

  @SpeakeasyMetadata({ data: "json, name=objectName" })
  objectName?: string;
}
