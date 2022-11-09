import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GuaranteedOrder } from "./guaranteedorder";


export class ListGuaranteedOrdersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=guaranteedOrders", elemType: shared.GuaranteedOrder })
  guaranteedOrders?: GuaranteedOrder[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
