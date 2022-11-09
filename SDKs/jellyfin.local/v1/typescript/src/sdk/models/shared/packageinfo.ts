import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { VersionInfo } from "./versioninfo";


// PackageInfo
/** 
 * Class PackageInfo.
**/
export class PackageInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=guid" })
  guid?: string;

  @Metadata({ data: "json, name=imageUrl" })
  imageUrl?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=overview" })
  overview?: string;

  @Metadata({ data: "json, name=owner" })
  owner?: string;

  @Metadata({ data: "json, name=versions", elemType: shared.VersionInfo })
  versions?: VersionInfo[];
}
