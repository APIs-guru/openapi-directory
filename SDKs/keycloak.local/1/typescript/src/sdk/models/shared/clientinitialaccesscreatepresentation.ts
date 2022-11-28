import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ClientInitialAccessCreatePresentation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=expiration" })
  expiration?: number;
}
