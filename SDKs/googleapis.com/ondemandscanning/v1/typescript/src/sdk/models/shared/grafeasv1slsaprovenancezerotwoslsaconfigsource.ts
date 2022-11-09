import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GrafeasV1SlsaProvenanceZeroTwoSlsaConfigSource
/** 
 * Describes where the config file that kicked off the build came from. This is effectively a pointer to the source where buildConfig came from.
**/
export class GrafeasV1SlsaProvenanceZeroTwoSlsaConfigSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=digest" })
  digest?: Map<string, string>;

  @Metadata({ data: "json, name=entryPoint" })
  entryPoint?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
