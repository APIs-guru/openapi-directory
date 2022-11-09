import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataCatalogConfig } from "./datacatalogconfig";
import { DataplexConfig } from "./dataplexconfig";


// MetadataIntegration
/** 
 * Specifies how metastore metadata should be integrated with external services.
**/
export class MetadataIntegration extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataCatalogConfig" })
  dataCatalogConfig?: DataCatalogConfig;

  @Metadata({ data: "json, name=dataplexConfig" })
  dataplexConfig?: DataplexConfig;
}
