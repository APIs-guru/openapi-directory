import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetadataImport } from "./metadataimport";



// ListMetadataImportsResponse
/** 
 * Response message for DataprocMetastore.ListMetadataImports.
**/
export class ListMetadataImportsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metadataImports", elemType: MetadataImport })
  metadataImports?: MetadataImport[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
