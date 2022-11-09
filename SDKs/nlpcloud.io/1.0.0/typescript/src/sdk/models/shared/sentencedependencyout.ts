import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DependenciesOut } from "./dependenciesout";


export class SentenceDependencyOut extends SpeakeasyBase {
  @Metadata({ data: "json, name=dependencies" })
  dependencies: DependenciesOut;

  @Metadata({ data: "json, name=sentence" })
  sentence: string;
}
