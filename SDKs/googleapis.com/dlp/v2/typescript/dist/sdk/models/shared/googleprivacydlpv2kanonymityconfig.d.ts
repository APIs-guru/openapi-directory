import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2EntityId } from "./googleprivacydlpv2entityid";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";
/**
 * k-anonymity metric, used for analysis of reidentification risk.
**/
export declare class GooglePrivacyDlpV2KAnonymityConfig extends SpeakeasyBase {
    entityId?: GooglePrivacyDlpV2EntityId;
    quasiIds?: GooglePrivacyDlpV2FieldId[];
}
