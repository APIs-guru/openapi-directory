import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudPrivatecatalogV1beta1Version
/** 
 * The consumer representation of a version which is a child resource under a
 * `Product` with asset data.
**/
export class GoogleCloudPrivatecatalogV1beta1Version extends SpeakeasyBase {
  @SpeakeasyMetadata()
  asset?: Map<string, any>;

  @SpeakeasyMetadata()
  createTime?: string;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  updateTime?: string;
}
