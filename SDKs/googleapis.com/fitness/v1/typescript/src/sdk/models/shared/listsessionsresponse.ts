import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Session } from "./session";



export class ListSessionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deletedSession", elemType: Session })
  deletedSession?: Session[];

  @SpeakeasyMetadata({ data: "json, name=hasMoreData" })
  hasMoreData?: boolean;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=session", elemType: Session })
  session?: Session[];
}
