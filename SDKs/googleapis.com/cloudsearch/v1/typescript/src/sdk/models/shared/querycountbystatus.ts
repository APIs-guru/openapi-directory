import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class QueryCountByStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: string;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode?: number;
}
