import { SpeakeasyBase } from "../../../internal/utils";
import { BuildSignature } from "./buildsignature";
/**
 * Note holding the version of the provider's builder and the signature of the provenance message in linked BuildDetails.
**/
export declare class BuildType extends SpeakeasyBase {
    builderVersion?: string;
    signature?: BuildSignature;
}
