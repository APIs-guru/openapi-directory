import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Entity } from "./entity";



export class RelatedEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entity" })
  entity?: Entity;
}
