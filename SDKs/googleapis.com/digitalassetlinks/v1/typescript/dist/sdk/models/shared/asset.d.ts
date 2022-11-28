import { SpeakeasyBase } from "../../../internal/utils";
import { AndroidAppAsset } from "./androidappasset";
import { WebAsset } from "./webasset";
/**
 * Uniquely identifies an asset. A digital asset is an identifiable and addressable online entity that typically provides some service or content. Examples of assets are websites, Android apps, Twitter feeds, and Plus Pages.
**/
export declare class Asset extends SpeakeasyBase {
    androidApp?: AndroidAppAsset;
    web?: WebAsset;
}
