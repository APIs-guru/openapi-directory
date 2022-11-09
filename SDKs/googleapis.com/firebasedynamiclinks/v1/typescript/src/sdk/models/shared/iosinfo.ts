import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IosInfo
/** 
 * iOS related attributes to the Dynamic Link..
**/
export class IosInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=iosAppStoreId" })
  iosAppStoreId?: string;

  @Metadata({ data: "json, name=iosBundleId" })
  iosBundleId?: string;

  @Metadata({ data: "json, name=iosCustomScheme" })
  iosCustomScheme?: string;

  @Metadata({ data: "json, name=iosFallbackLink" })
  iosFallbackLink?: string;

  @Metadata({ data: "json, name=iosIpadBundleId" })
  iosIpadBundleId?: string;

  @Metadata({ data: "json, name=iosIpadFallbackLink" })
  iosIpadFallbackLink?: string;

  @Metadata({ data: "json, name=iosMinimumVersion" })
  iosMinimumVersion?: string;
}
