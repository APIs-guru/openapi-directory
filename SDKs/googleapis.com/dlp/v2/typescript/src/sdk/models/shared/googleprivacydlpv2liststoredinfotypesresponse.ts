import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2StoredInfoType } from "./googleprivacydlpv2storedinfotype";



// GooglePrivacyDlpV2ListStoredInfoTypesResponse
/** 
 * Response message for ListStoredInfoTypes.
**/
export class GooglePrivacyDlpV2ListStoredInfoTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=storedInfoTypes", elemType: GooglePrivacyDlpV2StoredInfoType })
  storedInfoTypes?: GooglePrivacyDlpV2StoredInfoType[];
}
