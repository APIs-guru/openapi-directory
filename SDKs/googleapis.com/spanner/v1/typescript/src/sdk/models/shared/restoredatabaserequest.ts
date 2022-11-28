import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RestoreDatabaseEncryptionConfig } from "./restoredatabaseencryptionconfig";



// RestoreDatabaseRequest
/** 
 * The request for RestoreDatabase.
**/
export class RestoreDatabaseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backup" })
  backup?: string;

  @SpeakeasyMetadata({ data: "json, name=databaseId" })
  databaseId?: string;

  @SpeakeasyMetadata({ data: "json, name=encryptionConfig" })
  encryptionConfig?: RestoreDatabaseEncryptionConfig;
}
