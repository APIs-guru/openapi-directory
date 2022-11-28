import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool } from "./googledevtoolsremotebuildexecutionadminv1alphaworkerpool";



// GoogleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest
/** 
 * The request used for UpdateWorkerPool.
**/
export class GoogleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=updateMask" })
  updateMask?: string;

  @SpeakeasyMetadata({ data: "json, name=workerPool" })
  workerPool?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool;
}
