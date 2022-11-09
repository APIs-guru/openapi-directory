import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Settings
/** 
 * Describes the settings associated with a project, folder, organization, billing account, or flexible resource.
**/
export class Settings extends SpeakeasyBase {
  @Metadata({ data: "json, name=disableDefaultSink" })
  disableDefaultSink?: boolean;

  @Metadata({ data: "json, name=kmsKeyName" })
  kmsKeyName?: string;

  @Metadata({ data: "json, name=kmsServiceAccountId" })
  kmsServiceAccountId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=storageLocation" })
  storageLocation?: string;
}
