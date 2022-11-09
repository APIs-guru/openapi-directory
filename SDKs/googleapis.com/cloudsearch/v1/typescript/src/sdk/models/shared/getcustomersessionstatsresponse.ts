import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CustomerSessionStats } from "./customersessionstats";


export class GetCustomerSessionStatsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=stats", elemType: shared.CustomerSessionStats })
  stats?: CustomerSessionStats[];
}
