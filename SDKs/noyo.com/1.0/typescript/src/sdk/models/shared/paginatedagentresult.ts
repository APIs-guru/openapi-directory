import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AgentResult } from "./agentresult";



// PaginatedAgentResultMeta
/** 
 * Metadata associated with the response data
**/
export class PaginatedAgentResultMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset: number;

  @SpeakeasyMetadata({ data: "json, name=page_num" })
  pageNum: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize: number;

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords: number;
}


export class PaginatedAgentResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: PaginatedAgentResultMeta;

  @SpeakeasyMetadata({ data: "json, name=response", elemType: AgentResult })
  response: AgentResult[];
}
