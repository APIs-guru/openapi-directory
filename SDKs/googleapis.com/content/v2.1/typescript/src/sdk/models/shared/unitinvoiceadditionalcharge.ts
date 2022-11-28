import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";



export class UnitInvoiceAdditionalCharge extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalChargeAmount" })
  additionalChargeAmount?: Amount;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
