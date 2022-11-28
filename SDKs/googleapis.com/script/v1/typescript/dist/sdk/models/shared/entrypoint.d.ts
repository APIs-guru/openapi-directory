import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsScriptTypeAddOnEntryPoint } from "./googleappsscripttypeaddonentrypoint";
import { GoogleAppsScriptTypeExecutionApiEntryPoint } from "./googleappsscripttypeexecutionapientrypoint";
import { GoogleAppsScriptTypeWebAppEntryPoint } from "./googleappsscripttypewebappentrypoint";
export declare enum EntryPointEntryPointTypeEnum {
    EntryPointTypeUnspecified = "ENTRY_POINT_TYPE_UNSPECIFIED",
    WebApp = "WEB_APP",
    ExecutionApi = "EXECUTION_API",
    AddOn = "ADD_ON"
}
/**
 * A configuration that defines how a deployment is accessed externally.
**/
export declare class EntryPoint extends SpeakeasyBase {
    addOn?: GoogleAppsScriptTypeAddOnEntryPoint;
    entryPointType?: EntryPointEntryPointTypeEnum;
    executionApi?: GoogleAppsScriptTypeExecutionApiEntryPoint;
    webApp?: GoogleAppsScriptTypeWebAppEntryPoint;
}
