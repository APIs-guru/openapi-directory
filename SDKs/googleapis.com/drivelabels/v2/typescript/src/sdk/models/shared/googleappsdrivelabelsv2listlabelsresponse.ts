import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleAppsDriveLabelsV2Label } from "./googleappsdrivelabelsv2label";


// GoogleAppsDriveLabelsV2ListLabelsResponse
/** 
 * Response for listing Labels.
**/
export class GoogleAppsDriveLabelsV2ListLabelsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=labels", elemType: shared.GoogleAppsDriveLabelsV2Label })
  labels?: GoogleAppsDriveLabelsV2Label[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
