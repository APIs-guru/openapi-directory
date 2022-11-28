import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LiaPosDataProvider extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=posDataProviderId" })
  posDataProviderId?: string;

  @SpeakeasyMetadata({ data: "json, name=posExternalAccountId" })
  posExternalAccountId?: string;
}
