import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool } from "./googledevtoolsremotebuildexecutionadminv1alphaworkerpool";


// GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest
/** 
 * The request used for `CreateWorkerPool`.
**/
export class GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=parent" })
  parent?: string;

  @Metadata({ data: "json, name=poolId" })
  poolId?: string;

  @Metadata({ data: "json, name=workerPool" })
  workerPool?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool;
}
