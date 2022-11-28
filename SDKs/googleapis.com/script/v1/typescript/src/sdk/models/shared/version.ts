import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Version
/** 
 * A resource representing a script project version. A version is a "snapshot" of a script project and is similar to a read-only branched release. When creating deployments, the version to use must be specified.
**/
export class Version extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=scriptId" })
  scriptId?: string;

  @SpeakeasyMetadata({ data: "json, name=versionNumber" })
  versionNumber?: number;
}
