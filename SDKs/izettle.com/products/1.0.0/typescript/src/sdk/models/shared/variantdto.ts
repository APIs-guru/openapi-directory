import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
import { VariantOption } from "./variantoption";
import { PresentationDto } from "./presentationdto";



export class VariantDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=barcode" })
  barcode?: string;

  @SpeakeasyMetadata({ data: "json, name=costPrice" })
  costPrice?: Price;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=options", elemType: VariantOption })
  options?: VariantOption[];

  @SpeakeasyMetadata({ data: "json, name=presentation" })
  presentation?: PresentationDto;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: Price;

  @SpeakeasyMetadata({ data: "json, name=sku" })
  sku?: string;

  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid: string;

  @SpeakeasyMetadata({ data: "json, name=vatPercentage" })
  vatPercentage?: number;
}
