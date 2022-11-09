import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CustomerQueryStats } from "./customerquerystats";


export class GetCustomerQueryStatsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=stats", elemType: shared.CustomerQueryStats })
  stats?: CustomerQueryStats[];

  @Metadata({ data: "json, name=totalQueryCount" })
  totalQueryCount?: string;
}
