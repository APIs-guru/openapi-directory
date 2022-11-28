import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Version } from "./version";



// InstallationInfo
/** 
 * Class InstallationInfo.
**/
export class InstallationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Changelog" })
  changelog?: string;

  @SpeakeasyMetadata({ data: "json, name=Checksum" })
  checksum?: string;

  @SpeakeasyMetadata({ data: "json, name=Guid" })
  guid?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceUrl" })
  sourceUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: Version;
}
