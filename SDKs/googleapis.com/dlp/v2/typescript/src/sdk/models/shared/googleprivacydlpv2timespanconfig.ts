import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";



// GooglePrivacyDlpV2TimespanConfig
/** 
 * Configuration of the timespan of the items to include in scanning. Currently only supported when inspecting Cloud Storage and BigQuery.
**/
export class GooglePrivacyDlpV2TimespanConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enableAutoPopulationOfTimespanConfig" })
  enableAutoPopulationOfTimespanConfig?: boolean;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=timestampField" })
  timestampField?: GooglePrivacyDlpV2FieldId;
}
