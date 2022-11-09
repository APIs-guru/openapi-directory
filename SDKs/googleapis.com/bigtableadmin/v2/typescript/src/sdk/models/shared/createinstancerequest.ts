import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Cluster } from "./cluster";
import { Instance } from "./instance";


// CreateInstanceRequest
/** 
 * Request message for BigtableInstanceAdmin.CreateInstance.
**/
export class CreateInstanceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusters", elemType: shared.Cluster })
  clusters?: Map<string, Cluster>;

  @Metadata({ data: "json, name=instance" })
  instance?: Instance;

  @Metadata({ data: "json, name=instanceId" })
  instanceId?: string;

  @Metadata({ data: "json, name=parent" })
  parent?: string;
}
