import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaLabel } from "./googleappsdrivelabelsv2betalabel";



// GoogleAppsDriveLabelsV2betaListLabelsResponse
/** 
 * Response for listing Labels.
**/
export class GoogleAppsDriveLabelsV2betaListLabelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=labels", elemType: GoogleAppsDriveLabelsV2betaLabel })
  labels?: GoogleAppsDriveLabelsV2betaLabel[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
