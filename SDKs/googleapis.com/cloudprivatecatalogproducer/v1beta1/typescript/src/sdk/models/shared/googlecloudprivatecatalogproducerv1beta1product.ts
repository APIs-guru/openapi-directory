import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudPrivatecatalogproducerV1beta1Product
/** 
 * The producer representation of a product which is a child resource of
 * `Catalog` with display metadata and a list of `Version` resources.
**/
export class GoogleCloudPrivatecatalogproducerV1beta1Product extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetType" })
  assetType?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=displayMetadata" })
  displayMetadata?: Map<string, any>;

  @Metadata({ data: "json, name=iconUri" })
  iconUri?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
