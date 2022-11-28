import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PaginationMeta } from "./paginationmeta";
import { Jurisdiction } from "./jurisdiction";



export class JurisdictionList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination: PaginationMeta;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: Jurisdiction })
  results: Jurisdiction[];
}
