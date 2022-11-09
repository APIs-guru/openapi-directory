import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Version } from "./version";


// VersionInfo
/** 
 * Defines the MediaBrowser.Model.Updates.VersionInfo class.
**/
export class VersionInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=VersionNumber" })
  versionNumber?: Version;

  @Metadata({ data: "json, name=changelog" })
  changelog?: string;

  @Metadata({ data: "json, name=checksum" })
  checksum?: string;

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName?: string;

  @Metadata({ data: "json, name=repositoryUrl" })
  repositoryUrl?: string;

  @Metadata({ data: "json, name=sourceUrl" })
  sourceUrl?: string;

  @Metadata({ data: "json, name=targetAbi" })
  targetAbi?: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
