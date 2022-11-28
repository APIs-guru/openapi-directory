import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PaginationMeta } from "./paginationmeta";
import { Committee } from "./committee";



export class CommitteeList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination: PaginationMeta;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: Committee })
  results: Committee[];
}
