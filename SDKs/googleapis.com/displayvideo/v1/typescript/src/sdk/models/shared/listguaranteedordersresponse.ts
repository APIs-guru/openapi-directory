import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GuaranteedOrder } from "./guaranteedorder";



export class ListGuaranteedOrdersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=guaranteedOrders", elemType: GuaranteedOrder })
  guaranteedOrders?: GuaranteedOrder[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
