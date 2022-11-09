import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Price } from "./price";
import { VariantOption } from "./variantoption";
import { PresentationDto } from "./presentationdto";
import { Price } from "./price";


export class VariantDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=barcode" })
  barcode?: string;

  @Metadata({ data: "json, name=costPrice" })
  costPrice?: Price;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=options", elemType: shared.VariantOption })
  options?: VariantOption[];

  @Metadata({ data: "json, name=presentation" })
  presentation?: PresentationDto;

  @Metadata({ data: "json, name=price" })
  price?: Price;

  @Metadata({ data: "json, name=sku" })
  sku?: string;

  @Metadata({ data: "json, name=uuid" })
  uuid: string;

  @Metadata({ data: "json, name=vatPercentage" })
  vatPercentage?: number;
}
