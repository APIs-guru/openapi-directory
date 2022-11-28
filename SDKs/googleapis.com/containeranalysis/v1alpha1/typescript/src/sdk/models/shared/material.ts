import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Material
/** 
 * Material is a material used in the generation of the provenance
**/
export class Material extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=digest" })
  digest?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
