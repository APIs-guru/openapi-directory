import { SpeakeasyBase } from "../../../internal/utils";
import { MetadataExport } from "./metadataexport";
import { Restore } from "./restore";
/**
 * The metadata management activities of the metastore service.
**/
export declare class MetadataManagementActivity extends SpeakeasyBase {
    metadataExports?: MetadataExport[];
    restores?: Restore[];
}
