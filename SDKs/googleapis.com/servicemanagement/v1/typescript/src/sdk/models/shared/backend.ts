import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BackendRule } from "./backendrule";



// Backend
/** 
 * `Backend` defines the backend configuration for a service.
**/
export class Backend extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rules", elemType: BackendRule })
  rules?: BackendRule[];
}
