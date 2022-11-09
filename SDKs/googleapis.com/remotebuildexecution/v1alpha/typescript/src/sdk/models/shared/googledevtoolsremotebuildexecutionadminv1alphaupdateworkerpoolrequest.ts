import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool } from "./googledevtoolsremotebuildexecutionadminv1alphaworkerpool";


// GoogleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest
/** 
 * The request used for UpdateWorkerPool.
**/
export class GoogleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=updateMask" })
  updateMask?: string;

  @Metadata({ data: "json, name=workerPool" })
  workerPool?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool;
}
