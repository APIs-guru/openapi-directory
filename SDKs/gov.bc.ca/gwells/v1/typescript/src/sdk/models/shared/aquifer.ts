import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Aquifer extends SpeakeasyBase {
  @Metadata({ data: "json, name=aquifer_id" })
  aquiferId?: number;

  @Metadata({ data: "json, name=aquifer_name" })
  aquiferName?: string;

  @Metadata({ data: "json, name=area" })
  area?: string;

  @Metadata({ data: "json, name=demand" })
  demand?: string;

  @Metadata({ data: "json, name=demand_description" })
  demandDescription?: string;

  @Metadata({ data: "json, name=known_water_use" })
  knownWaterUse?: string;

  @Metadata({ data: "json, name=known_water_use_description" })
  knownWaterUseDescription?: string;

  @Metadata({ data: "json, name=litho_stratographic_unit" })
  lithoStratographicUnit?: string;

  @Metadata({ data: "json, name=location_description" })
  locationDescription?: string;

  @Metadata({ data: "json, name=mapping_year" })
  mappingYear?: number;

  @Metadata({ data: "json, name=material" })
  material?: string;

  @Metadata({ data: "json, name=material_description" })
  materialDescription?: string;

  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=productivity" })
  productivity?: string;

  @Metadata({ data: "json, name=productivity_description" })
  productivityDescription?: string;

  @Metadata({ data: "json, name=quality_concern" })
  qualityConcern?: string;

  @Metadata({ data: "json, name=quality_concern_description" })
  qualityConcernDescription?: string;

  @Metadata({ data: "json, name=subtype" })
  subtype?: string;

  @Metadata({ data: "json, name=subtype_description" })
  subtypeDescription?: string;

  @Metadata({ data: "json, name=vulnerability" })
  vulnerability?: string;

  @Metadata({ data: "json, name=vulnerability_description" })
  vulnerabilityDescription?: string;
}
