import { SpeakeasyBase } from "../../../internal/utils";
import { AccessDeniedPageSettings } from "./accessdeniedpagesettings";
import { AttributePropagationSettings } from "./attributepropagationsettings";
import { CsmSettings } from "./csmsettings";
/**
 * Wrapper over application specific settings for IAP.
**/
export declare class ApplicationSettings extends SpeakeasyBase {
    accessDeniedPageSettings?: AccessDeniedPageSettings;
    attributePropagationSettings?: AttributePropagationSettings;
    cookieDomain?: string;
    csmSettings?: CsmSettings;
}
