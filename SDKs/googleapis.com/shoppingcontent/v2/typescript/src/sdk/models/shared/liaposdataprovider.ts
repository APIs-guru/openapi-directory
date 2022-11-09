import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LiaPosDataProvider extends SpeakeasyBase {
  @Metadata({ data: "json, name=posDataProviderId" })
  posDataProviderId?: string;

  @Metadata({ data: "json, name=posExternalAccountId" })
  posExternalAccountId?: string;
}
