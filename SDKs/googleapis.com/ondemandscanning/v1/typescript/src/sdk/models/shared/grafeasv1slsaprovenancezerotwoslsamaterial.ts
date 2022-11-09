import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GrafeasV1SlsaProvenanceZeroTwoSlsaMaterial
/** 
 * The collection of artifacts that influenced the build including sources, dependencies, build tools, base images, and so on.
**/
export class GrafeasV1SlsaProvenanceZeroTwoSlsaMaterial extends SpeakeasyBase {
  @Metadata({ data: "json, name=digest" })
  digest?: Map<string, string>;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
