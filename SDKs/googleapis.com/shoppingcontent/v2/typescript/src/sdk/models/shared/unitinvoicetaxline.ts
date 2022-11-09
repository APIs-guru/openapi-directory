import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Price } from "./price";


export class UnitInvoiceTaxLine extends SpeakeasyBase {
  @Metadata({ data: "json, name=taxAmount" })
  taxAmount?: Price;

  @Metadata({ data: "json, name=taxName" })
  taxName?: string;

  @Metadata({ data: "json, name=taxType" })
  taxType?: string;
}
