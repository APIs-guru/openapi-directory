import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudIntegrationsV1alphaUploadIntegrationVersionRequestFileFormatEnum {
    FileFormatUnspecified = "FILE_FORMAT_UNSPECIFIED"
,    Json = "JSON"
,    Yaml = "YAML"
}


// GoogleCloudIntegrationsV1alphaUploadIntegrationVersionRequest
/** 
 * Request for UploadIntegrationVersion.
**/
export class GoogleCloudIntegrationsV1alphaUploadIntegrationVersionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=fileFormat" })
  fileFormat?: GoogleCloudIntegrationsV1alphaUploadIntegrationVersionRequestFileFormatEnum;
}
