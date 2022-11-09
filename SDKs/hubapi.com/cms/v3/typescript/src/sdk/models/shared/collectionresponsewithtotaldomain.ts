import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Paging } from "./paging";
import { Domain } from "./domain";


export class CollectionResponseWithTotalDomain extends SpeakeasyBase {
  @Metadata({ data: "json, name=paging" })
  paging?: Paging;

  @Metadata({ data: "json, name=results", elemType: shared.Domain })
  results: Domain[];

  @Metadata({ data: "json, name=total" })
  total: number;
}
