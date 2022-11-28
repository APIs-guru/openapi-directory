import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2alphaImportErrorsConfig
/** 
 * Configuration of destination for Import related errors.
**/
export class GoogleCloudRetailV2alphaImportErrorsConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gcsPrefix" })
  gcsPrefix?: string;
}
