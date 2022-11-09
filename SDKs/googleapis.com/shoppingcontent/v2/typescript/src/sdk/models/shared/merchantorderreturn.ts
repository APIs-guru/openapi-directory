import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MerchantOrderReturnItem } from "./merchantorderreturnitem";
import { ReturnShipment } from "./returnshipment";


// MerchantOrderReturn
/** 
 * Order return. Production access (all methods) requires the order manager role. Sandbox access does not.
**/
export class MerchantOrderReturn extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationDate" })
  creationDate?: string;

  @Metadata({ data: "json, name=merchantOrderId" })
  merchantOrderId?: string;

  @Metadata({ data: "json, name=orderId" })
  orderId?: string;

  @Metadata({ data: "json, name=orderReturnId" })
  orderReturnId?: string;

  @Metadata({ data: "json, name=returnItems", elemType: shared.MerchantOrderReturnItem })
  returnItems?: MerchantOrderReturnItem[];

  @Metadata({ data: "json, name=returnShipments", elemType: shared.ReturnShipment })
  returnShipments?: ReturnShipment[];
}
