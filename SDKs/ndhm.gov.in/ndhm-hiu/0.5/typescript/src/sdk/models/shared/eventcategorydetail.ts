import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CareContextDefinition } from "./carecontextdefinition";
import { HiTypeEnumEnum } from "./hitypeenumenum";


export class EventCategoryDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=careContext" })
  careContext: CareContextDefinition;

  @Metadata({ data: "json, name=hiTypes" })
  hiTypes: HiTypeEnumEnum[];
}
