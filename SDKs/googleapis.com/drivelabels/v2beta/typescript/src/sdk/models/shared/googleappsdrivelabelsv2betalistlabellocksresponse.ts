import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleAppsDriveLabelsV2betaLabelLock } from "./googleappsdrivelabelsv2betalabellock";


// GoogleAppsDriveLabelsV2betaListLabelLocksResponse
/** 
 * The response to a ListLabelLocksRequest.
**/
export class GoogleAppsDriveLabelsV2betaListLabelLocksResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=labelLocks", elemType: shared.GoogleAppsDriveLabelsV2betaLabelLock })
  labelLocks?: GoogleAppsDriveLabelsV2betaLabelLock[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
