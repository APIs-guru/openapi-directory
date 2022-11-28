import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance } from "./googledevtoolsremotebuildexecutionadminv1alphainstance";



// GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequest
/** 
 * The request used for `CreateInstance`.
**/
export class GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instance" })
  instance?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance;

  @SpeakeasyMetadata({ data: "json, name=instanceId" })
  instanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;
}
