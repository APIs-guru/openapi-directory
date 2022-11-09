import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudPrivatecatalogproducerV1beta1Version
/** 
 * The producer representation of a version, which is a child resource under a
 * `Product` with asset data.
**/
export class GoogleCloudPrivatecatalogproducerV1beta1Version extends SpeakeasyBase {
  @Metadata({ data: "json, name=asset" })
  asset?: Map<string, any>;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=originalAsset" })
  originalAsset?: Map<string, any>;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
