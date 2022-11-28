import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DiffVersionResponse
/** 
 * # gdata.* are outside protos with mising documentation
**/
export class DiffVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=objectSizeBytes" })
  objectSizeBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=objectVersion" })
  objectVersion?: string;
}
