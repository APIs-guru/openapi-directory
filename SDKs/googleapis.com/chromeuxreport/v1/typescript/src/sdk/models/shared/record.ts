import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CollectionPeriod } from "./collectionperiod";
import { Key } from "./key";
import { Metric } from "./metric";


// Record
/** 
 * Record is a single Chrome UX report data record. It contains use experience statistics for a single url pattern and set of dimensions.
**/
export class Record extends SpeakeasyBase {
  @Metadata({ data: "json, name=collectionPeriod" })
  collectionPeriod?: CollectionPeriod;

  @Metadata({ data: "json, name=key" })
  key?: Key;

  @Metadata({ data: "json, name=metrics", elemType: shared.Metric })
  metrics?: Map<string, Metric>;
}
