import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDiscoveryengineV1alphaImportErrorConfig
/** 
 * Configuration of destination for Import related errors.
**/
export class GoogleCloudDiscoveryengineV1alphaImportErrorConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gcsPrefix" })
  gcsPrefix?: string;
}
