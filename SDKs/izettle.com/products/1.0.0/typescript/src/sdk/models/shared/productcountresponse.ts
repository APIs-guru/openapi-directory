import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProductCountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=productCount" })
  productCount: number;
}
