import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaConfigSource } from "./googledevtoolscontaineranalysisv1alpha1slsaprovenancezerotwoslsaconfigsource";


// GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaInvocation
/** 
 * Identifies the event that kicked off the build.
**/
export class GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaInvocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=configSource" })
  configSource?: GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaConfigSource;

  @Metadata({ data: "json, name=environment" })
  environment?: Map<string, any>;

  @Metadata({ data: "json, name=parameters" })
  parameters?: Map<string, any>;
}
