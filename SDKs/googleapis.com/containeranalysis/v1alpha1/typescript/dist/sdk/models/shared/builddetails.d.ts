import { SpeakeasyBase } from "../../../internal/utils";
import { InTotoProvenance } from "./intotoprovenance";
import { InTotoStatement } from "./intotostatement";
import { BuildProvenance } from "./buildprovenance";
/**
 * Message encapsulating build provenance details.
**/
export declare class BuildDetails extends SpeakeasyBase {
    intotoProvenance?: InTotoProvenance;
    intotoStatement?: InTotoStatement;
    provenance?: BuildProvenance;
    provenanceBytes?: string;
}
