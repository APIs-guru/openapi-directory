import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPolicysimulatorV1AccessTuple } from "./googlecloudpolicysimulatorv1accesstuple";
import { GoogleCloudPolicysimulatorV1ReplayDiff } from "./googlecloudpolicysimulatorv1replaydiff";
import { GoogleRpcStatus } from "./googlerpcstatus";
import { GoogleTypeDate } from "./googletypedate";



// GoogleCloudPolicysimulatorV1ReplayResult
/** 
 * The result of replaying a single access tuple against a simulated state.
**/
export class GoogleCloudPolicysimulatorV1ReplayResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessTuple" })
  accessTuple?: GoogleCloudPolicysimulatorV1AccessTuple;

  @SpeakeasyMetadata({ data: "json, name=diff" })
  diff?: GoogleCloudPolicysimulatorV1ReplayDiff;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: GoogleRpcStatus;

  @SpeakeasyMetadata({ data: "json, name=lastSeenDate" })
  lastSeenDate?: GoogleTypeDate;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;
}
