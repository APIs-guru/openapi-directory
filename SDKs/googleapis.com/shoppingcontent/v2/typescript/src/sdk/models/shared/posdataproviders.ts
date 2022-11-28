import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PosDataProvidersPosDataProvider } from "./posdataprovidersposdataprovider";



export class PosDataProviders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=posDataProviders", elemType: PosDataProvidersPosDataProvider })
  posDataProviders?: PosDataProvidersPosDataProvider[];
}
