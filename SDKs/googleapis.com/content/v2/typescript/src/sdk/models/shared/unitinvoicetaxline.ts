import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";



export class UnitInvoiceTaxLine extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=taxAmount" })
  taxAmount?: Price;

  @SpeakeasyMetadata({ data: "json, name=taxName" })
  taxName?: string;

  @SpeakeasyMetadata({ data: "json, name=taxType" })
  taxType?: string;
}
