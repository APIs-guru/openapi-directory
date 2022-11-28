import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ClientInitialAccessPresentation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=expiration" })
  expiration?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=remainingCount" })
  remainingCount?: number;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: number;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;
}
