import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GcsDestinationConfig } from "./gcsdestinationconfig";


// DestinationConfig
/** 
 * The configuration of the stream destination.
**/
export class DestinationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=destinationConnectionProfileName" })
  destinationConnectionProfileName?: string;

  @Metadata({ data: "json, name=gcsDestinationConfig" })
  gcsDestinationConfig?: GcsDestinationConfig;
}
