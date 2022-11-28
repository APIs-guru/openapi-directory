import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool } from "./googledevtoolsremotebuildexecutionadminv1alphaworkerpool";



export class GoogleDevtoolsRemotebuildexecutionAdminV1alphaListWorkerPoolsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=workerPools", elemType: GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool })
  workerPools?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool[];
}
