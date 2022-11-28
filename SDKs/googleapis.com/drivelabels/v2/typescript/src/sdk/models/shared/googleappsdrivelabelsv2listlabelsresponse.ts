import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2Label } from "./googleappsdrivelabelsv2label";



// GoogleAppsDriveLabelsV2ListLabelsResponse
/** 
 * Response for listing Labels.
**/
export class GoogleAppsDriveLabelsV2ListLabelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=labels", elemType: GoogleAppsDriveLabelsV2Label })
  labels?: GoogleAppsDriveLabelsV2Label[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
