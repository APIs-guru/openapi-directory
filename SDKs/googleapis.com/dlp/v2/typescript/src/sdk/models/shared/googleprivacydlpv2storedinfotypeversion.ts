import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePrivacyDlpV2StoredInfoTypeConfig } from "./googleprivacydlpv2storedinfotypeconfig";
import { GooglePrivacyDlpV2Error } from "./googleprivacydlpv2error";
import { GooglePrivacyDlpV2StoredInfoTypeStats } from "./googleprivacydlpv2storedinfotypestats";

export enum GooglePrivacyDlpV2StoredInfoTypeVersionStateEnum {
    StoredInfoTypeStateUnspecified = "STORED_INFO_TYPE_STATE_UNSPECIFIED"
,    Pending = "PENDING"
,    Ready = "READY"
,    Failed = "FAILED"
,    Invalid = "INVALID"
}


// GooglePrivacyDlpV2StoredInfoTypeVersion
/** 
 * Version of a StoredInfoType, including the configuration used to build it, create timestamp, and current state.
**/
export class GooglePrivacyDlpV2StoredInfoTypeVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=config" })
  config?: GooglePrivacyDlpV2StoredInfoTypeConfig;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=errors", elemType: shared.GooglePrivacyDlpV2Error })
  errors?: GooglePrivacyDlpV2Error[];

  @Metadata({ data: "json, name=state" })
  state?: GooglePrivacyDlpV2StoredInfoTypeVersionStateEnum;

  @Metadata({ data: "json, name=stats" })
  stats?: GooglePrivacyDlpV2StoredInfoTypeStats;
}
