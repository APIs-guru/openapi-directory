import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IosInfo
/** 
 * iOS related attributes to the Dynamic Link..
**/
export class IosInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=iosAppStoreId" })
  iosAppStoreId?: string;

  @SpeakeasyMetadata({ data: "json, name=iosBundleId" })
  iosBundleId?: string;

  @SpeakeasyMetadata({ data: "json, name=iosCustomScheme" })
  iosCustomScheme?: string;

  @SpeakeasyMetadata({ data: "json, name=iosFallbackLink" })
  iosFallbackLink?: string;

  @SpeakeasyMetadata({ data: "json, name=iosIpadBundleId" })
  iosIpadBundleId?: string;

  @SpeakeasyMetadata({ data: "json, name=iosIpadFallbackLink" })
  iosIpadFallbackLink?: string;

  @SpeakeasyMetadata({ data: "json, name=iosMinimumVersion" })
  iosMinimumVersion?: string;
}
