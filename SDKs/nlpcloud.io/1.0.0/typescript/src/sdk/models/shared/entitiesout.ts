import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EntityOut } from "./entityout";


export class EntitiesOut extends SpeakeasyBase {
  @Metadata({ data: "json, name=entities", elemType: shared.EntityOut })
  entities: EntityOut[];
}
