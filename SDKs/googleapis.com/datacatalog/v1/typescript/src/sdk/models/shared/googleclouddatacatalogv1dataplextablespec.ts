import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1DataplexSpec } from "./googleclouddatacatalogv1dataplexspec";
import { GoogleCloudDatacatalogV1DataplexExternalTable } from "./googleclouddatacatalogv1dataplexexternaltable";



// GoogleCloudDatacatalogV1DataplexTableSpec
/** 
 * Entry specification for a Dataplex table.
**/
export class GoogleCloudDatacatalogV1DataplexTableSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataplexSpec" })
  dataplexSpec?: GoogleCloudDatacatalogV1DataplexSpec;

  @SpeakeasyMetadata({ data: "json, name=externalTables", elemType: GoogleCloudDatacatalogV1DataplexExternalTable })
  externalTables?: GoogleCloudDatacatalogV1DataplexExternalTable[];

  @SpeakeasyMetadata({ data: "json, name=userManaged" })
  userManaged?: boolean;
}
