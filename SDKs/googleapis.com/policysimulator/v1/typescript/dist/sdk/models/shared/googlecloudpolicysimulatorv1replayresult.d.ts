import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPolicysimulatorV1AccessTuple } from "./googlecloudpolicysimulatorv1accesstuple";
import { GoogleCloudPolicysimulatorV1ReplayDiff } from "./googlecloudpolicysimulatorv1replaydiff";
import { GoogleRpcStatus } from "./googlerpcstatus";
import { GoogleTypeDate } from "./googletypedate";
/**
 * The result of replaying a single access tuple against a simulated state.
**/
export declare class GoogleCloudPolicysimulatorV1ReplayResult extends SpeakeasyBase {
    accessTuple?: GoogleCloudPolicysimulatorV1AccessTuple;
    diff?: GoogleCloudPolicysimulatorV1ReplayDiff;
    error?: GoogleRpcStatus;
    lastSeenDate?: GoogleTypeDate;
    name?: string;
    parent?: string;
}
