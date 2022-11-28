import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DependenciesOut } from "./dependenciesout";



export class SentenceDependencyOut extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dependencies" })
  dependencies: DependenciesOut;

  @SpeakeasyMetadata({ data: "json, name=sentence" })
  sentence: string;
}
