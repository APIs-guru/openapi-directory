import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AgentContactResult } from "./agentcontactresult";



// PaginatedAgentContactResultsMeta
/** 
 * Metadata associated with the response data
**/
export class PaginatedAgentContactResultsMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset: number;

  @SpeakeasyMetadata({ data: "json, name=page_num" })
  pageNum: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize: number;

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords: number;
}


export class PaginatedAgentContactResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: PaginatedAgentContactResultsMeta;

  @SpeakeasyMetadata({ data: "json, name=response", elemType: AgentContactResult })
  response: AgentContactResult[];
}
