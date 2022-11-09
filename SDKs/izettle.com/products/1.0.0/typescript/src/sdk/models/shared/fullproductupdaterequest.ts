import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CategoryDto } from "./categorydto";
import { MetadataDto } from "./metadatadto";
import { OnlineProperties } from "./onlineproperties";
import { PresentationDto } from "./presentationdto";
import { VariantOptionDefinitions } from "./variantoptiondefinitions";
import { VariantDto } from "./variantdto";


export class FullProductUpdateRequest extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=online" })
  online?: OnlineProperties;

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

  @Metadata({ data: "json, name=variantOptionDefinitions" })
  variantOptionDefinitions?: VariantOptionDefinitions;

  @Metadata({ data: "json, name=variants", elemType: shared.VariantDto })
  variants?: VariantDto[];

  @Metadata({ data: "json, name=vatPercentage" })
  vatPercentage?: number;
}
