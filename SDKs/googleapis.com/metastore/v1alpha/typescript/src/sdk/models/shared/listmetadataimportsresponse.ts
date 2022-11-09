import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MetadataImport } from "./metadataimport";


// ListMetadataImportsResponse
/** 
 * Response message for DataprocMetastore.ListMetadataImports.
**/
export class ListMetadataImportsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=metadataImports", elemType: shared.MetadataImport })
  metadataImports?: MetadataImport[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
