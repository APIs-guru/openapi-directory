import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaConfigSource } from "./googledevtoolscontaineranalysisv1alpha1slsaprovenancezerotwoslsaconfigsource";



// GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaInvocation
/** 
 * Identifies the event that kicked off the build.
**/
export class GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaInvocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configSource" })
  configSource?: GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaConfigSource;

  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: Map<string, any>;
}
