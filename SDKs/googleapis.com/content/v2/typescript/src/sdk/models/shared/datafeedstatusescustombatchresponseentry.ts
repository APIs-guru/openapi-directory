import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DatafeedStatus } from "./datafeedstatus";
import { Errors } from "./errors";


// DatafeedstatusesCustomBatchResponseEntry
/** 
 * A batch entry encoding a single non-batch datafeedstatuses response.
**/
export class DatafeedstatusesCustomBatchResponseEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=batchId" })
  batchId?: number;

  @Metadata({ data: "json, name=datafeedStatus" })
  datafeedStatus?: DatafeedStatus;

  @Metadata({ data: "json, name=errors" })
  errors?: Errors;
}
