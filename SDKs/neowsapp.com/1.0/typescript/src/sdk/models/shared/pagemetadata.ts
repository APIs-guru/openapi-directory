import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PageMetaData extends SpeakeasyBase {
  @Metadata({ data: "json, name=number" })
  number?: number;

  @Metadata({ data: "json, name=size" })
  size?: number;

  @Metadata({ data: "json, name=total_elements" })
  totalElements?: number;

  @Metadata({ data: "json, name=total_pages" })
  totalPages?: number;
}
