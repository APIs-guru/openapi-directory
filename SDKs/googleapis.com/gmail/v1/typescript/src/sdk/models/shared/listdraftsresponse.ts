import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Draft } from "./draft";



export class ListDraftsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=drafts", elemType: Draft })
  drafts?: Draft[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=resultSizeEstimate" })
  resultSizeEstimate?: number;
}
