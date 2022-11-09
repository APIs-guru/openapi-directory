import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PollingOptions } from "./pollingoptions";


// AsyncOptions
/** 
 * Async options that determine when a resource should finish.
**/
export class AsyncOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=methodMatch" })
  methodMatch?: string;

  @Metadata({ data: "json, name=pollingOptions" })
  pollingOptions?: PollingOptions;
}
