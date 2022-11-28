import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
import { Promotion } from "./promotion";



export class UnitInvoiceAdditionalCharge extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalChargeAmount" })
  additionalChargeAmount?: Amount;

  @SpeakeasyMetadata({ data: "json, name=additionalChargePromotions", elemType: Promotion })
  additionalChargePromotions?: Promotion[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
