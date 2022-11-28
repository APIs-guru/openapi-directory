import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudDialogflowCxV3beta1ExportTestCasesRequestDataFormatEnum {
    DataFormatUnspecified = "DATA_FORMAT_UNSPECIFIED",
    Blob = "BLOB",
    Json = "JSON"
}


// GoogleCloudDialogflowCxV3beta1ExportTestCasesRequest
/** 
 * The request message for TestCases.ExportTestCases.
**/
export class GoogleCloudDialogflowCxV3beta1ExportTestCasesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataFormat" })
  dataFormat?: GoogleCloudDialogflowCxV3beta1ExportTestCasesRequestDataFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=gcsUri" })
  gcsUri?: string;
}
