import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SentenceDependencyOut } from "./sentencedependencyout";


export class SentenceDependenciesOut extends SpeakeasyBase {
  @Metadata({ data: "json, name=sentence_dependencies", elemType: shared.SentenceDependencyOut })
  sentenceDependencies: SentenceDependencyOut[];
}
