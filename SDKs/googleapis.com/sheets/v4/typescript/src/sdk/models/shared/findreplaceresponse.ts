import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FindReplaceResponse
/** 
 * The result of the find/replace.
**/
export class FindReplaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=formulasChanged" })
  formulasChanged?: number;

  @SpeakeasyMetadata({ data: "json, name=occurrencesChanged" })
  occurrencesChanged?: number;

  @SpeakeasyMetadata({ data: "json, name=rowsChanged" })
  rowsChanged?: number;

  @SpeakeasyMetadata({ data: "json, name=sheetsChanged" })
  sheetsChanged?: number;

  @SpeakeasyMetadata({ data: "json, name=valuesChanged" })
  valuesChanged?: number;
}
