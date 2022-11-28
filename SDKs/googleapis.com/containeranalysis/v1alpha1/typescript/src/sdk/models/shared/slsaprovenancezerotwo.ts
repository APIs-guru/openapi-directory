import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaBuilder } from "./googledevtoolscontaineranalysisv1alpha1slsaprovenancezerotwoslsabuilder";
import { GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaInvocation } from "./googledevtoolscontaineranalysisv1alpha1slsaprovenancezerotwoslsainvocation";
import { GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMaterial } from "./googledevtoolscontaineranalysisv1alpha1slsaprovenancezerotwoslsamaterial";
import { GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMetadata } from "./googledevtoolscontaineranalysisv1alpha1slsaprovenancezerotwoslsametadata";



// SlsaProvenanceZeroTwo
/** 
 * SlsaProvenanceZeroTwo is the slsa provenance as defined by the slsa spec. See full explanation of fields at slsa.dev/provenance/v0.2.
**/
export class SlsaProvenanceZeroTwo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buildConfig" })
  buildConfig?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=buildType" })
  buildType?: string;

  @SpeakeasyMetadata({ data: "json, name=builder" })
  builder?: GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaBuilder;

  @SpeakeasyMetadata({ data: "json, name=invocation" })
  invocation?: GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaInvocation;

  @SpeakeasyMetadata({ data: "json, name=materials", elemType: GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMaterial })
  materials?: GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMaterial[];

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMetadata;
}
