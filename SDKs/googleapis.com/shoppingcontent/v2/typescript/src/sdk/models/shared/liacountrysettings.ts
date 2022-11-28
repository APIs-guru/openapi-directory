import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LiaAboutPageSettings } from "./liaaboutpagesettings";
import { LiaInventorySettings } from "./liainventorysettings";
import { LiaOnDisplayToOrderSettings } from "./liaondisplaytoordersettings";
import { LiaPosDataProvider } from "./liaposdataprovider";



export class LiaCountrySettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=about" })
  about?: LiaAboutPageSettings;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=hostedLocalStorefrontActive" })
  hostedLocalStorefrontActive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=inventory" })
  inventory?: LiaInventorySettings;

  @SpeakeasyMetadata({ data: "json, name=onDisplayToOrder" })
  onDisplayToOrder?: LiaOnDisplayToOrderSettings;

  @SpeakeasyMetadata({ data: "json, name=posDataProvider" })
  posDataProvider?: LiaPosDataProvider;

  @SpeakeasyMetadata({ data: "json, name=storePickupActive" })
  storePickupActive?: boolean;
}
