import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PollingOptions } from "./pollingoptions";



// AsyncOptions
/** 
 * Async options that determine when a resource should finish.
**/
export class AsyncOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=methodMatch" })
  methodMatch?: string;

  @SpeakeasyMetadata({ data: "json, name=pollingOptions" })
  pollingOptions?: PollingOptions;
}
