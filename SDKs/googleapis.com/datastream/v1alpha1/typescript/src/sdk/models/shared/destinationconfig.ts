import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GcsDestinationConfig } from "./gcsdestinationconfig";



// DestinationConfig
/** 
 * The configuration of the stream destination.
**/
export class DestinationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinationConnectionProfileName" })
  destinationConnectionProfileName?: string;

  @SpeakeasyMetadata({ data: "json, name=gcsDestinationConfig" })
  gcsDestinationConfig?: GcsDestinationConfig;
}
