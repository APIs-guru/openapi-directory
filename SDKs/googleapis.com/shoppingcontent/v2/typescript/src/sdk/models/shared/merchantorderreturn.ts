import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MerchantOrderReturnItem } from "./merchantorderreturnitem";
import { ReturnShipment } from "./returnshipment";



// MerchantOrderReturn
/** 
 * Order return. Production access (all methods) requires the order manager role. Sandbox access does not.
**/
export class MerchantOrderReturn extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=merchantOrderId" })
  merchantOrderId?: string;

  @SpeakeasyMetadata({ data: "json, name=orderId" })
  orderId?: string;

  @SpeakeasyMetadata({ data: "json, name=orderReturnId" })
  orderReturnId?: string;

  @SpeakeasyMetadata({ data: "json, name=returnItems", elemType: MerchantOrderReturnItem })
  returnItems?: MerchantOrderReturnItem[];

  @SpeakeasyMetadata({ data: "json, name=returnShipments", elemType: ReturnShipment })
  returnShipments?: ReturnShipment[];
}
