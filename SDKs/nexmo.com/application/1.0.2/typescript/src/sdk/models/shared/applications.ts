import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Embedded } from "./embedded";
import { Links } from "./links";



export class Applications extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_embedded" })
  embedded: Embedded;

  @SpeakeasyMetadata({ data: "json, name=_links" })
  links: Links;

  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=page_index" })
  pageIndex: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize: number;
}
