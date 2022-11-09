import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GooglePrivacyDlpV2StoredInfoTypeConfig } from "./googleprivacydlpv2storedinfotypeconfig";


// GooglePrivacyDlpV2CreateStoredInfoTypeRequest
/** 
 * Request message for CreateStoredInfoType.
**/
export class GooglePrivacyDlpV2CreateStoredInfoTypeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=config" })
  config?: GooglePrivacyDlpV2StoredInfoTypeConfig;

  @Metadata({ data: "json, name=locationId" })
  locationId?: string;

  @Metadata({ data: "json, name=storedInfoTypeId" })
  storedInfoTypeId?: string;
}
