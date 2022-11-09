import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudDialogflowCxV3beta1ImportFlowRequestImportOptionEnum {
    ImportOptionUnspecified = "IMPORT_OPTION_UNSPECIFIED"
,    Keep = "KEEP"
,    Fallback = "FALLBACK"
}


// GoogleCloudDialogflowCxV3beta1ImportFlowRequest
/** 
 * The request message for Flows.ImportFlow.
**/
export class GoogleCloudDialogflowCxV3beta1ImportFlowRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=flowContent" })
  flowContent?: string;

  @Metadata({ data: "json, name=flowUri" })
  flowUri?: string;

  @Metadata({ data: "json, name=importOption" })
  importOption?: GoogleCloudDialogflowCxV3beta1ImportFlowRequestImportOptionEnum;
}
