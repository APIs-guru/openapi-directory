import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Destination } from "./destination";


// DestinationConfig
/** 
 * Define the Connectors target endpoint.
**/
export class DestinationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=destinations", elemType: shared.Destination })
  destinations?: Destination[];

  @Metadata({ data: "json, name=key" })
  key?: string;
}
