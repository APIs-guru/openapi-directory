import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ForwardPaging } from "./forwardpaging";
import { ActionRevision } from "./actionrevision";


export class CollectionResponseActionRevisionForwardPaging extends SpeakeasyBase {
  @Metadata({ data: "json, name=paging" })
  paging?: ForwardPaging;

  @Metadata({ data: "json, name=results", elemType: shared.ActionRevision })
  results: ActionRevision[];
}
