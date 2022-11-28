import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataCatalogConfig } from "./datacatalogconfig";
import { DataplexConfig } from "./dataplexconfig";



// MetadataIntegration
/** 
 * Specifies how metastore metadata should be integrated with external services.
**/
export class MetadataIntegration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataCatalogConfig" })
  dataCatalogConfig?: DataCatalogConfig;

  @SpeakeasyMetadata({ data: "json, name=dataplexConfig" })
  dataplexConfig?: DataplexConfig;
}
