import { SpeakeasyBase } from "../../../internal/utils";
import { Bullet } from "./bullet";
import { BulletSuggestionState } from "./bulletsuggestionstate";
/**
 * A suggested change to a Bullet.
**/
export declare class SuggestedBullet extends SpeakeasyBase {
    bullet?: Bullet;
    bulletSuggestionState?: BulletSuggestionState;
}
