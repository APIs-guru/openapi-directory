import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DependencyEdge } from "./dependencyedge";
import { PartOfSpeech } from "./partofspeech";
import { TextSpan } from "./textspan";



// Token
/** 
 * Represents the smallest syntactic building block of the text.
**/
export class Token extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dependencyEdge" })
  dependencyEdge?: DependencyEdge;

  @SpeakeasyMetadata({ data: "json, name=lemma" })
  lemma?: string;

  @SpeakeasyMetadata({ data: "json, name=partOfSpeech" })
  partOfSpeech?: PartOfSpeech;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: TextSpan;
}
