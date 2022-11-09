import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AccessDeniedPageSettings } from "./accessdeniedpagesettings";
import { AttributePropagationSettings } from "./attributepropagationsettings";
import { CsmSettings } from "./csmsettings";


// ApplicationSettings
/** 
 * Wrapper over application specific settings for IAP.
**/
export class ApplicationSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessDeniedPageSettings" })
  accessDeniedPageSettings?: AccessDeniedPageSettings;

  @Metadata({ data: "json, name=attributePropagationSettings" })
  attributePropagationSettings?: AttributePropagationSettings;

  @Metadata({ data: "json, name=cookieDomain" })
  cookieDomain?: string;

  @Metadata({ data: "json, name=csmSettings" })
  csmSettings?: CsmSettings;
}
