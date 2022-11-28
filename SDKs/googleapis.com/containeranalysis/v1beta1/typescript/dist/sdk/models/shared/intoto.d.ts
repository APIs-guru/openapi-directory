import { SpeakeasyBase } from "../../../internal/utils";
import { ArtifactRule } from "./artifactrule";
import { SigningKey } from "./signingkey";
/**
 * This contains the fields corresponding to the definition of a software supply chain step in an in-toto layout. This information goes into a Grafeas note.
**/
export declare class InToto extends SpeakeasyBase {
    expectedCommand?: string[];
    expectedMaterials?: ArtifactRule[];
    expectedProducts?: ArtifactRule[];
    signingKeys?: SigningKey[];
    stepName?: string;
    threshold?: string;
}
