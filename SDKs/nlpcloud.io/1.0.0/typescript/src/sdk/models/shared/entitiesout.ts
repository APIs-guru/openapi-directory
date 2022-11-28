import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EntityOut } from "./entityout";



export class EntitiesOut extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entities", elemType: EntityOut })
  entities: EntityOut[];
}
