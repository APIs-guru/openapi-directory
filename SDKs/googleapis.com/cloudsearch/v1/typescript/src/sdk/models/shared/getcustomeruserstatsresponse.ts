import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CustomerUserStats } from "./customeruserstats";


export class GetCustomerUserStatsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=stats", elemType: shared.CustomerUserStats })
  stats?: CustomerUserStats[];
}
