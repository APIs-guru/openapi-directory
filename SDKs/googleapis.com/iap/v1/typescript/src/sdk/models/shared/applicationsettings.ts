import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccessDeniedPageSettings } from "./accessdeniedpagesettings";
import { AttributePropagationSettings } from "./attributepropagationsettings";
import { CsmSettings } from "./csmsettings";



// ApplicationSettings
/** 
 * Wrapper over application specific settings for IAP.
**/
export class ApplicationSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessDeniedPageSettings" })
  accessDeniedPageSettings?: AccessDeniedPageSettings;

  @SpeakeasyMetadata({ data: "json, name=attributePropagationSettings" })
  attributePropagationSettings?: AttributePropagationSettings;

  @SpeakeasyMetadata({ data: "json, name=cookieDomain" })
  cookieDomain?: string;

  @SpeakeasyMetadata({ data: "json, name=csmSettings" })
  csmSettings?: CsmSettings;
}
