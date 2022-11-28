import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetadataExport } from "./metadataexport";
import { Restore } from "./restore";



// MetadataManagementActivity
/** 
 * The metadata management activities of the metastore service.
**/
export class MetadataManagementActivity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metadataExports", elemType: MetadataExport })
  metadataExports?: MetadataExport[];

  @SpeakeasyMetadata({ data: "json, name=restores", elemType: Restore })
  restores?: Restore[];
}
