import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BigQueryDestinationConfig } from "./bigquerydestinationconfig";
import { GcsDestinationConfig } from "./gcsdestinationconfig";



// DestinationConfig
/** 
 * The configuration of the stream destination.
**/
export class DestinationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bigqueryDestinationConfig" })
  bigqueryDestinationConfig?: BigQueryDestinationConfig;

  @SpeakeasyMetadata({ data: "json, name=destinationConnectionProfile" })
  destinationConnectionProfile?: string;

  @SpeakeasyMetadata({ data: "json, name=gcsDestinationConfig" })
  gcsDestinationConfig?: GcsDestinationConfig;
}
