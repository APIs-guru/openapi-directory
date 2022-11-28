import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TableStats
/** 
 * Approximate statistics related to a table. These statistics are calculated infrequently, while simultaneously, data in the table can change rapidly. Thus the values reported here (e.g. row count) are very likely out-of date, even the instant they are received in this API. Thus, only treat these values as approximate. IMPORTANT: Everything below is approximate, unless otherwise specified.
**/
export class TableStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=averageCellsPerColumn" })
  averageCellsPerColumn?: number;

  @SpeakeasyMetadata({ data: "json, name=averageColumnsPerRow" })
  averageColumnsPerRow?: number;

  @SpeakeasyMetadata({ data: "json, name=logicalDataBytes" })
  logicalDataBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=rowCount" })
  rowCount?: string;
}
