import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Date } from "./date";
import { QueryCountByStatus } from "./querycountbystatus";


export class CustomerQueryStats extends SpeakeasyBase {
  @Metadata({ data: "json, name=date" })
  date?: Date;

  @Metadata({ data: "json, name=queryCountByStatus", elemType: shared.QueryCountByStatus })
  queryCountByStatus?: QueryCountByStatus[];
}
