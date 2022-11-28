import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Arc } from "./arc";
import { Word } from "./word";



export class DependenciesOut extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arcs", elemType: Arc })
  arcs: Arc[];

  @SpeakeasyMetadata({ data: "json, name=words", elemType: Word })
  words: Word[];
}
