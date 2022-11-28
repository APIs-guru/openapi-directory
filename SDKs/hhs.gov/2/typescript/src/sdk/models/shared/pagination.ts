import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Pagination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=currentUrl" })
  currentUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=max" })
  max?: number;

  @SpeakeasyMetadata({ data: "json, name=nextUrl" })
  nextUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "json, name=pageNum" })
  pageNum?: number;

  @SpeakeasyMetadata({ data: "json, name=previousUrl" })
  previousUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;

  @SpeakeasyMetadata({ data: "json, name=totalPages" })
  totalPages?: number;
}
