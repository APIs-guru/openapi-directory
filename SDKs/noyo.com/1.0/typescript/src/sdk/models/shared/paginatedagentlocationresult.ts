import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AgentLocationResult } from "./agentlocationresult";



// PaginatedAgentLocationResultMeta
/** 
 * Metadata associated with the response data
**/
export class PaginatedAgentLocationResultMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset: number;

  @SpeakeasyMetadata({ data: "json, name=page_num" })
  pageNum: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize: number;

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords: number;
}


export class PaginatedAgentLocationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: PaginatedAgentLocationResultMeta;

  @SpeakeasyMetadata({ data: "json, name=response", elemType: AgentLocationResult })
  response: AgentLocationResult[];
}
