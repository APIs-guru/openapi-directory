import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HttpRule } from "./httprule";


// Http
/** 
 * Defines the HTTP configuration for an API service. It contains a list of HttpRule, each specifying the mapping of an RPC method to one or more HTTP REST API methods.
**/
export class Http extends SpeakeasyBase {
  @Metadata({ data: "json, name=fullyDecodeReservedExpansion" })
  fullyDecodeReservedExpansion?: boolean;

  @Metadata({ data: "json, name=rules", elemType: shared.HttpRule })
  rules?: HttpRule[];
}
