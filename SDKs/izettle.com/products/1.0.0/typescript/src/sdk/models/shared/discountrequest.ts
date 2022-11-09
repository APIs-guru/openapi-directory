import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Price } from "./price";


export class DiscountRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: Price;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=externalReference" })
  externalReference?: string;

  @Metadata({ data: "json, name=imageLookupKeys" })
  imageLookupKeys?: string[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=percentage" })
  percentage?: number;

  @Metadata({ data: "json, name=uuid" })
  uuid: string;
}
