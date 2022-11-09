import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InstanceReference
/** 
 * A reference to a Compute Engine instance.
**/
export class InstanceReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=instanceId" })
  instanceId?: string;

  @Metadata({ data: "json, name=instanceName" })
  instanceName?: string;

  @Metadata({ data: "json, name=publicEciesKey" })
  publicEciesKey?: string;

  @Metadata({ data: "json, name=publicKey" })
  publicKey?: string;
}
