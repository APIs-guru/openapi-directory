import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class QueryCountByStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: string;

  @Metadata({ data: "json, name=statusCode" })
  statusCode?: number;
}
