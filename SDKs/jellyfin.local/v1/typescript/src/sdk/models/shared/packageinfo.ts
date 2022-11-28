import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VersionInfo } from "./versioninfo";



// PackageInfo
/** 
 * Class PackageInfo.
**/
export class PackageInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=guid" })
  guid?: string;

  @SpeakeasyMetadata({ data: "json, name=imageUrl" })
  imageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=overview" })
  overview?: string;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner?: string;

  @SpeakeasyMetadata({ data: "json, name=versions", elemType: VersionInfo })
  versions?: VersionInfo[];
}
