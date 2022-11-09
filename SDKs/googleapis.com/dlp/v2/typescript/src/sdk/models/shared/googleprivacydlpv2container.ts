import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GooglePrivacyDlpV2Container
/** 
 * Represents a container that may contain DLP findings. Examples of a container include a file, table, or database record.
**/
export class GooglePrivacyDlpV2Container extends SpeakeasyBase {
  @Metadata({ data: "json, name=fullPath" })
  fullPath?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=relativePath" })
  relativePath?: string;

  @Metadata({ data: "json, name=rootPath" })
  rootPath?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
