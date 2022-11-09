import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ClientInitialAccessPresentation extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=expiration" })
  expiration?: number;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=remainingCount" })
  remainingCount?: number;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: number;

  @Metadata({ data: "json, name=token" })
  token?: string;
}
