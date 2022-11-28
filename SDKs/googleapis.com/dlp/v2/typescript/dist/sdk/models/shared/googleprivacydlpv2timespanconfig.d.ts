import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";
/**
 * Configuration of the timespan of the items to include in scanning. Currently only supported when inspecting Cloud Storage and BigQuery.
**/
export declare class GooglePrivacyDlpV2TimespanConfig extends SpeakeasyBase {
    enableAutoPopulationOfTimespanConfig?: boolean;
    endTime?: string;
    startTime?: string;
    timestampField?: GooglePrivacyDlpV2FieldId;
}
