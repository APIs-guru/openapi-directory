import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PaginationMeta } from "./paginationmeta";
import { Person } from "./person";



export class PersonList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination: PaginationMeta;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: Person })
  results: Person[];
}
