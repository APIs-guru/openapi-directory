import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRetailV2alphaPurgeProductsRequest
/** 
 * Request message for PurgeProducts method.
**/
export class GoogleCloudRetailV2alphaPurgeProductsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=filter" })
  filter?: string;

  @Metadata({ data: "json, name=force" })
  force?: boolean;
}
