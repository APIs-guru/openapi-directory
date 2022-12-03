import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CoverageValueWriteV1 } from "./coveragevaluewritev1";
import { FileMiniV1 } from "./fileminiv1";
import { QuotePriceV1 } from "./quotepricev1";
import { StatusReason } from "./statusreason";


export enum QuoteV1BindStatusEnum {
    Ready = "ready",
    Unavailable = "unavailable",
    Requested = "requested"
}

export enum QuoteV1StatusEnum {
    Pending = "pending",
    Referral = "referral",
    Referred = "referred",
    Declined = "declined",
    Active = "active",
    Expired = "expired",
    Unresponsive = "unresponsive"
}


// QuoteV1
/** 
 * A quote declares an institution's willingness to sell an insurance policy to a customer. Active quotes contain details about a policy the customer can purchase and related prices.
 * 
 * Read more about [quotes](https://www.heraldapi.com/docs/quotes).
**/
export class QuoteV1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bind_status" })
  bindStatus: QuoteV1BindStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=coverage_values", elemType: CoverageValueWriteV1 })
  coverageValues?: CoverageValueWriteV1[];

  @SpeakeasyMetadata({ data: "json, name=files", elemType: FileMiniV1 })
  files?: FileMiniV1[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=naic_code" })
  naicCode?: string;

  @SpeakeasyMetadata({ data: "json, name=portal_link" })
  portalLink?: string;

  @SpeakeasyMetadata({ data: "json, name=prices" })
  prices?: QuotePriceV1;

  @SpeakeasyMetadata({ data: "json, name=product_id" })
  productId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: QuoteV1StatusEnum;

  @SpeakeasyMetadata({ data: "json, name=status_reasons" })
  statusReasons?: StatusReason;

  @SpeakeasyMetadata({ data: "json, name=submission_id" })
  submissionId: string;
}
