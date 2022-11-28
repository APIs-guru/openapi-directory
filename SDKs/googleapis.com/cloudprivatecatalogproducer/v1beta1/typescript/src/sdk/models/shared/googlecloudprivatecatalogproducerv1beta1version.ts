import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudPrivatecatalogproducerV1beta1Version
/** 
 * The producer representation of a version, which is a child resource under a
 * `Product` with asset data.
**/
export class GoogleCloudPrivatecatalogproducerV1beta1Version extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=asset" })
  asset?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=originalAsset" })
  originalAsset?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
