import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderContact } from "./ordercontact";
import { LastModifiedInfo } from "./lastmodifiedinfo";



// Order
/** 
 * Describes properties of a Planning order.
**/
export class Order extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @SpeakeasyMetadata({ data: "json, name=approverUserProfileIds" })
  approverUserProfileIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=buyerInvoiceId" })
  buyerInvoiceId?: string;

  @SpeakeasyMetadata({ data: "json, name=buyerOrganizationName" })
  buyerOrganizationName?: string;

  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: string;

  @SpeakeasyMetadata({ data: "json, name=contacts", elemType: OrderContact })
  contacts?: OrderContact[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedInfo" })
  lastModifiedInfo?: LastModifiedInfo;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=planningTermId" })
  planningTermId?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=sellerOrderId" })
  sellerOrderId?: string;

  @SpeakeasyMetadata({ data: "json, name=sellerOrganizationName" })
  sellerOrganizationName?: string;

  @SpeakeasyMetadata({ data: "json, name=siteId" })
  siteId?: string[];

  @SpeakeasyMetadata({ data: "json, name=siteNames" })
  siteNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=subaccountId" })
  subaccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=termsAndConditions" })
  termsAndConditions?: string;
}
