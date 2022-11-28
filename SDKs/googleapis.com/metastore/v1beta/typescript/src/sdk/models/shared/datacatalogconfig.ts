import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DataCatalogConfig
/** 
 * Specifies how metastore metadata should be integrated with the Data Catalog service.
**/
export class DataCatalogConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
