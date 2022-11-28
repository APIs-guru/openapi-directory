import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPrivatecatalogproducerV1beta1Association } from "./googlecloudprivatecatalogproducerv1beta1association";



export class GoogleCloudPrivatecatalogproducerV1beta1CreateAssociationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=association" })
  association?: GoogleCloudPrivatecatalogproducerV1beta1Association;
}
