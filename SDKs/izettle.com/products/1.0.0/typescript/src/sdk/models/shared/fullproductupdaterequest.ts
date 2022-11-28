import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CategoryDto } from "./categorydto";
import { MetadataDto } from "./metadatadto";
import { OnlineProperties } from "./onlineproperties";
import { PresentationDto } from "./presentationdto";
import { VariantOptionDefinitions } from "./variantoptiondefinitions";
import { VariantDto } from "./variantdto";



export class FullProductUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categories" })
  categories?: string[];

  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: CategoryDto;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=externalReference" })
  externalReference?: string;

  @SpeakeasyMetadata({ data: "json, name=imageLookupKeys" })
  imageLookupKeys?: string[];

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: MetadataDto;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=online" })
  online?: OnlineProperties;

  @SpeakeasyMetadata({ data: "json, name=presentation" })
  presentation?: PresentationDto;

  @SpeakeasyMetadata({ data: "json, name=taxCode" })
  taxCode?: string;

  @SpeakeasyMetadata({ data: "json, name=taxExempt" })
  taxExempt?: boolean;

  @SpeakeasyMetadata({ data: "json, name=taxRates" })
  taxRates?: string[];

  @SpeakeasyMetadata({ data: "json, name=unitName" })
  unitName?: string;

  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid: string;

  @SpeakeasyMetadata({ data: "json, name=variantOptionDefinitions" })
  variantOptionDefinitions?: VariantOptionDefinitions;

  @SpeakeasyMetadata({ data: "json, name=variants", elemType: VariantDto })
  variants?: VariantDto[];

  @SpeakeasyMetadata({ data: "json, name=vatPercentage" })
  vatPercentage?: number;
}
