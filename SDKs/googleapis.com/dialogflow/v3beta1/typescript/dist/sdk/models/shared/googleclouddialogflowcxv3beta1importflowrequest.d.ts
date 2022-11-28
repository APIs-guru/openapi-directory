import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDialogflowCxV3beta1ImportFlowRequestImportOptionEnum {
    ImportOptionUnspecified = "IMPORT_OPTION_UNSPECIFIED",
    Keep = "KEEP",
    Fallback = "FALLBACK"
}
/**
 * The request message for Flows.ImportFlow.
**/
export declare class GoogleCloudDialogflowCxV3beta1ImportFlowRequest extends SpeakeasyBase {
    flowContent?: string;
    flowUri?: string;
    importOption?: GoogleCloudDialogflowCxV3beta1ImportFlowRequestImportOptionEnum;
}
