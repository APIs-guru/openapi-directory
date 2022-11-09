import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OrderEdit extends SpeakeasyBase {
  @Metadata({ data: "json, name=order" })
  order?: any;
}
