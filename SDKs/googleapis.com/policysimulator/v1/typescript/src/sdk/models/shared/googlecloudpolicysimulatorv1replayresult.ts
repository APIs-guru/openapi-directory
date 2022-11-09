import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudPolicysimulatorV1AccessTuple } from "./googlecloudpolicysimulatorv1accesstuple";
import { GoogleCloudPolicysimulatorV1ReplayDiff } from "./googlecloudpolicysimulatorv1replaydiff";
import { GoogleRpcStatus } from "./googlerpcstatus";
import { GoogleTypeDate } from "./googletypedate";


// GoogleCloudPolicysimulatorV1ReplayResult
/** 
 * The result of replaying a single access tuple against a simulated state.
**/
export class GoogleCloudPolicysimulatorV1ReplayResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessTuple" })
  accessTuple?: GoogleCloudPolicysimulatorV1AccessTuple;

  @Metadata({ data: "json, name=diff" })
  diff?: GoogleCloudPolicysimulatorV1ReplayDiff;

  @Metadata({ data: "json, name=error" })
  error?: GoogleRpcStatus;

  @Metadata({ data: "json, name=lastSeenDate" })
  lastSeenDate?: GoogleTypeDate;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parent" })
  parent?: string;
}
