import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TypeMeta } from "./typemeta";


// ConnectAgentResource
/** 
 * ConnectAgentResource represents a Kubernetes resource manifest for Connect Agent deployment.
**/
export class ConnectAgentResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=manifest" })
  manifest?: string;

  @Metadata({ data: "json, name=type" })
  type?: TypeMeta;
}
