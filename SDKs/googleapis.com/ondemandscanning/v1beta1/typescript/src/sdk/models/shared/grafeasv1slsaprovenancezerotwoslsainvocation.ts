import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GrafeasV1SlsaProvenanceZeroTwoSlsaConfigSource } from "./grafeasv1slsaprovenancezerotwoslsaconfigsource";


// GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation
/** 
 * Identifies the event that kicked off the build.
**/
export class GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=configSource" })
  configSource?: GrafeasV1SlsaProvenanceZeroTwoSlsaConfigSource;

  @Metadata({ data: "json, name=environment" })
  environment?: Map<string, any>;

  @Metadata({ data: "json, name=parameters" })
  parameters?: Map<string, any>;
}
