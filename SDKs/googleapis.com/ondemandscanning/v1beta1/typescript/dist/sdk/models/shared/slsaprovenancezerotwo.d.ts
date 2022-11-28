import { SpeakeasyBase } from "../../../internal/utils";
import { GrafeasV1SlsaProvenanceZeroTwoSlsaBuilder } from "./grafeasv1slsaprovenancezerotwoslsabuilder";
import { GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation } from "./grafeasv1slsaprovenancezerotwoslsainvocation";
import { GrafeasV1SlsaProvenanceZeroTwoSlsaMaterial } from "./grafeasv1slsaprovenancezerotwoslsamaterial";
import { GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata } from "./grafeasv1slsaprovenancezerotwoslsametadata";
/**
 * See full explanation of fields at slsa.dev/provenance/v0.2.
**/
export declare class SlsaProvenanceZeroTwo extends SpeakeasyBase {
    buildConfig?: Map<string, any>;
    buildType?: string;
    builder?: GrafeasV1SlsaProvenanceZeroTwoSlsaBuilder;
    invocation?: GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation;
    materials?: GrafeasV1SlsaProvenanceZeroTwoSlsaMaterial[];
    metadata?: GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata;
}
