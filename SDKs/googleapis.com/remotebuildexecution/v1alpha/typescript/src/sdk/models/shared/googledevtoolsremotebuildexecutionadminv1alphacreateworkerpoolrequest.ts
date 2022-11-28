import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool } from "./googledevtoolsremotebuildexecutionadminv1alphaworkerpool";



// GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest
/** 
 * The request used for `CreateWorkerPool`.
**/
export class GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;

  @SpeakeasyMetadata({ data: "json, name=poolId" })
  poolId?: string;

  @SpeakeasyMetadata({ data: "json, name=workerPool" })
  workerPool?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool;
}
