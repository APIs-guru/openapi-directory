import { SpeakeasyBase } from "../../../internal/utils";
import { InTotoProvenance } from "./intotoprovenance";
import { InTotoStatement } from "./intotostatement";
import { BuildProvenance } from "./buildprovenance";
/**
 * Details of a build occurrence.
**/
export declare class BuildOccurrence extends SpeakeasyBase {
    intotoProvenance?: InTotoProvenance;
    intotoStatement?: InTotoStatement;
    provenance?: BuildProvenance;
    provenanceBytes?: string;
}
