import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PosDataProviders } from "./posdataproviders";



export class LiasettingsListPosDataProvidersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=posDataProviders", elemType: PosDataProviders })
  posDataProviders?: PosDataProviders[];
}
