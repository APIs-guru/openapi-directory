import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateSlugRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=productName" })
  productName: string;
}
