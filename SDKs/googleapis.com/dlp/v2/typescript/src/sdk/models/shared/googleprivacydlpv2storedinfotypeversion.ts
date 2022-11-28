import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2StoredInfoTypeConfig } from "./googleprivacydlpv2storedinfotypeconfig";
import { GooglePrivacyDlpV2Error } from "./googleprivacydlpv2error";
import { GooglePrivacyDlpV2StoredInfoTypeStats } from "./googleprivacydlpv2storedinfotypestats";


export enum GooglePrivacyDlpV2StoredInfoTypeVersionStateEnum {
    StoredInfoTypeStateUnspecified = "STORED_INFO_TYPE_STATE_UNSPECIFIED",
    Pending = "PENDING",
    Ready = "READY",
    Failed = "FAILED",
    Invalid = "INVALID"
}


// GooglePrivacyDlpV2StoredInfoTypeVersion
/** 
 * Version of a StoredInfoType, including the configuration used to build it, create timestamp, and current state.
**/
export class GooglePrivacyDlpV2StoredInfoTypeVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: GooglePrivacyDlpV2StoredInfoTypeConfig;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: GooglePrivacyDlpV2Error })
  errors?: GooglePrivacyDlpV2Error[];

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GooglePrivacyDlpV2StoredInfoTypeVersionStateEnum;

  @SpeakeasyMetadata({ data: "json, name=stats" })
  stats?: GooglePrivacyDlpV2StoredInfoTypeStats;
}
