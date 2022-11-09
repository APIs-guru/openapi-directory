import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaBuilder } from "./googledevtoolscontaineranalysisv1alpha1slsaprovenancezerotwoslsabuilder";
import { GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaInvocation } from "./googledevtoolscontaineranalysisv1alpha1slsaprovenancezerotwoslsainvocation";
import { GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMaterial } from "./googledevtoolscontaineranalysisv1alpha1slsaprovenancezerotwoslsamaterial";
import { GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMetadata } from "./googledevtoolscontaineranalysisv1alpha1slsaprovenancezerotwoslsametadata";


// SlsaProvenanceZeroTwo
/** 
 * SlsaProvenanceZeroTwo is the slsa provenance as defined by the slsa spec. See full explanation of fields at slsa.dev/provenance/v0.2.
**/
export class SlsaProvenanceZeroTwo extends SpeakeasyBase {
  @Metadata({ data: "json, name=buildConfig" })
  buildConfig?: Map<string, any>;

  @Metadata({ data: "json, name=buildType" })
  buildType?: string;

  @Metadata({ data: "json, name=builder" })
  builder?: GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaBuilder;

  @Metadata({ data: "json, name=invocation" })
  invocation?: GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaInvocation;

  @Metadata({ data: "json, name=materials", elemType: shared.GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMaterial })
  materials?: GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMaterial[];

  @Metadata({ data: "json, name=metadata" })
  metadata?: GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMetadata;
}
