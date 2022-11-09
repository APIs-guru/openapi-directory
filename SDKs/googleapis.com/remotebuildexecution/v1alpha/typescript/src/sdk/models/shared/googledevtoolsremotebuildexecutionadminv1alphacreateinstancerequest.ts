import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance } from "./googledevtoolsremotebuildexecutionadminv1alphainstance";


// GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequest
/** 
 * The request used for `CreateInstance`.
**/
export class GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=instance" })
  instance?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance;

  @Metadata({ data: "json, name=instanceId" })
  instanceId?: string;

  @Metadata({ data: "json, name=parent" })
  parent?: string;
}
