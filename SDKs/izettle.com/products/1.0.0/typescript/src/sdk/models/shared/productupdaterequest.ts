import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CategoryDto } from "./categorydto";
import { MetadataDto } from "./metadatadto";
import { PresentationDto } from "./presentationdto";


export class ProductUpdateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=categories" })
  categories?: string[];

  @Metadata({ data: "json, name=category" })
  category?: CategoryDto;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=externalReference" })
  externalReference?: string;

  @Metadata({ data: "json, name=imageLookupKeys" })
  imageLookupKeys?: string[];

  @Metadata({ data: "json, name=metadata" })
  metadata?: MetadataDto;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=presentation" })
  presentation?: PresentationDto;

  @Metadata({ data: "json, name=taxCode" })
  taxCode?: string;

  @Metadata({ data: "json, name=taxExempt" })
  taxExempt?: boolean;

  @Metadata({ data: "json, name=taxRates" })
  taxRates?: string[];

  @Metadata({ data: "json, name=unitName" })
  unitName?: string;

  @Metadata({ data: "json, name=uuid" })
  uuid: string;

  @Metadata({ data: "json, name=variantUuids" })
  variantUuids: string[];

  @Metadata({ data: "json, name=vatPercentage" })
  vatPercentage?: number;
}
