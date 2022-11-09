import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateSlugRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=productName" })
  productName: string;
}
