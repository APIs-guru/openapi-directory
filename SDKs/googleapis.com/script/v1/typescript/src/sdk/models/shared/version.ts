import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Version
/** 
 * A resource representing a script project version. A version is a "snapshot" of a script project and is similar to a read-only branched release. When creating deployments, the version to use must be specified.
**/
export class Version extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=scriptId" })
  scriptId?: string;

  @Metadata({ data: "json, name=versionNumber" })
  versionNumber?: number;
}
