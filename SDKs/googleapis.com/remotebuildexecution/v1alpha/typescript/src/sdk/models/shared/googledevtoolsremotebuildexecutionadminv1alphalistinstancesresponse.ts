import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance } from "./googledevtoolsremotebuildexecutionadminv1alphainstance";



export class GoogleDevtoolsRemotebuildexecutionAdminV1alphaListInstancesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instances", elemType: GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance })
  instances?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance[];

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
