import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApiCounterV2Out } from "./apicounterv2out";


export class ApiUsageHistoryOut extends SpeakeasyBase {
  @Metadata({ data: "json, name=detailedUsage", elemType: shared.ApiCounterV2Out })
  detailedUsage?: ApiCounterV2Out[];
}
