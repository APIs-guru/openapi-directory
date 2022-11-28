import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SlugResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=productName" })
  productName?: string;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug?: string;
}
