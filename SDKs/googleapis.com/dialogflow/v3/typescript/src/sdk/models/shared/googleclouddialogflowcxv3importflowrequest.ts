import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudDialogflowCxV3ImportFlowRequestImportOptionEnum {
    ImportOptionUnspecified = "IMPORT_OPTION_UNSPECIFIED",
    Keep = "KEEP",
    Fallback = "FALLBACK"
}


// GoogleCloudDialogflowCxV3ImportFlowRequest
/** 
 * The request message for Flows.ImportFlow.
**/
export class GoogleCloudDialogflowCxV3ImportFlowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=flowContent" })
  flowContent?: string;

  @SpeakeasyMetadata({ data: "json, name=flowUri" })
  flowUri?: string;

  @SpeakeasyMetadata({ data: "json, name=importOption" })
  importOption?: GoogleCloudDialogflowCxV3ImportFlowRequestImportOptionEnum;
}
