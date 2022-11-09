import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PosDataProvidersPosDataProvider } from "./posdataprovidersposdataprovider";


export class PosDataProviders extends SpeakeasyBase {
  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=posDataProviders", elemType: shared.PosDataProvidersPosDataProvider })
  posDataProviders?: PosDataProvidersPosDataProvider[];
}
