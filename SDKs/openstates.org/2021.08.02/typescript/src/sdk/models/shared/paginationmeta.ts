import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PaginationMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=max_page" })
  maxPage: number;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "json, name=per_page" })
  perPage: number;

  @SpeakeasyMetadata({ data: "json, name=total_items" })
  totalItems: number;
}
