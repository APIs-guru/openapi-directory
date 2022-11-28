import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Version } from "./version";



// VersionInfo
/** 
 * Defines the MediaBrowser.Model.Updates.VersionInfo class.
**/
export class VersionInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=VersionNumber" })
  versionNumber?: Version;

  @SpeakeasyMetadata({ data: "json, name=changelog" })
  changelog?: string;

  @SpeakeasyMetadata({ data: "json, name=checksum" })
  checksum?: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName?: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryUrl" })
  repositoryUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceUrl" })
  sourceUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=targetAbi" })
  targetAbi?: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
