import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPolicysimulatorV1beta1AccessTuple } from "./googlecloudpolicysimulatorv1beta1accesstuple";
import { GoogleCloudPolicysimulatorV1beta1ReplayDiff } from "./googlecloudpolicysimulatorv1beta1replaydiff";
import { GoogleRpcStatus } from "./googlerpcstatus";
import { GoogleTypeDate } from "./googletypedate";
/**
 * The result of replaying a single access tuple against a simulated state.
**/
export declare class GoogleCloudPolicysimulatorV1beta1ReplayResult extends SpeakeasyBase {
    accessTuple?: GoogleCloudPolicysimulatorV1beta1AccessTuple;
    diff?: GoogleCloudPolicysimulatorV1beta1ReplayDiff;
    error?: GoogleRpcStatus;
    lastSeenDate?: GoogleTypeDate;
    name?: string;
    parent?: string;
}
