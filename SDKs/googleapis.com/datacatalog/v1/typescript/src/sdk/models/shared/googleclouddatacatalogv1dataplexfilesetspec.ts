import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1DataplexSpec } from "./googleclouddatacatalogv1dataplexspec";



// GoogleCloudDatacatalogV1DataplexFilesetSpec
/** 
 * Entry specyfication for a Dataplex fileset.
**/
export class GoogleCloudDatacatalogV1DataplexFilesetSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataplexSpec" })
  dataplexSpec?: GoogleCloudDatacatalogV1DataplexSpec;
}
