import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Session } from "./session";
import { Session } from "./session";


export class ListSessionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=deletedSession", elemType: shared.Session })
  deletedSession?: Session[];

  @Metadata({ data: "json, name=hasMoreData" })
  hasMoreData?: boolean;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=session", elemType: shared.Session })
  session?: Session[];
}
