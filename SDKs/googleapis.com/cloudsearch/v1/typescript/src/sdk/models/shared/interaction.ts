import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Principal } from "./principal";

export enum InteractionTypeEnum {
    Unspecified = "UNSPECIFIED"
,    View = "VIEW"
,    Edit = "EDIT"
}


// Interaction
/** 
 * Represents an interaction between a user and an item.
**/
export class Interaction extends SpeakeasyBase {
  @Metadata({ data: "json, name=interactionTime" })
  interactionTime?: string;

  @Metadata({ data: "json, name=principal" })
  principal?: Principal;

  @Metadata({ data: "json, name=type" })
  type?: InteractionTypeEnum;
}
