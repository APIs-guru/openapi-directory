import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WorkerSettings } from "./workersettings";


// TaskRunnerSettings
/** 
 * Taskrunner configuration settings.
**/
export class TaskRunnerSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=alsologtostderr" })
  alsologtostderr?: boolean;

  @Metadata({ data: "json, name=baseTaskDir" })
  baseTaskDir?: string;

  @Metadata({ data: "json, name=baseUrl" })
  baseUrl?: string;

  @Metadata({ data: "json, name=commandlinesFileName" })
  commandlinesFileName?: string;

  @Metadata({ data: "json, name=continueOnException" })
  continueOnException?: boolean;

  @Metadata({ data: "json, name=dataflowApiVersion" })
  dataflowApiVersion?: string;

  @Metadata({ data: "json, name=harnessCommand" })
  harnessCommand?: string;

  @Metadata({ data: "json, name=languageHint" })
  languageHint?: string;

  @Metadata({ data: "json, name=logDir" })
  logDir?: string;

  @Metadata({ data: "json, name=logToSerialconsole" })
  logToSerialconsole?: boolean;

  @Metadata({ data: "json, name=logUploadLocation" })
  logUploadLocation?: string;

  @Metadata({ data: "json, name=oauthScopes" })
  oauthScopes?: string[];

  @Metadata({ data: "json, name=parallelWorkerSettings" })
  parallelWorkerSettings?: WorkerSettings;

  @Metadata({ data: "json, name=streamingWorkerMainClass" })
  streamingWorkerMainClass?: string;

  @Metadata({ data: "json, name=taskGroup" })
  taskGroup?: string;

  @Metadata({ data: "json, name=taskUser" })
  taskUser?: string;

  @Metadata({ data: "json, name=tempStoragePrefix" })
  tempStoragePrefix?: string;

  @Metadata({ data: "json, name=vmId" })
  vmId?: string;

  @Metadata({ data: "json, name=workflowFileName" })
  workflowFileName?: string;
}
