import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2betaImportErrorsConfig
/** 
 * Configuration of destination for Import related errors.
**/
export class GoogleCloudRetailV2betaImportErrorsConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gcsPrefix" })
  gcsPrefix?: string;
}
