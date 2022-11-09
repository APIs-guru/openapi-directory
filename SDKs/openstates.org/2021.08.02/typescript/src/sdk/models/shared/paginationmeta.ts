import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PaginationMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=max_page" })
  maxPage: number;

  @Metadata({ data: "json, name=page" })
  page: number;

  @Metadata({ data: "json, name=per_page" })
  perPage: number;

  @Metadata({ data: "json, name=total_items" })
  totalItems: number;
}
