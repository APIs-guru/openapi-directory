import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MetadataExport } from "./metadataexport";
import { Restore } from "./restore";


// MetadataManagementActivity
/** 
 * The metadata management activities of the metastore service.
**/
export class MetadataManagementActivity extends SpeakeasyBase {
  @Metadata({ data: "json, name=metadataExports", elemType: shared.MetadataExport })
  metadataExports?: MetadataExport[];

  @Metadata({ data: "json, name=restores", elemType: shared.Restore })
  restores?: Restore[];
}
