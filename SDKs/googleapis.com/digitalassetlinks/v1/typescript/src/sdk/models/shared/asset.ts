import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AndroidAppAsset } from "./androidappasset";
import { WebAsset } from "./webasset";


// Asset
/** 
 * Uniquely identifies an asset. A digital asset is an identifiable and addressable online entity that typically provides some service or content. Examples of assets are websites, Android apps, Twitter feeds, and Plus Pages.
**/
export class Asset extends SpeakeasyBase {
  @Metadata({ data: "json, name=androidApp" })
  androidApp?: AndroidAppAsset;

  @Metadata({ data: "json, name=web" })
  web?: WebAsset;
}
