import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ColumnFamilyStats
/** 
 * Approximate statistics related to a single column family within a table. This information may change rapidly, interpreting these values at a point in time may already preset out-of-date information. Everything below is approximate, unless otherwise specified.
**/
export class ColumnFamilyStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=averageCellsPerColumn" })
  averageCellsPerColumn?: number;

  @SpeakeasyMetadata({ data: "json, name=averageColumnsPerRow" })
  averageColumnsPerRow?: number;

  @SpeakeasyMetadata({ data: "json, name=logicalDataBytes" })
  logicalDataBytes?: string;
}
