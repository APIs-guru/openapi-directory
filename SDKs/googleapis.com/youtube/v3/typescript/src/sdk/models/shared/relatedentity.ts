import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Entity } from "./entity";


export class RelatedEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=entity" })
  entity?: Entity;
}
