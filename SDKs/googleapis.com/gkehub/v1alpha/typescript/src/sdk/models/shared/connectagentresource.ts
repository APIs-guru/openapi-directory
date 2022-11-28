import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TypeMeta } from "./typemeta";



// ConnectAgentResource
/** 
 * ConnectAgentResource represents a Kubernetes resource manifest for Connect Agent deployment.
**/
export class ConnectAgentResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=manifest" })
  manifest?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: TypeMeta;
}
