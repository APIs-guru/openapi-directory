import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudConnectorsV1Secret } from "./googlecloudconnectorsv1secret";



// GoogleCloudConnectorsV1ConfigVariable
/** 
 * ConfigVariable represents a configuration variable present in a Connection. or AuthConfig.
**/
export class GoogleCloudConnectorsV1ConfigVariable extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boolValue" })
  boolValue?: boolean;

  @SpeakeasyMetadata({ data: "json, name=intValue" })
  intValue?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=secretValue" })
  secretValue?: GoogleCloudConnectorsV1Secret;

  @SpeakeasyMetadata({ data: "json, name=stringValue" })
  stringValue?: string;
}
