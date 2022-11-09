import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Price } from "./price";
import { ProductAmount } from "./productamount";


export class OrderReportTransaction extends SpeakeasyBase {
  @Metadata({ data: "json, name=disbursementAmount" })
  disbursementAmount?: Price;

  @Metadata({ data: "json, name=disbursementCreationDate" })
  disbursementCreationDate?: string;

  @Metadata({ data: "json, name=disbursementDate" })
  disbursementDate?: string;

  @Metadata({ data: "json, name=disbursementId" })
  disbursementId?: string;

  @Metadata({ data: "json, name=merchantId" })
  merchantId?: string;

  @Metadata({ data: "json, name=merchantOrderId" })
  merchantOrderId?: string;

  @Metadata({ data: "json, name=orderId" })
  orderId?: string;

  @Metadata({ data: "json, name=productAmount" })
  productAmount?: ProductAmount;

  @Metadata({ data: "json, name=transactionDate" })
  transactionDate?: string;
}
