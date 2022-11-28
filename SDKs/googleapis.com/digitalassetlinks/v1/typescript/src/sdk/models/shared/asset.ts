import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AndroidAppAsset } from "./androidappasset";
import { WebAsset } from "./webasset";



// Asset
/** 
 * Uniquely identifies an asset. A digital asset is an identifiable and addressable online entity that typically provides some service or content. Examples of assets are websites, Android apps, Twitter feeds, and Plus Pages.
**/
export class Asset extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=androidApp" })
  androidApp?: AndroidAppAsset;

  @SpeakeasyMetadata({ data: "json, name=web" })
  web?: WebAsset;
}
