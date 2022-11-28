import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SentenceDependencyOut } from "./sentencedependencyout";



export class SentenceDependenciesOut extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sentence_dependencies", elemType: SentenceDependencyOut })
  sentenceDependencies: SentenceDependencyOut[];
}
