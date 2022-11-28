import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1Trigger } from "./googleclouddataplexv1trigger";



// GoogleCloudDataplexV1DataScanExecutionSpec
/** 
 * DataScan execution settings.
**/
export class GoogleCloudDataplexV1DataScanExecutionSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=field" })
  field?: string;

  @SpeakeasyMetadata({ data: "json, name=trigger" })
  trigger?: GoogleCloudDataplexV1Trigger;
}
