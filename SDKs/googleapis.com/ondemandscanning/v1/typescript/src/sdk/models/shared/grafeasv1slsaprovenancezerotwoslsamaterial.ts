import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GrafeasV1SlsaProvenanceZeroTwoSlsaMaterial
/** 
 * The collection of artifacts that influenced the build including sources, dependencies, build tools, base images, and so on.
**/
export class GrafeasV1SlsaProvenanceZeroTwoSlsaMaterial extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=digest" })
  digest?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
