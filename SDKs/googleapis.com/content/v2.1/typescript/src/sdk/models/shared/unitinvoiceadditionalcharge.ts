import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Amount } from "./amount";


export class UnitInvoiceAdditionalCharge extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalChargeAmount" })
  additionalChargeAmount?: Amount;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
