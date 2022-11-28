import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaLabel } from "./googleappsdrivelabelsv2betalabel";
/**
 * Response for listing Labels.
**/
export declare class GoogleAppsDriveLabelsV2betaListLabelsResponse extends SpeakeasyBase {
    labels?: GoogleAppsDriveLabelsV2betaLabel[];
    nextPageToken?: string;
}
