import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OrdersCreateTestReturnResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=returnId" })
  returnId?: string;
}
