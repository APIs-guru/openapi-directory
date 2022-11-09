import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PaginationMeta } from "./paginationmeta";
import { Person } from "./person";


export class PersonList extends SpeakeasyBase {
  @Metadata({ data: "json, name=pagination" })
  pagination: PaginationMeta;

  @Metadata({ data: "json, name=results", elemType: shared.Person })
  results: Person[];
}
