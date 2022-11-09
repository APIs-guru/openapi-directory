import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Bullet } from "./bullet";
import { BulletSuggestionState } from "./bulletsuggestionstate";


// SuggestedBullet
/** 
 * A suggested change to a Bullet.
**/
export class SuggestedBullet extends SpeakeasyBase {
  @Metadata({ data: "json, name=bullet" })
  bullet?: Bullet;

  @Metadata({ data: "json, name=bulletSuggestionState" })
  bulletSuggestionState?: BulletSuggestionState;
}
