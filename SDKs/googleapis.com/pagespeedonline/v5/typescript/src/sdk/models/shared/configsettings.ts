import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConfigSettings
/** 
 * Message containing the configuration settings for the Lighthouse run.
**/
export class ConfigSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel?: string;

  @SpeakeasyMetadata({ data: "json, name=emulatedFormFactor" })
  emulatedFormFactor?: string;

  @SpeakeasyMetadata({ data: "json, name=formFactor" })
  formFactor?: string;

  @SpeakeasyMetadata({ data: "json, name=locale" })
  locale?: string;

  @SpeakeasyMetadata({ data: "json, name=onlyCategories" })
  onlyCategories?: any;
}
