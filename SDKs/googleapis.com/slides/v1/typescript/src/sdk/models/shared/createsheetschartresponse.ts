import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateSheetsChartResponse
/** 
 * The result of creating an embedded Google Sheets chart.
**/
export class CreateSheetsChartResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=objectId" })
  objectId?: string;
}
