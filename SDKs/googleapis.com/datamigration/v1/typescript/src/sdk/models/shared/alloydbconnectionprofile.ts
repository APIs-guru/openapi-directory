import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AlloyDbSettings } from "./alloydbsettings";
import { AlloyDbSettingsInput } from "./alloydbsettings";



// AlloyDbConnectionProfile
/** 
 * Specifies required connection parameters, and the parameters required to create an AlloyDB destination cluster.
**/
export class AlloyDbConnectionProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusterId" })
  clusterId?: string;

  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: AlloyDbSettings;
}


// AlloyDbConnectionProfileInput
/** 
 * Specifies required connection parameters, and the parameters required to create an AlloyDB destination cluster.
**/
export class AlloyDbConnectionProfileInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusterId" })
  clusterId?: string;

  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: AlloyDbSettingsInput;
}
