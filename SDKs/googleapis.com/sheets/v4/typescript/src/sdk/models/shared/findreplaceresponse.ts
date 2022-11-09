import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FindReplaceResponse
/** 
 * The result of the find/replace.
**/
export class FindReplaceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=formulasChanged" })
  formulasChanged?: number;

  @Metadata({ data: "json, name=occurrencesChanged" })
  occurrencesChanged?: number;

  @Metadata({ data: "json, name=rowsChanged" })
  rowsChanged?: number;

  @Metadata({ data: "json, name=sheetsChanged" })
  sheetsChanged?: number;

  @Metadata({ data: "json, name=valuesChanged" })
  valuesChanged?: number;
}
