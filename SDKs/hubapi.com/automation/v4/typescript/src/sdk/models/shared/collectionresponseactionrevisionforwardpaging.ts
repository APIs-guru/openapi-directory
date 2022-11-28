import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ForwardPaging } from "./forwardpaging";
import { ActionRevision } from "./actionrevision";



export class CollectionResponseActionRevisionForwardPaging extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=paging" })
  paging?: ForwardPaging;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: ActionRevision })
  results: ActionRevision[];
}
