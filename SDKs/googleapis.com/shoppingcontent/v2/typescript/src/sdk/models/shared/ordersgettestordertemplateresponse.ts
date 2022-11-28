import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TestOrder } from "./testorder";



export class OrdersGetTestOrderTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=template" })
  template?: TestOrder;
}
