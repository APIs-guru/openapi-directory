import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkerSettings } from "./workersettings";



// TaskRunnerSettings
/** 
 * Taskrunner configuration settings.
**/
export class TaskRunnerSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alsologtostderr" })
  alsologtostderr?: boolean;

  @SpeakeasyMetadata({ data: "json, name=baseTaskDir" })
  baseTaskDir?: string;

  @SpeakeasyMetadata({ data: "json, name=baseUrl" })
  baseUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=commandlinesFileName" })
  commandlinesFileName?: string;

  @SpeakeasyMetadata({ data: "json, name=continueOnException" })
  continueOnException?: boolean;

  @SpeakeasyMetadata({ data: "json, name=dataflowApiVersion" })
  dataflowApiVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=harnessCommand" })
  harnessCommand?: string;

  @SpeakeasyMetadata({ data: "json, name=languageHint" })
  languageHint?: string;

  @SpeakeasyMetadata({ data: "json, name=logDir" })
  logDir?: string;

  @SpeakeasyMetadata({ data: "json, name=logToSerialconsole" })
  logToSerialconsole?: boolean;

  @SpeakeasyMetadata({ data: "json, name=logUploadLocation" })
  logUploadLocation?: string;

  @SpeakeasyMetadata({ data: "json, name=oauthScopes" })
  oauthScopes?: string[];

  @SpeakeasyMetadata({ data: "json, name=parallelWorkerSettings" })
  parallelWorkerSettings?: WorkerSettings;

  @SpeakeasyMetadata({ data: "json, name=streamingWorkerMainClass" })
  streamingWorkerMainClass?: string;

  @SpeakeasyMetadata({ data: "json, name=taskGroup" })
  taskGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=taskUser" })
  taskUser?: string;

  @SpeakeasyMetadata({ data: "json, name=tempStoragePrefix" })
  tempStoragePrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=vmId" })
  vmId?: string;

  @SpeakeasyMetadata({ data: "json, name=workflowFileName" })
  workflowFileName?: string;
}
