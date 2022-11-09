import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRetailV2alphaImportErrorsConfig
/** 
 * Configuration of destination for Import related errors.
**/
export class GoogleCloudRetailV2alphaImportErrorsConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=gcsPrefix" })
  gcsPrefix?: string;
}
