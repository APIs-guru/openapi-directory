import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CareContextDefinition } from "./carecontextdefinition";
import { HiTypeEnumEnum } from "./hitypeenumenum";



export class EventCategoryDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=careContext" })
  careContext: CareContextDefinition;

  @SpeakeasyMetadata({ data: "json, name=hiTypes" })
  hiTypes: HiTypeEnumEnum[];
}
