import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RestoreDatabaseEncryptionConfig } from "./restoredatabaseencryptionconfig";


// RestoreDatabaseRequest
/** 
 * The request for RestoreDatabase.
**/
export class RestoreDatabaseRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=backup" })
  backup?: string;

  @Metadata({ data: "json, name=databaseId" })
  databaseId?: string;

  @Metadata({ data: "json, name=encryptionConfig" })
  encryptionConfig?: RestoreDatabaseEncryptionConfig;
}
