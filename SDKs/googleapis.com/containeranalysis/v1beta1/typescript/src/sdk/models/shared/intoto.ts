import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ArtifactRule } from "./artifactrule";
import { ArtifactRule } from "./artifactrule";
import { SigningKey } from "./signingkey";


// InToto
/** 
 * This contains the fields corresponding to the definition of a software supply chain step in an in-toto layout. This information goes into a Grafeas note.
**/
export class InToto extends SpeakeasyBase {
  @Metadata({ data: "json, name=expectedCommand" })
  expectedCommand?: string[];

  @Metadata({ data: "json, name=expectedMaterials", elemType: shared.ArtifactRule })
  expectedMaterials?: ArtifactRule[];

  @Metadata({ data: "json, name=expectedProducts", elemType: shared.ArtifactRule })
  expectedProducts?: ArtifactRule[];

  @Metadata({ data: "json, name=signingKeys", elemType: shared.SigningKey })
  signingKeys?: SigningKey[];

  @Metadata({ data: "json, name=stepName" })
  stepName?: string;

  @Metadata({ data: "json, name=threshold" })
  threshold?: string;
}
