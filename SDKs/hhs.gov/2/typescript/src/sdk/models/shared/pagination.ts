import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Pagination extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=currentUrl" })
  currentUrl?: string;

  @Metadata({ data: "json, name=max" })
  max?: number;

  @Metadata({ data: "json, name=nextUrl" })
  nextUrl?: string;

  @Metadata({ data: "json, name=offset" })
  offset?: number;

  @Metadata({ data: "json, name=pageNum" })
  pageNum?: number;

  @Metadata({ data: "json, name=previousUrl" })
  previousUrl?: string;

  @Metadata({ data: "json, name=sort" })
  sort?: string;

  @Metadata({ data: "json, name=total" })
  total?: number;

  @Metadata({ data: "json, name=totalPages" })
  totalPages?: number;
}
