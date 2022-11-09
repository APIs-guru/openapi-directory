import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TestOrder } from "./testorder";


export class OrdersGetTestOrderTemplateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=template" })
  template?: TestOrder;
}
