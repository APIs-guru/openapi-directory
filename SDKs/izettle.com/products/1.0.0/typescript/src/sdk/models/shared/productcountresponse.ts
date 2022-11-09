import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProductCountResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=productCount" })
  productCount: number;
}
