import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Artifact
/** 
 * Artifact describes a build product.
**/
export class Artifact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=checksum" })
  checksum?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=names" })
  names?: string[];
}
