import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WorkerSettings
/** 
 * Provides data to pass through to the worker harness.
**/
export class WorkerSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=baseUrl" })
  baseUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=reportingEnabled" })
  reportingEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=servicePath" })
  servicePath?: string;

  @SpeakeasyMetadata({ data: "json, name=shuffleServicePath" })
  shuffleServicePath?: string;

  @SpeakeasyMetadata({ data: "json, name=tempStoragePrefix" })
  tempStoragePrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=workerId" })
  workerId?: string;
}
