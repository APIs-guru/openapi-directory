import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PosDataProvidersPosDataProvider extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=fullName" })
  fullName?: string;

  @Metadata({ data: "json, name=providerId" })
  providerId?: string;
}
