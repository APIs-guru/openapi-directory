import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LiaAboutPageSettings } from "./liaaboutpagesettings";
import { LiaInventorySettings } from "./liainventorysettings";
import { LiaOnDisplayToOrderSettings } from "./liaondisplaytoordersettings";
import { LiaPosDataProvider } from "./liaposdataprovider";


export class LiaCountrySettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=about" })
  about?: LiaAboutPageSettings;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=hostedLocalStorefrontActive" })
  hostedLocalStorefrontActive?: boolean;

  @Metadata({ data: "json, name=inventory" })
  inventory?: LiaInventorySettings;

  @Metadata({ data: "json, name=onDisplayToOrder" })
  onDisplayToOrder?: LiaOnDisplayToOrderSettings;

  @Metadata({ data: "json, name=posDataProvider" })
  posDataProvider?: LiaPosDataProvider;

  @Metadata({ data: "json, name=storePickupActive" })
  storePickupActive?: boolean;
}
