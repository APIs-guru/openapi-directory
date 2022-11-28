import { SpeakeasyBase } from "../../../internal/utils";
import { MetadataImport } from "./metadataimport";
/**
 * Response message for DataprocMetastore.ListMetadataImports.
**/
export declare class ListMetadataImportsResponse extends SpeakeasyBase {
    metadataImports?: MetadataImport[];
    nextPageToken?: string;
    unreachable?: string[];
}
