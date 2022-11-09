import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatacatalogV1PhysicalSchema } from "./googleclouddatacatalogv1physicalschema";


// GoogleCloudDatacatalogV1DataplexSpec
/** 
 * Common Dataplex fields.
**/
export class GoogleCloudDatacatalogV1DataplexSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=asset" })
  asset?: string;

  @Metadata({ data: "json, name=compressionFormat" })
  compressionFormat?: string;

  @Metadata({ data: "json, name=dataFormat" })
  dataFormat?: GoogleCloudDatacatalogV1PhysicalSchema;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;
}
