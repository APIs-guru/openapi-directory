import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatacatalogV1DataplexSpec } from "./googleclouddatacatalogv1dataplexspec";


// GoogleCloudDatacatalogV1DataplexFilesetSpec
/** 
 * Entry specyfication for a Dataplex fileset.
**/
export class GoogleCloudDatacatalogV1DataplexFilesetSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataplexSpec" })
  dataplexSpec?: GoogleCloudDatacatalogV1DataplexSpec;
}
