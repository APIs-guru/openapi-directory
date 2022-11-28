import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Bullet } from "./bullet";
import { BulletSuggestionState } from "./bulletsuggestionstate";



// SuggestedBullet
/** 
 * A suggested change to a Bullet.
**/
export class SuggestedBullet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bullet" })
  bullet?: Bullet;

  @SpeakeasyMetadata({ data: "json, name=bulletSuggestionState" })
  bulletSuggestionState?: BulletSuggestionState;
}
