import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ClientInitialAccessCreatePresentation extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=expiration" })
  expiration?: number;
}
