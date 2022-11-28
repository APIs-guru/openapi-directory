import { SpeakeasyBase } from "../../../internal/utils";
import { LiaAboutPageSettings } from "./liaaboutpagesettings";
import { LiaInventorySettings } from "./liainventorysettings";
import { LiaOnDisplayToOrderSettings } from "./liaondisplaytoordersettings";
import { LiaPosDataProvider } from "./liaposdataprovider";
export declare class LiaCountrySettings extends SpeakeasyBase {
    about?: LiaAboutPageSettings;
    country?: string;
    hostedLocalStorefrontActive?: boolean;
    inventory?: LiaInventorySettings;
    onDisplayToOrder?: LiaOnDisplayToOrderSettings;
    posDataProvider?: LiaPosDataProvider;
    storePickupActive?: boolean;
}
