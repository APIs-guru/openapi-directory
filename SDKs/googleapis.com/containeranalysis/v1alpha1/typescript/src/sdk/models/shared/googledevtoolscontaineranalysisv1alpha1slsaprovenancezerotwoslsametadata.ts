import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaCompleteness } from "./googledevtoolscontaineranalysisv1alpha1slsaprovenancezerotwoslsacompleteness";


// GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMetadata
/** 
 * Other properties of the build.
**/
export class GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=buildFinishedOn" })
  buildFinishedOn?: string;

  @Metadata({ data: "json, name=buildInvocationId" })
  buildInvocationId?: string;

  @Metadata({ data: "json, name=buildStartedOn" })
  buildStartedOn?: string;

  @Metadata({ data: "json, name=completeness" })
  completeness?: GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaCompleteness;

  @Metadata({ data: "json, name=reproducible" })
  reproducible?: boolean;
}
