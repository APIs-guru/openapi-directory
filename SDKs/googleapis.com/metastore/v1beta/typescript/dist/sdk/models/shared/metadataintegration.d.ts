import { SpeakeasyBase } from "../../../internal/utils";
import { DataCatalogConfig } from "./datacatalogconfig";
import { DataplexConfig } from "./dataplexconfig";
/**
 * Specifies how metastore metadata should be integrated with external services.
**/
export declare class MetadataIntegration extends SpeakeasyBase {
    dataCatalogConfig?: DataCatalogConfig;
    dataplexConfig?: DataplexConfig;
}
