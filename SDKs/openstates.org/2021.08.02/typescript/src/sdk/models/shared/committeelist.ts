import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PaginationMeta } from "./paginationmeta";
import { Committee } from "./committee";


export class CommitteeList extends SpeakeasyBase {
  @Metadata({ data: "json, name=pagination" })
  pagination: PaginationMeta;

  @Metadata({ data: "json, name=results", elemType: shared.Committee })
  results: Committee[];
}
