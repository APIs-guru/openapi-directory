import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaLabelLock } from "./googleappsdrivelabelsv2betalabellock";



// GoogleAppsDriveLabelsV2betaListLabelLocksResponse
/** 
 * The response to a ListLabelLocksRequest.
**/
export class GoogleAppsDriveLabelsV2betaListLabelLocksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=labelLocks", elemType: GoogleAppsDriveLabelsV2betaLabelLock })
  labelLocks?: GoogleAppsDriveLabelsV2betaLabelLock[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
