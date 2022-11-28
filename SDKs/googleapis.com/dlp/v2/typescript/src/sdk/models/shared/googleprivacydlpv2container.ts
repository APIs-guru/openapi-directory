import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GooglePrivacyDlpV2Container
/** 
 * Represents a container that may contain DLP findings. Examples of a container include a file, table, or database record.
**/
export class GooglePrivacyDlpV2Container extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fullPath" })
  fullPath?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=relativePath" })
  relativePath?: string;

  @SpeakeasyMetadata({ data: "json, name=rootPath" })
  rootPath?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
