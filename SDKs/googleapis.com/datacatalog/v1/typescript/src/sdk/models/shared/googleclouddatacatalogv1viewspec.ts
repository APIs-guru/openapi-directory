import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDatacatalogV1ViewSpec
/** 
 * Table view specification.
**/
export class GoogleCloudDatacatalogV1ViewSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=viewQuery" })
  viewQuery?: string;
}
