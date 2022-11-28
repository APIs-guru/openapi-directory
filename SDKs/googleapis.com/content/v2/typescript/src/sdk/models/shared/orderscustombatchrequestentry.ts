import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrdersCustomBatchRequestEntryCancel } from "./orderscustombatchrequestentrycancel";
import { OrdersCustomBatchRequestEntryCancelLineItem } from "./orderscustombatchrequestentrycancellineitem";
import { OrdersCustomBatchRequestEntryInStoreRefundLineItem } from "./orderscustombatchrequestentryinstorerefundlineitem";
import { OrdersCustomBatchRequestEntryRefund } from "./orderscustombatchrequestentryrefund";
import { OrdersCustomBatchRequestEntryRejectReturnLineItem } from "./orderscustombatchrequestentryrejectreturnlineitem";
import { OrdersCustomBatchRequestEntryReturnLineItem } from "./orderscustombatchrequestentryreturnlineitem";
import { OrdersCustomBatchRequestEntryReturnRefundLineItem } from "./orderscustombatchrequestentryreturnrefundlineitem";
import { OrdersCustomBatchRequestEntrySetLineItemMetadata } from "./orderscustombatchrequestentrysetlineitemmetadata";
import { OrdersCustomBatchRequestEntryShipLineItems } from "./orderscustombatchrequestentryshiplineitems";
import { OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails } from "./orderscustombatchrequestentryupdatelineitemshippingdetails";
import { OrdersCustomBatchRequestEntryUpdateShipment } from "./orderscustombatchrequestentryupdateshipment";



export class OrdersCustomBatchRequestEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=batchId" })
  batchId?: number;

  @SpeakeasyMetadata({ data: "json, name=cancel" })
  cancel?: OrdersCustomBatchRequestEntryCancel;

  @SpeakeasyMetadata({ data: "json, name=cancelLineItem" })
  cancelLineItem?: OrdersCustomBatchRequestEntryCancelLineItem;

  @SpeakeasyMetadata({ data: "json, name=inStoreRefundLineItem" })
  inStoreRefundLineItem?: OrdersCustomBatchRequestEntryInStoreRefundLineItem;

  @SpeakeasyMetadata({ data: "json, name=merchantId" })
  merchantId?: string;

  @SpeakeasyMetadata({ data: "json, name=merchantOrderId" })
  merchantOrderId?: string;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: string;

  @SpeakeasyMetadata({ data: "json, name=operationId" })
  operationId?: string;

  @SpeakeasyMetadata({ data: "json, name=orderId" })
  orderId?: string;

  @SpeakeasyMetadata({ data: "json, name=refund" })
  refund?: OrdersCustomBatchRequestEntryRefund;

  @SpeakeasyMetadata({ data: "json, name=rejectReturnLineItem" })
  rejectReturnLineItem?: OrdersCustomBatchRequestEntryRejectReturnLineItem;

  @SpeakeasyMetadata({ data: "json, name=returnLineItem" })
  returnLineItem?: OrdersCustomBatchRequestEntryReturnLineItem;

  @SpeakeasyMetadata({ data: "json, name=returnRefundLineItem" })
  returnRefundLineItem?: OrdersCustomBatchRequestEntryReturnRefundLineItem;

  @SpeakeasyMetadata({ data: "json, name=setLineItemMetadata" })
  setLineItemMetadata?: OrdersCustomBatchRequestEntrySetLineItemMetadata;

  @SpeakeasyMetadata({ data: "json, name=shipLineItems" })
  shipLineItems?: OrdersCustomBatchRequestEntryShipLineItems;

  @SpeakeasyMetadata({ data: "json, name=updateLineItemShippingDetails" })
  updateLineItemShippingDetails?: OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails;

  @SpeakeasyMetadata({ data: "json, name=updateShipment" })
  updateShipment?: OrdersCustomBatchRequestEntryUpdateShipment;
}
