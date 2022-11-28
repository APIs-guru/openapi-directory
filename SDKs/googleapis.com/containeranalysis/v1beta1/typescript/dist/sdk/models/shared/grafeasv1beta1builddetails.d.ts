import { SpeakeasyBase } from "../../../internal/utils";
import { BuildProvenance } from "./buildprovenance";
/**
 * Details of a build occurrence.
**/
export declare class GrafeasV1beta1BuildDetails extends SpeakeasyBase {
    provenance?: BuildProvenance;
    provenanceBytes?: string;
}
