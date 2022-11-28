import { SpeakeasyBase } from "../../../internal/utils";
import { CategoryDto } from "./categorydto";
import { MetadataDto } from "./metadatadto";
import { PresentationDto } from "./presentationdto";
export declare class ProductUpdateRequest extends SpeakeasyBase {
    categories?: string[];
    category?: CategoryDto;
    description?: string;
    externalReference?: string;
    imageLookupKeys?: string[];
    metadata?: MetadataDto;
    name: string;
    presentation?: PresentationDto;
    taxCode?: string;
    taxExempt?: boolean;
    taxRates?: string[];
    unitName?: string;
    uuid: string;
    variantUuids: string[];
    vatPercentage?: number;
}
