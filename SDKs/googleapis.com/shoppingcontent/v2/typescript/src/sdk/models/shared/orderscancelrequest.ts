import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OrdersCancelRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=operationId" })
  operationId?: string;

  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=reasonText" })
  reasonText?: string;
}
