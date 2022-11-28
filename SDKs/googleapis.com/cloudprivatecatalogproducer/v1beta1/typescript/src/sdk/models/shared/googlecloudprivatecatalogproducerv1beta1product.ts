import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudPrivatecatalogproducerV1beta1Product
/** 
 * The producer representation of a product which is a child resource of
 * `Catalog` with display metadata and a list of `Version` resources.
**/
export class GoogleCloudPrivatecatalogproducerV1beta1Product extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetType" })
  assetType?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=displayMetadata" })
  displayMetadata?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=iconUri" })
  iconUri?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
