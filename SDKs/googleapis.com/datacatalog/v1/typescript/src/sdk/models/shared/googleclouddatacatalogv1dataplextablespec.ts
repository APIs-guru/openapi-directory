import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDatacatalogV1DataplexSpec } from "./googleclouddatacatalogv1dataplexspec";
import { GoogleCloudDatacatalogV1DataplexExternalTable } from "./googleclouddatacatalogv1dataplexexternaltable";


// GoogleCloudDatacatalogV1DataplexTableSpec
/** 
 * Entry specification for a Dataplex table.
**/
export class GoogleCloudDatacatalogV1DataplexTableSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataplexSpec" })
  dataplexSpec?: GoogleCloudDatacatalogV1DataplexSpec;

  @Metadata({ data: "json, name=externalTables", elemType: shared.GoogleCloudDatacatalogV1DataplexExternalTable })
  externalTables?: GoogleCloudDatacatalogV1DataplexExternalTable[];

  @Metadata({ data: "json, name=userManaged" })
  userManaged?: boolean;
}
