import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudPolicysimulatorV1beta1AccessTuple } from "./googlecloudpolicysimulatorv1beta1accesstuple";
import { GoogleCloudPolicysimulatorV1beta1ReplayDiff } from "./googlecloudpolicysimulatorv1beta1replaydiff";
import { GoogleRpcStatus } from "./googlerpcstatus";
import { GoogleTypeDate } from "./googletypedate";


// GoogleCloudPolicysimulatorV1beta1ReplayResult
/** 
 * The result of replaying a single access tuple against a simulated state.
**/
export class GoogleCloudPolicysimulatorV1beta1ReplayResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessTuple" })
  accessTuple?: GoogleCloudPolicysimulatorV1beta1AccessTuple;

  @Metadata({ data: "json, name=diff" })
  diff?: GoogleCloudPolicysimulatorV1beta1ReplayDiff;

  @Metadata({ data: "json, name=error" })
  error?: GoogleRpcStatus;

  @Metadata({ data: "json, name=lastSeenDate" })
  lastSeenDate?: GoogleTypeDate;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parent" })
  parent?: string;
}
