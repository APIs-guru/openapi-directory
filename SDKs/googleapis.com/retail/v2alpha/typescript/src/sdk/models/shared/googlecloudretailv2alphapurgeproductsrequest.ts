import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2alphaPurgeProductsRequest
/** 
 * Request message for PurgeProducts method.
**/
export class GoogleCloudRetailV2alphaPurgeProductsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=force" })
  force?: boolean;
}
