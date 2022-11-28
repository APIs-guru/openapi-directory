import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InstanceReference
/** 
 * A reference to a Compute Engine instance.
**/
export class InstanceReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instanceId" })
  instanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=instanceName" })
  instanceName?: string;

  @SpeakeasyMetadata({ data: "json, name=publicEciesKey" })
  publicEciesKey?: string;

  @SpeakeasyMetadata({ data: "json, name=publicKey" })
  publicKey?: string;
}
