import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Arc } from "./arc";
import { Word } from "./word";


export class DependenciesOut extends SpeakeasyBase {
  @Metadata({ data: "json, name=arcs", elemType: shared.Arc })
  arcs: Arc[];

  @Metadata({ data: "json, name=words", elemType: shared.Word })
  words: Word[];
}
