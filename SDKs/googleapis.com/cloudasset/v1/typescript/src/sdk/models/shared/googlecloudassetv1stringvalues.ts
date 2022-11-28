import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudAssetV1StringValues
/** 
 * The string values for the list constraints.
**/
export class GoogleCloudAssetV1StringValues extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowedValues" })
  allowedValues?: string[];

  @SpeakeasyMetadata({ data: "json, name=deniedValues" })
  deniedValues?: string[];
}
