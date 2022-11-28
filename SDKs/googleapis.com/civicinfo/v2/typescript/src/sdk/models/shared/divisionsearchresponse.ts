import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DivisionSearchResult } from "./divisionsearchresult";



// DivisionSearchResponse
/** 
 * The result of a division search query.
**/
export class DivisionSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: DivisionSearchResult })
  results?: DivisionSearchResult[];
}
