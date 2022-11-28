import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1PhysicalSchema } from "./googleclouddatacatalogv1physicalschema";



// GoogleCloudDatacatalogV1DataplexSpec
/** 
 * Common Dataplex fields.
**/
export class GoogleCloudDatacatalogV1DataplexSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=asset" })
  asset?: string;

  @SpeakeasyMetadata({ data: "json, name=compressionFormat" })
  compressionFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=dataFormat" })
  dataFormat?: GoogleCloudDatacatalogV1PhysicalSchema;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;
}
