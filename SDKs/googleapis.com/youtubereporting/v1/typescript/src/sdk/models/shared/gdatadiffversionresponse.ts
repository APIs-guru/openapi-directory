import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GdataDiffVersionResponse
/** 
 * gdata
**/
export class GdataDiffVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=objectSizeBytes" })
  objectSizeBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=objectVersion" })
  objectVersion?: string;
}
