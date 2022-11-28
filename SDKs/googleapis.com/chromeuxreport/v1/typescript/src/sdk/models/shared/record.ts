import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CollectionPeriod } from "./collectionperiod";
import { Key } from "./key";
import { Metric } from "./metric";



// Record
/** 
 * Record is a single Chrome UX report data record. It contains use experience statistics for a single url pattern and set of dimensions.
**/
export class Record extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collectionPeriod" })
  collectionPeriod?: CollectionPeriod;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: Key;

  @SpeakeasyMetadata({ data: "json, name=metrics", elemType: Metric })
  metrics?: Map<string, Metric>;
}
