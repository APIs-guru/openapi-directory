import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1DataplexFilesetSpec } from "./googleclouddatacatalogv1dataplexfilesetspec";



// GoogleCloudDatacatalogV1FilesetSpec
/** 
 * Specification that applies to a fileset. Valid only for entries with the 'FILESET' type.
**/
export class GoogleCloudDatacatalogV1FilesetSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataplexFileset" })
  dataplexFileset?: GoogleCloudDatacatalogV1DataplexFilesetSpec;
}
