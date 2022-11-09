import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DependencyEdge } from "./dependencyedge";
import { PartOfSpeech } from "./partofspeech";
import { TextSpan } from "./textspan";


// Token
/** 
 * Represents the smallest syntactic building block of the text.
**/
export class Token extends SpeakeasyBase {
  @Metadata({ data: "json, name=dependencyEdge" })
  dependencyEdge?: DependencyEdge;

  @Metadata({ data: "json, name=lemma" })
  lemma?: string;

  @Metadata({ data: "json, name=partOfSpeech" })
  partOfSpeech?: PartOfSpeech;

  @Metadata({ data: "json, name=text" })
  text?: TextSpan;
}
