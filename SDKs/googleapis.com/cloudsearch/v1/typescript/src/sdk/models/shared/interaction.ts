import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Principal } from "./principal";


export enum InteractionTypeEnum {
    Unspecified = "UNSPECIFIED",
    View = "VIEW",
    Edit = "EDIT"
}


// Interaction
/** 
 * Represents an interaction between a user and an item.
**/
export class Interaction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=interactionTime" })
  interactionTime?: string;

  @SpeakeasyMetadata({ data: "json, name=principal" })
  principal?: Principal;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: InteractionTypeEnum;
}
