import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OrderContact } from "./ordercontact";
import { LastModifiedInfo } from "./lastmodifiedinfo";


// Order
/** 
 * Describes properties of a Planning order.
**/
export class Order extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @Metadata({ data: "json, name=approverUserProfileIds" })
  approverUserProfileIds?: string[];

  @Metadata({ data: "json, name=buyerInvoiceId" })
  buyerInvoiceId?: string;

  @Metadata({ data: "json, name=buyerOrganizationName" })
  buyerOrganizationName?: string;

  @Metadata({ data: "json, name=comments" })
  comments?: string;

  @Metadata({ data: "json, name=contacts", elemType: shared.OrderContact })
  contacts?: OrderContact[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=lastModifiedInfo" })
  lastModifiedInfo?: LastModifiedInfo;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=planningTermId" })
  planningTermId?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=sellerOrderId" })
  sellerOrderId?: string;

  @Metadata({ data: "json, name=sellerOrganizationName" })
  sellerOrganizationName?: string;

  @Metadata({ data: "json, name=siteId" })
  siteId?: string[];

  @Metadata({ data: "json, name=siteNames" })
  siteNames?: string[];

  @Metadata({ data: "json, name=subaccountId" })
  subaccountId?: string;

  @Metadata({ data: "json, name=termsAndConditions" })
  termsAndConditions?: string;
}
