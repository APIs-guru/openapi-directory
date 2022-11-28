import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaCompleteness } from "./googledevtoolscontaineranalysisv1alpha1slsaprovenancezerotwoslsacompleteness";



// GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMetadata
/** 
 * Other properties of the build.
**/
export class GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buildFinishedOn" })
  buildFinishedOn?: string;

  @SpeakeasyMetadata({ data: "json, name=buildInvocationId" })
  buildInvocationId?: string;

  @SpeakeasyMetadata({ data: "json, name=buildStartedOn" })
  buildStartedOn?: string;

  @SpeakeasyMetadata({ data: "json, name=completeness" })
  completeness?: GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaCompleteness;

  @SpeakeasyMetadata({ data: "json, name=reproducible" })
  reproducible?: boolean;
}
