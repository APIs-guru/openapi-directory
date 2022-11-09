import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";


// GooglePrivacyDlpV2TimespanConfig
/** 
 * Configuration of the timespan of the items to include in scanning. Currently only supported when inspecting Cloud Storage and BigQuery.
**/
export class GooglePrivacyDlpV2TimespanConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=enableAutoPopulationOfTimespanConfig" })
  enableAutoPopulationOfTimespanConfig?: boolean;

  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=timestampField" })
  timestampField?: GooglePrivacyDlpV2FieldId;
}
