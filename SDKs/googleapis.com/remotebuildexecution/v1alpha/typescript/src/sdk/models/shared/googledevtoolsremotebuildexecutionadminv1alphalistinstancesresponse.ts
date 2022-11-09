import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance } from "./googledevtoolsremotebuildexecutionadminv1alphainstance";


export class GoogleDevtoolsRemotebuildexecutionAdminV1alphaListInstancesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=instances", elemType: shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance })
  instances?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance[];

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
