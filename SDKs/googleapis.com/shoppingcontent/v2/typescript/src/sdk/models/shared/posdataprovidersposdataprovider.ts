import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PosDataProvidersPosDataProvider extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=fullName" })
  fullName?: string;

  @SpeakeasyMetadata({ data: "json, name=providerId" })
  providerId?: string;
}
