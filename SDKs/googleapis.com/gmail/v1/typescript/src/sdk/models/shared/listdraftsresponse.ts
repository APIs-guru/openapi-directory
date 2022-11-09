import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Draft } from "./draft";


export class ListDraftsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=drafts", elemType: shared.Draft })
  drafts?: Draft[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=resultSizeEstimate" })
  resultSizeEstimate?: number;
}
