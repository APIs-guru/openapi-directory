import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LastModifiedInfo } from "./lastmodifiedinfo";

export enum OrderDocumentTypeEnum {
    PlanningOrderTypeInsertionOrder = "PLANNING_ORDER_TYPE_INSERTION_ORDER"
,    PlanningOrderTypeChangeOrder = "PLANNING_ORDER_TYPE_CHANGE_ORDER"
}


// OrderDocument
/** 
 * Contains properties of a Planning order document.
**/
export class OrderDocument extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @Metadata({ data: "json, name=amendedOrderDocumentId" })
  amendedOrderDocumentId?: string;

  @Metadata({ data: "json, name=approvedByUserProfileIds" })
  approvedByUserProfileIds?: string[];

  @Metadata({ data: "json, name=cancelled" })
  cancelled?: boolean;

  @Metadata({ data: "json, name=createdInfo" })
  createdInfo?: LastModifiedInfo;

  @Metadata({ data: "json, name=effectiveDate" })
  effectiveDate?: Date;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=lastSentRecipients" })
  lastSentRecipients?: string[];

  @Metadata({ data: "json, name=lastSentTime" })
  lastSentTime?: Date;

  @Metadata({ data: "json, name=orderId" })
  orderId?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=signed" })
  signed?: boolean;

  @Metadata({ data: "json, name=subaccountId" })
  subaccountId?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=type" })
  type?: OrderDocumentTypeEnum;
}
