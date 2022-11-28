import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateSheetsChartResponse
/** 
 * The result of creating an embedded Google Sheets chart.
**/
export class CreateSheetsChartResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=objectId" })
  objectId?: string;
}
