import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataFilter } from "./datafilter";
import { ValueRange } from "./valuerange";


// UpdateValuesByDataFilterResponse
/** 
 * The response when updating a range of values by a data filter in a spreadsheet.
**/
export class UpdateValuesByDataFilterResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataFilter" })
  dataFilter?: DataFilter;

  @Metadata({ data: "json, name=updatedCells" })
  updatedCells?: number;

  @Metadata({ data: "json, name=updatedColumns" })
  updatedColumns?: number;

  @Metadata({ data: "json, name=updatedData" })
  updatedData?: ValueRange;

  @Metadata({ data: "json, name=updatedRange" })
  updatedRange?: string;

  @Metadata({ data: "json, name=updatedRows" })
  updatedRows?: number;
}
