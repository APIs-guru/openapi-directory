import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ByProducts } from "./byproducts";
import { Environment } from "./environment";
import { GrafeasV1beta1IntotoArtifact } from "./grafeasv1beta1intotoartifact";
import { GrafeasV1beta1IntotoArtifact } from "./grafeasv1beta1intotoartifact";


// Link
/** 
 * This corresponds to an in-toto link.
**/
export class Link extends SpeakeasyBase {
  @Metadata({ data: "json, name=byproducts" })
  byproducts?: ByProducts;

  @Metadata({ data: "json, name=command" })
  command?: string[];

  @Metadata({ data: "json, name=environment" })
  environment?: Environment;

  @Metadata({ data: "json, name=materials", elemType: shared.GrafeasV1beta1IntotoArtifact })
  materials?: GrafeasV1beta1IntotoArtifact[];

  @Metadata({ data: "json, name=products", elemType: shared.GrafeasV1beta1IntotoArtifact })
  products?: GrafeasV1beta1IntotoArtifact[];
}
