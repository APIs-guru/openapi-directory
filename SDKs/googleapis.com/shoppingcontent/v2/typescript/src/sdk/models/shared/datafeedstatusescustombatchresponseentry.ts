import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatafeedStatus } from "./datafeedstatus";
import { Errors } from "./errors";



// DatafeedstatusesCustomBatchResponseEntry
/** 
 * A batch entry encoding a single non-batch datafeedstatuses response.
**/
export class DatafeedstatusesCustomBatchResponseEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=batchId" })
  batchId?: number;

  @SpeakeasyMetadata({ data: "json, name=datafeedStatus" })
  datafeedStatus?: DatafeedStatus;

  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: Errors;
}
