import { SpeakeasyBase } from "../../../internal/utils";
import { ByProducts } from "./byproducts";
import { Environment } from "./environment";
import { GrafeasV1beta1IntotoArtifact } from "./grafeasv1beta1intotoartifact";
/**
 * This corresponds to an in-toto link.
**/
export declare class Link extends SpeakeasyBase {
    byproducts?: ByProducts;
    command?: string[];
    environment?: Environment;
    materials?: GrafeasV1beta1IntotoArtifact[];
    products?: GrafeasV1beta1IntotoArtifact[];
}
