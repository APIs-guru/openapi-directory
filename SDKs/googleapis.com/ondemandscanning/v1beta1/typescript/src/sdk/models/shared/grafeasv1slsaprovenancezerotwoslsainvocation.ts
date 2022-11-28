import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GrafeasV1SlsaProvenanceZeroTwoSlsaConfigSource } from "./grafeasv1slsaprovenancezerotwoslsaconfigsource";



// GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation
/** 
 * Identifies the event that kicked off the build.
**/
export class GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configSource" })
  configSource?: GrafeasV1SlsaProvenanceZeroTwoSlsaConfigSource;

  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: Map<string, any>;
}
