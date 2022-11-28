import { SpeakeasyBase } from "../../../internal/utils";
import { CategoryDto } from "./categorydto";
import { MetadataDto } from "./metadatadto";
import { OnlineProperties } from "./onlineproperties";
import { PresentationDto } from "./presentationdto";
import { VariantOptionDefinitions } from "./variantoptiondefinitions";
import { VariantDto } from "./variantdto";
export declare class FullProductUpdateRequest extends SpeakeasyBase {
    categories?: string[];
    category?: CategoryDto;
    description?: string;
    externalReference?: string;
    imageLookupKeys?: string[];
    metadata?: MetadataDto;
    name: string;
    online?: OnlineProperties;
    presentation?: PresentationDto;
    taxCode?: string;
    taxExempt?: boolean;
    taxRates?: string[];
    unitName?: string;
    uuid: string;
    variantOptionDefinitions?: VariantOptionDefinitions;
    variants?: VariantDto[];
    vatPercentage?: number;
}
