import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2StoredInfoTypeConfig } from "./googleprivacydlpv2storedinfotypeconfig";



// GooglePrivacyDlpV2CreateStoredInfoTypeRequest
/** 
 * Request message for CreateStoredInfoType.
**/
export class GooglePrivacyDlpV2CreateStoredInfoTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: GooglePrivacyDlpV2StoredInfoTypeConfig;

  @SpeakeasyMetadata({ data: "json, name=locationId" })
  locationId?: string;

  @SpeakeasyMetadata({ data: "json, name=storedInfoTypeId" })
  storedInfoTypeId?: string;
}
