import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResultTableColumnHeader } from "./resulttablecolumnheader";
import { Errors } from "./errors";



// QueryResponse
/** 
 * Response message for TargetedQueriesService.Query.
**/
export class QueryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columnHeaders", elemType: ResultTableColumnHeader })
  columnHeaders?: ResultTableColumnHeader[];

  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: Errors;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=rows" })
  rows?: any[][];
}
