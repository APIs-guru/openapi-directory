import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudPrivatecatalogproducerV1beta1Association } from "./googlecloudprivatecatalogproducerv1beta1association";


export class GoogleCloudPrivatecatalogproducerV1beta1CreateAssociationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=association" })
  association?: GoogleCloudPrivatecatalogproducerV1beta1Association;
}
