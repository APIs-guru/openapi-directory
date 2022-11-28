import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CmekSettings
/** 
 * Describes the customer-managed encryption key (CMEK) settings associated with a project, folder, organization, billing account, or flexible resource.Note: CMEK for the Log Router can currently only be configured for Google Cloud organizations. Once configured, it applies to all projects and folders in the Google Cloud organization.See Enabling CMEK for Log Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information.
**/
export class CmekSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kmsKeyName" })
  kmsKeyName?: string;

  @SpeakeasyMetadata({ data: "json, name=kmsKeyVersionName" })
  kmsKeyVersionName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceAccountId" })
  serviceAccountId?: string;
}


// CmekSettingsInput
/** 
 * Describes the customer-managed encryption key (CMEK) settings associated with a project, folder, organization, billing account, or flexible resource.Note: CMEK for the Log Router can currently only be configured for Google Cloud organizations. Once configured, it applies to all projects and folders in the Google Cloud organization.See Enabling CMEK for Log Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information.
**/
export class CmekSettingsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kmsKeyName" })
  kmsKeyName?: string;

  @SpeakeasyMetadata({ data: "json, name=kmsKeyVersionName" })
  kmsKeyVersionName?: string;
}
