import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Version } from "./version";


// InstallationInfo
/** 
 * Class InstallationInfo.
**/
export class InstallationInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=Changelog" })
  changelog?: string;

  @Metadata({ data: "json, name=Checksum" })
  checksum?: string;

  @Metadata({ data: "json, name=Guid" })
  guid?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=SourceUrl" })
  sourceUrl?: string;

  @Metadata({ data: "json, name=Version" })
  version?: Version;
}
