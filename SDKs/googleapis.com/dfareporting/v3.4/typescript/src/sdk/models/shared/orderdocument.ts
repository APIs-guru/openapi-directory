import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LastModifiedInfo } from "./lastmodifiedinfo";


export enum OrderDocumentTypeEnum {
    PlanningOrderTypeInsertionOrder = "PLANNING_ORDER_TYPE_INSERTION_ORDER",
    PlanningOrderTypeChangeOrder = "PLANNING_ORDER_TYPE_CHANGE_ORDER"
}


// OrderDocument
/** 
 * Contains properties of a Planning order document.
**/
export class OrderDocument extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @SpeakeasyMetadata({ data: "json, name=amendedOrderDocumentId" })
  amendedOrderDocumentId?: string;

  @SpeakeasyMetadata({ data: "json, name=approvedByUserProfileIds" })
  approvedByUserProfileIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=cancelled" })
  cancelled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=createdInfo" })
  createdInfo?: LastModifiedInfo;

  @SpeakeasyMetadata({ data: "json, name=effectiveDate" })
  effectiveDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=lastSentRecipients" })
  lastSentRecipients?: string[];

  @SpeakeasyMetadata({ data: "json, name=lastSentTime" })
  lastSentTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=orderId" })
  orderId?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=signed" })
  signed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=subaccountId" })
  subaccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: OrderDocumentTypeEnum;
}
