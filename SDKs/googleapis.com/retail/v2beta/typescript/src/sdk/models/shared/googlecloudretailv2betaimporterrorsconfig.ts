import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRetailV2betaImportErrorsConfig
/** 
 * Configuration of destination for Import related errors.
**/
export class GoogleCloudRetailV2betaImportErrorsConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=gcsPrefix" })
  gcsPrefix?: string;
}
