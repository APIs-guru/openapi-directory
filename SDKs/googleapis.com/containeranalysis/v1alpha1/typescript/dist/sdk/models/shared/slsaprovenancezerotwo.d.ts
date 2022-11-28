import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaBuilder } from "./googledevtoolscontaineranalysisv1alpha1slsaprovenancezerotwoslsabuilder";
import { GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaInvocation } from "./googledevtoolscontaineranalysisv1alpha1slsaprovenancezerotwoslsainvocation";
import { GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMaterial } from "./googledevtoolscontaineranalysisv1alpha1slsaprovenancezerotwoslsamaterial";
import { GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMetadata } from "./googledevtoolscontaineranalysisv1alpha1slsaprovenancezerotwoslsametadata";
/**
 * SlsaProvenanceZeroTwo is the slsa provenance as defined by the slsa spec. See full explanation of fields at slsa.dev/provenance/v0.2.
**/
export declare class SlsaProvenanceZeroTwo extends SpeakeasyBase {
    buildConfig?: Map<string, any>;
    buildType?: string;
    builder?: GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaBuilder;
    invocation?: GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaInvocation;
    materials?: GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMaterial[];
    metadata?: GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMetadata;
}
