import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ConfigSettings
/** 
 * Message containing the configuration settings for the Lighthouse run.
**/
export class ConfigSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=channel" })
  channel?: string;

  @Metadata({ data: "json, name=emulatedFormFactor" })
  emulatedFormFactor?: string;

  @Metadata({ data: "json, name=formFactor" })
  formFactor?: string;

  @Metadata({ data: "json, name=locale" })
  locale?: string;

  @Metadata({ data: "json, name=onlyCategories" })
  onlyCategories?: any;
}
