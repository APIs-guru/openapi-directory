import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GrafeasV1SlsaProvenanceZeroTwoSlsaConfigSource
/** 
 * Describes where the config file that kicked off the build came from. This is effectively a pointer to the source where buildConfig came from.
**/
export class GrafeasV1SlsaProvenanceZeroTwoSlsaConfigSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=digest" })
  digest?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=entryPoint" })
  entryPoint?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
