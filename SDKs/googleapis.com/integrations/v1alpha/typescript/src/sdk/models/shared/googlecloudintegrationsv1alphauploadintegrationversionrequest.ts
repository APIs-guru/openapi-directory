import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudIntegrationsV1alphaUploadIntegrationVersionRequestFileFormatEnum {
    FileFormatUnspecified = "FILE_FORMAT_UNSPECIFIED",
    Json = "JSON",
    Yaml = "YAML"
}


// GoogleCloudIntegrationsV1alphaUploadIntegrationVersionRequest
/** 
 * Request for UploadIntegrationVersion.
**/
export class GoogleCloudIntegrationsV1alphaUploadIntegrationVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=fileFormat" })
  fileFormat?: GoogleCloudIntegrationsV1alphaUploadIntegrationVersionRequestFileFormatEnum;
}
