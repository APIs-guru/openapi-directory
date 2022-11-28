import { SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
import { VariantOption } from "./variantoption";
import { PresentationDto } from "./presentationdto";
export declare class VariantDto extends SpeakeasyBase {
    barcode?: string;
    costPrice?: Price;
    description?: string;
    name?: string;
    options?: VariantOption[];
    presentation?: PresentationDto;
    price?: Price;
    sku?: string;
    uuid: string;
    vatPercentage?: number;
}
