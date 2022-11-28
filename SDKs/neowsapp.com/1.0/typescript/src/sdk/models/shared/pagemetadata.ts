import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PageMetaData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: number;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=total_elements" })
  totalElements?: number;

  @SpeakeasyMetadata({ data: "json, name=total_pages" })
  totalPages?: number;
}
