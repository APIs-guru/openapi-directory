import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDataplexV1ActionInvalidDataFormat
/** 
 * Action details for invalid or unsupported data files detected by discovery.
**/
export class GoogleCloudDataplexV1ActionInvalidDataFormat extends SpeakeasyBase {
  @Metadata({ data: "json, name=expectedFormat" })
  expectedFormat?: string;

  @Metadata({ data: "json, name=newFormat" })
  newFormat?: string;

  @Metadata({ data: "json, name=sampledDataLocations" })
  sampledDataLocations?: string[];
}
