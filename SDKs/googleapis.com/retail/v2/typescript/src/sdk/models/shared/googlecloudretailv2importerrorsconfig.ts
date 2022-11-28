import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2ImportErrorsConfig
/** 
 * Configuration of destination for Import related errors.
**/
export class GoogleCloudRetailV2ImportErrorsConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gcsPrefix" })
  gcsPrefix?: string;
}
