import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataFilter } from "./datafilter";
import { ValueRange } from "./valuerange";



// UpdateValuesByDataFilterResponse
/** 
 * The response when updating a range of values by a data filter in a spreadsheet.
**/
export class UpdateValuesByDataFilterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataFilter" })
  dataFilter?: DataFilter;

  @SpeakeasyMetadata({ data: "json, name=updatedCells" })
  updatedCells?: number;

  @SpeakeasyMetadata({ data: "json, name=updatedColumns" })
  updatedColumns?: number;

  @SpeakeasyMetadata({ data: "json, name=updatedData" })
  updatedData?: ValueRange;

  @SpeakeasyMetadata({ data: "json, name=updatedRange" })
  updatedRange?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedRows" })
  updatedRows?: number;
}
