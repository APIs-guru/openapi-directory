import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudDialogflowCxV3beta1ExportTestCasesRequestDataFormatEnum {
    DataFormatUnspecified = "DATA_FORMAT_UNSPECIFIED"
,    Blob = "BLOB"
,    Json = "JSON"
}


// GoogleCloudDialogflowCxV3beta1ExportTestCasesRequest
/** 
 * The request message for TestCases.ExportTestCases.
**/
export class GoogleCloudDialogflowCxV3beta1ExportTestCasesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataFormat" })
  dataFormat?: GoogleCloudDialogflowCxV3beta1ExportTestCasesRequestDataFormatEnum;

  @Metadata({ data: "json, name=filter" })
  filter?: string;

  @Metadata({ data: "json, name=gcsUri" })
  gcsUri?: string;
}
