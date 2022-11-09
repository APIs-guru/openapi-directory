import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Material
/** 
 * Material is a material used in the generation of the provenance
**/
export class Material extends SpeakeasyBase {
  @Metadata({ data: "json, name=digest" })
  digest?: Map<string, string>;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
