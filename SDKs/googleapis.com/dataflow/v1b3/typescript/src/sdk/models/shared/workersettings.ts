import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WorkerSettings
/** 
 * Provides data to pass through to the worker harness.
**/
export class WorkerSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=baseUrl" })
  baseUrl?: string;

  @Metadata({ data: "json, name=reportingEnabled" })
  reportingEnabled?: boolean;

  @Metadata({ data: "json, name=servicePath" })
  servicePath?: string;

  @Metadata({ data: "json, name=shuffleServicePath" })
  shuffleServicePath?: string;

  @Metadata({ data: "json, name=tempStoragePrefix" })
  tempStoragePrefix?: string;

  @Metadata({ data: "json, name=workerId" })
  workerId?: string;
}
