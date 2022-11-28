import { SpeakeasyBase } from "../../../internal/utils";
import { BuildSignature } from "./buildsignature";
/**
 * Note holding the version of the provider's builder and the signature of the provenance message in the build details occurrence.
**/
export declare class Build extends SpeakeasyBase {
    builderVersion?: string;
    signature?: BuildSignature;
}
