import { SpeakeasyBase } from "../../../internal/utils";
import { DependencyEdge } from "./dependencyedge";
import { PartOfSpeech } from "./partofspeech";
import { TextSpan } from "./textspan";
/**
 * Represents the smallest syntactic building block of the text.
**/
export declare class Token extends SpeakeasyBase {
    dependencyEdge?: DependencyEdge;
    lemma?: string;
    partOfSpeech?: PartOfSpeech;
    text?: TextSpan;
}
