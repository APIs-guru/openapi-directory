import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ByProducts } from "./byproducts";
import { Environment } from "./environment";
import { GrafeasV1beta1IntotoArtifact } from "./grafeasv1beta1intotoartifact";



// Link
/** 
 * This corresponds to an in-toto link.
**/
export class Link extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=byproducts" })
  byproducts?: ByProducts;

  @SpeakeasyMetadata({ data: "json, name=command" })
  command?: string[];

  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: Environment;

  @SpeakeasyMetadata({ data: "json, name=materials", elemType: GrafeasV1beta1IntotoArtifact })
  materials?: GrafeasV1beta1IntotoArtifact[];

  @SpeakeasyMetadata({ data: "json, name=products", elemType: GrafeasV1beta1IntotoArtifact })
  products?: GrafeasV1beta1IntotoArtifact[];
}
