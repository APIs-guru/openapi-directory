import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HttpRule } from "./httprule";



// Http
/** 
 * Defines the HTTP configuration for an API service. It contains a list of HttpRule, each specifying the mapping of an RPC method to one or more HTTP REST API methods.
**/
export class Http extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fullyDecodeReservedExpansion" })
  fullyDecodeReservedExpansion?: boolean;

  @SpeakeasyMetadata({ data: "json, name=rules", elemType: HttpRule })
  rules?: HttpRule[];
}
