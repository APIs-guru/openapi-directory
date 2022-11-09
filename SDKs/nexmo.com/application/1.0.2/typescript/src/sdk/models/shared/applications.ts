import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Embedded } from "./embedded";
import { Links } from "./links";


export class Applications extends SpeakeasyBase {
  @Metadata({ data: "json, name=_embedded" })
  embedded: Embedded;

  @Metadata({ data: "json, name=_links" })
  links: Links;

  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=page_index" })
  pageIndex: number;

  @Metadata({ data: "json, name=page_size" })
  pageSize: number;
}
