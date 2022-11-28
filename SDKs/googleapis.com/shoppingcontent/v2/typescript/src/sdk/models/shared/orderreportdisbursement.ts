import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";



// OrderReportDisbursement
/** 
 * Order disbursement. All methods require the payment analyst role.
**/
export class OrderReportDisbursement extends SpeakeasyBase {
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
}
