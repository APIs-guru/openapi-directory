import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDialogflowCxV3ImportFlowRequestImportOptionEnum {
    ImportOptionUnspecified = "IMPORT_OPTION_UNSPECIFIED",
    Keep = "KEEP",
    Fallback = "FALLBACK"
}
/**
 * The request message for Flows.ImportFlow.
**/
export declare class GoogleCloudDialogflowCxV3ImportFlowRequest extends SpeakeasyBase {
    flowContent?: string;
    flowUri?: string;
    importOption?: GoogleCloudDialogflowCxV3ImportFlowRequestImportOptionEnum;
}
