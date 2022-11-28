import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudIntegrationsV1alphaUploadIntegrationVersionRequestFileFormatEnum {
    FileFormatUnspecified = "FILE_FORMAT_UNSPECIFIED",
    Json = "JSON",
    Yaml = "YAML"
}
/**
 * Request for UploadIntegrationVersion.
**/
export declare class GoogleCloudIntegrationsV1alphaUploadIntegrationVersionRequest extends SpeakeasyBase {
    content?: string;
    fileFormat?: GoogleCloudIntegrationsV1alphaUploadIntegrationVersionRequestFileFormatEnum;
}
