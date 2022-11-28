import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2Label } from "./googleappsdrivelabelsv2label";
/**
 * Response for listing Labels.
**/
export declare class GoogleAppsDriveLabelsV2ListLabelsResponse extends SpeakeasyBase {
    labels?: GoogleAppsDriveLabelsV2Label[];
    nextPageToken?: string;
}
