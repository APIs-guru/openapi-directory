import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool } from "./googledevtoolsremotebuildexecutionadminv1alphaworkerpool";


export class GoogleDevtoolsRemotebuildexecutionAdminV1alphaListWorkerPoolsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=workerPools", elemType: shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool })
  workerPools?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool[];
}
