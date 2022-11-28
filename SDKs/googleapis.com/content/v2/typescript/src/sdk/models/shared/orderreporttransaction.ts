import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
import { Amount } from "./amount";
import { ProductAmount } from "./productamount";



export class OrderReportTransaction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disbursementAmount" })
  disbursementAmount?: Price;

  @SpeakeasyMetadata({ data: "json, name=disbursementCreationDate" })
  disbursementCreationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=disbursementDate" })
  disbursementDate?: string;

  @SpeakeasyMetadata({ data: "json, name=disbursementId" })
  disbursementId?: string;

  @SpeakeasyMetadata({ data: "json, name=merchantId" })
  merchantId?: string;

  @SpeakeasyMetadata({ data: "json, name=merchantOrderId" })
  merchantOrderId?: string;

  @SpeakeasyMetadata({ data: "json, name=orderId" })
  orderId?: string;

  @SpeakeasyMetadata({ data: "json, name=productAmount" })
  productAmount?: Amount;

  @SpeakeasyMetadata({ data: "json, name=productAmountWithRemittedTax" })
  productAmountWithRemittedTax?: ProductAmount;

  @SpeakeasyMetadata({ data: "json, name=transactionDate" })
  transactionDate?: string;
}
