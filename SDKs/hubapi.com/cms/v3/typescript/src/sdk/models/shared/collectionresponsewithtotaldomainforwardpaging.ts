import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ForwardPaging } from "./forwardpaging";
import { Domain } from "./domain";



export class CollectionResponseWithTotalDomainForwardPaging extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=paging" })
  paging?: ForwardPaging;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: Domain })
  results: Domain[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;
}
