import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudDialogflowCxV3ExportTestCasesRequestDataFormatEnum {
    DataFormatUnspecified = "DATA_FORMAT_UNSPECIFIED",
    Blob = "BLOB",
    Json = "JSON"
}


// GoogleCloudDialogflowCxV3ExportTestCasesRequest
/** 
 * The request message for TestCases.ExportTestCases.
**/
export class GoogleCloudDialogflowCxV3ExportTestCasesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataFormat" })
  dataFormat?: GoogleCloudDialogflowCxV3ExportTestCasesRequestDataFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=gcsUri" })
  gcsUri?: string;
}
