import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OrderCreate extends SpeakeasyBase {
  @Metadata({ data: "json, name=order" })
  order?: any;
}
