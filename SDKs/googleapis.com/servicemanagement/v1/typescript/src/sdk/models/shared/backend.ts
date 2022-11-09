import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BackendRule } from "./backendrule";


// Backend
/** 
 * `Backend` defines the backend configuration for a service.
**/
export class Backend extends SpeakeasyBase {
  @Metadata({ data: "json, name=rules", elemType: shared.BackendRule })
  rules?: BackendRule[];
}
