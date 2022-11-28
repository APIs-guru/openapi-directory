import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ArtifactRule } from "./artifactrule";
import { SigningKey } from "./signingkey";



// InToto
/** 
 * This contains the fields corresponding to the definition of a software supply chain step in an in-toto layout. This information goes into a Grafeas note.
**/
export class InToto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expectedCommand" })
  expectedCommand?: string[];

  @SpeakeasyMetadata({ data: "json, name=expectedMaterials", elemType: ArtifactRule })
  expectedMaterials?: ArtifactRule[];

  @SpeakeasyMetadata({ data: "json, name=expectedProducts", elemType: ArtifactRule })
  expectedProducts?: ArtifactRule[];

  @SpeakeasyMetadata({ data: "json, name=signingKeys", elemType: SigningKey })
  signingKeys?: SigningKey[];

  @SpeakeasyMetadata({ data: "json, name=stepName" })
  stepName?: string;

  @SpeakeasyMetadata({ data: "json, name=threshold" })
  threshold?: string;
}
