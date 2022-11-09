import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SlugResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=productName" })
  productName?: string;

  @Metadata({ data: "json, name=slug" })
  slug?: string;
}
