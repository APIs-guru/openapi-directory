import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Destination } from "./destination";



// DestinationConfig
/** 
 * Define the Connectors target endpoint.
**/
export class DestinationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinations", elemType: Destination })
  destinations?: Destination[];

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;
}
