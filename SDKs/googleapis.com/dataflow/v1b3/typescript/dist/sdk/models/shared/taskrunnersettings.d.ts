import { SpeakeasyBase } from "../../../internal/utils";
import { WorkerSettings } from "./workersettings";
/**
 * Taskrunner configuration settings.
**/
export declare class TaskRunnerSettings extends SpeakeasyBase {
    alsologtostderr?: boolean;
    baseTaskDir?: string;
    baseUrl?: string;
    commandlinesFileName?: string;
    continueOnException?: boolean;
    dataflowApiVersion?: string;
    harnessCommand?: string;
    languageHint?: string;
    logDir?: string;
    logToSerialconsole?: boolean;
    logUploadLocation?: string;
    oauthScopes?: string[];
    parallelWorkerSettings?: WorkerSettings;
    streamingWorkerMainClass?: string;
    taskGroup?: string;
    taskUser?: string;
    tempStoragePrefix?: string;
    vmId?: string;
    workflowFileName?: string;
}
