import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleAppsDriveLabelsV2betaLabel } from "./googleappsdrivelabelsv2betalabel";


// GoogleAppsDriveLabelsV2betaListLabelsResponse
/** 
 * Response for listing Labels.
**/
export class GoogleAppsDriveLabelsV2betaListLabelsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=labels", elemType: shared.GoogleAppsDriveLabelsV2betaLabel })
  labels?: GoogleAppsDriveLabelsV2betaLabel[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
