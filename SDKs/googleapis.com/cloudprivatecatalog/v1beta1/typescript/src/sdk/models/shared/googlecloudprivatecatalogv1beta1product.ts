import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudPrivatecatalogV1beta1Product
/** 
 * The readonly representation of a product computed with a given resource
 * context.
**/
export class GoogleCloudPrivatecatalogV1beta1Product extends SpeakeasyBase {
  @SpeakeasyMetadata()
  assetType?: string;

  @SpeakeasyMetadata()
  createTime?: string;

  @SpeakeasyMetadata()
  displayMetadata?: Map<string, any>;

  @SpeakeasyMetadata()
  iconUri?: string;

  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  updateTime?: string;
}
