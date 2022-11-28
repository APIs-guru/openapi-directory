import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiCounterV2Out } from "./apicounterv2out";



export class ApiUsageHistoryOut extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detailedUsage", elemType: ApiCounterV2Out })
  detailedUsage?: ApiCounterV2Out[];
}
