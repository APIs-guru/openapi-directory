import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Actor
/** 
 * An object containing information about the effective user and authenticated principal responsible for an action.
**/
export class Actor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=googleSupport" })
  googleSupport?: boolean;
}


// ActorInput
/** 
 * An object containing information about the effective user and authenticated principal responsible for an action.
**/
export class ActorInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;
}
