import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResultTableColumnHeader } from "./resulttablecolumnheader";
import { Errors } from "./errors";


// QueryResponse
/** 
 * Response message for TargetedQueriesService.Query.
**/
export class QueryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=columnHeaders", elemType: shared.ResultTableColumnHeader })
  columnHeaders?: ResultTableColumnHeader[];

  @Metadata({ data: "json, name=errors" })
  errors?: Errors;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=rows" })
  rows?: any[][];
}
