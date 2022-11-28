import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OrdersCreateTestReturnResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=returnId" })
  returnId?: string;
}
