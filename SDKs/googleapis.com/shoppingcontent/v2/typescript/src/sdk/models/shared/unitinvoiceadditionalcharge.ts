import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Amount } from "./amount";
import { Promotion } from "./promotion";


export class UnitInvoiceAdditionalCharge extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalChargeAmount" })
  additionalChargeAmount?: Amount;

  @Metadata({ data: "json, name=additionalChargePromotions", elemType: shared.Promotion })
  additionalChargePromotions?: Promotion[];

  @Metadata({ data: "json, name=type" })
  type?: string;
}
