import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPolicysimulatorV1beta1AccessTuple } from "./googlecloudpolicysimulatorv1beta1accesstuple";
import { GoogleCloudPolicysimulatorV1beta1ReplayDiff } from "./googlecloudpolicysimulatorv1beta1replaydiff";
import { GoogleRpcStatus } from "./googlerpcstatus";
import { GoogleTypeDate } from "./googletypedate";



// GoogleCloudPolicysimulatorV1beta1ReplayResult
/** 
 * The result of replaying a single access tuple against a simulated state.
**/
export class GoogleCloudPolicysimulatorV1beta1ReplayResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessTuple" })
  accessTuple?: GoogleCloudPolicysimulatorV1beta1AccessTuple;

  @SpeakeasyMetadata({ data: "json, name=diff" })
  diff?: GoogleCloudPolicysimulatorV1beta1ReplayDiff;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: GoogleRpcStatus;

  @SpeakeasyMetadata({ data: "json, name=lastSeenDate" })
  lastSeenDate?: GoogleTypeDate;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;
}
