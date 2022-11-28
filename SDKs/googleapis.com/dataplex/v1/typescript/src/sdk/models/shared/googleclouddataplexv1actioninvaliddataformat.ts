import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDataplexV1ActionInvalidDataFormat
/** 
 * Action details for invalid or unsupported data files detected by discovery.
**/
export class GoogleCloudDataplexV1ActionInvalidDataFormat extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expectedFormat" })
  expectedFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=newFormat" })
  newFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=sampledDataLocations" })
  sampledDataLocations?: string[];
}
