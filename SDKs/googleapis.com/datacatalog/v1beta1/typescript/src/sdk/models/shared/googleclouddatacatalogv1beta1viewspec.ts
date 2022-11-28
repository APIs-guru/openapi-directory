import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDatacatalogV1beta1ViewSpec
/** 
 * Table view specification.
**/
export class GoogleCloudDatacatalogV1beta1ViewSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=viewQuery" })
  viewQuery?: string;
}
