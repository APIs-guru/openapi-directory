import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaLabelLock } from "./googleappsdrivelabelsv2betalabellock";
/**
 * The response to a ListLabelLocksRequest.
**/
export declare class GoogleAppsDriveLabelsV2betaListLabelLocksResponse extends SpeakeasyBase {
    labelLocks?: GoogleAppsDriveLabelsV2betaLabelLock[];
    nextPageToken?: string;
}
