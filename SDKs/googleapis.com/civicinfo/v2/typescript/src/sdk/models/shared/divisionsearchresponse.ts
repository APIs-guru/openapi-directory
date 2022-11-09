import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DivisionSearchResult } from "./divisionsearchresult";


// DivisionSearchResponse
/** 
 * The result of a division search query.
**/
export class DivisionSearchResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=results", elemType: shared.DivisionSearchResult })
  results?: DivisionSearchResult[];
}
