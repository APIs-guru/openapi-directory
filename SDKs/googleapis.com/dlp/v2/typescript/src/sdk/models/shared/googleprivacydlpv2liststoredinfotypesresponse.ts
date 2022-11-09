import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePrivacyDlpV2StoredInfoType } from "./googleprivacydlpv2storedinfotype";


// GooglePrivacyDlpV2ListStoredInfoTypesResponse
/** 
 * Response message for ListStoredInfoTypes.
**/
export class GooglePrivacyDlpV2ListStoredInfoTypesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=storedInfoTypes", elemType: shared.GooglePrivacyDlpV2StoredInfoType })
  storedInfoTypes?: GooglePrivacyDlpV2StoredInfoType[];
}
