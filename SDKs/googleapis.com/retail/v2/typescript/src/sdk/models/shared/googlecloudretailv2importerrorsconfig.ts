import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRetailV2ImportErrorsConfig
/** 
 * Configuration of destination for Import related errors.
**/
export class GoogleCloudRetailV2ImportErrorsConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=gcsPrefix" })
  gcsPrefix?: string;
}
