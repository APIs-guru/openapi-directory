import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDiscoveryengineV1betaImportErrorConfig
/** 
 * Configuration of destination for Import related errors.
**/
export class GoogleCloudDiscoveryengineV1betaImportErrorConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gcsPrefix" })
  gcsPrefix?: string;
}
