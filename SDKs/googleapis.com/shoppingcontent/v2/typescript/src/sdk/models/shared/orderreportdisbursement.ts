import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Price } from "./price";


// OrderReportDisbursement
/** 
 * Order disbursement. All methods require the payment analyst role.
**/
export class OrderReportDisbursement extends SpeakeasyBase {
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
}
