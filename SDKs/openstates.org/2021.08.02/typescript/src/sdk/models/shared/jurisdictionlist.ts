import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PaginationMeta } from "./paginationmeta";
import { Jurisdiction } from "./jurisdiction";


export class JurisdictionList extends SpeakeasyBase {
  @Metadata({ data: "json, name=pagination" })
  pagination: PaginationMeta;

  @Metadata({ data: "json, name=results", elemType: shared.Jurisdiction })
  results: Jurisdiction[];
}
