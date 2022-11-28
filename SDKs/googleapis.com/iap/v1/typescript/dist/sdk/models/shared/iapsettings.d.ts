import { SpeakeasyBase } from "../../../internal/utils";
import { AccessSettings } from "./accesssettings";
import { ApplicationSettings } from "./applicationsettings";
/**
 * The IAP configurable settings.
**/
export declare class IapSettings extends SpeakeasyBase {
    accessSettings?: AccessSettings;
    applicationSettings?: ApplicationSettings;
    name?: string;
}
