import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Settings
/** 
 * Describes the settings associated with a project, folder, organization, billing account, or flexible resource.
**/
export class Settings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disableDefaultSink" })
  disableDefaultSink?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kmsKeyName" })
  kmsKeyName?: string;

  @SpeakeasyMetadata({ data: "json, name=kmsServiceAccountId" })
  kmsServiceAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=storageLocation" })
  storageLocation?: string;
}


// SettingsInput
/** 
 * Describes the settings associated with a project, folder, organization, billing account, or flexible resource.
**/
export class SettingsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disableDefaultSink" })
  disableDefaultSink?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kmsKeyName" })
  kmsKeyName?: string;

  @SpeakeasyMetadata({ data: "json, name=storageLocation" })
  storageLocation?: string;
}
