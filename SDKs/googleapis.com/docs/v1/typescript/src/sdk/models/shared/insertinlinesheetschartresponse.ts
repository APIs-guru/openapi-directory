import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InsertInlineSheetsChartResponse
/** 
 * The result of inserting an embedded Google Sheets chart.
**/
export class InsertInlineSheetsChartResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=objectId" })
  objectId?: string;
}
