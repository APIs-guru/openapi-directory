import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DataCatalogConfig
/** 
 * Specifies how metastore metadata should be integrated with the Data Catalog service.
**/
export class DataCatalogConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
