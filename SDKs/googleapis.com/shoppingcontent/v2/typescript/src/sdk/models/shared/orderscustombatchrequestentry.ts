import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=batchId" })
  batchId?: number;

  @Metadata({ data: "json, name=cancel" })
  cancel?: OrdersCustomBatchRequestEntryCancel;

  @Metadata({ data: "json, name=cancelLineItem" })
  cancelLineItem?: OrdersCustomBatchRequestEntryCancelLineItem;

  @Metadata({ data: "json, name=inStoreRefundLineItem" })
  inStoreRefundLineItem?: OrdersCustomBatchRequestEntryInStoreRefundLineItem;

  @Metadata({ data: "json, name=merchantId" })
  merchantId?: string;

  @Metadata({ data: "json, name=merchantOrderId" })
  merchantOrderId?: string;

  @Metadata({ data: "json, name=method" })
  method?: string;

  @Metadata({ data: "json, name=operationId" })
  operationId?: string;

  @Metadata({ data: "json, name=orderId" })
  orderId?: string;

  @Metadata({ data: "json, name=refund" })
  refund?: OrdersCustomBatchRequestEntryRefund;

  @Metadata({ data: "json, name=rejectReturnLineItem" })
  rejectReturnLineItem?: OrdersCustomBatchRequestEntryRejectReturnLineItem;

  @Metadata({ data: "json, name=returnLineItem" })
  returnLineItem?: OrdersCustomBatchRequestEntryReturnLineItem;

  @Metadata({ data: "json, name=returnRefundLineItem" })
  returnRefundLineItem?: OrdersCustomBatchRequestEntryReturnRefundLineItem;

  @Metadata({ data: "json, name=setLineItemMetadata" })
  setLineItemMetadata?: OrdersCustomBatchRequestEntrySetLineItemMetadata;

  @Metadata({ data: "json, name=shipLineItems" })
  shipLineItems?: OrdersCustomBatchRequestEntryShipLineItems;

  @Metadata({ data: "json, name=updateLineItemShippingDetails" })
  updateLineItemShippingDetails?: OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails;

  @Metadata({ data: "json, name=updateShipment" })
  updateShipment?: OrdersCustomBatchRequestEntryUpdateShipment;
}
