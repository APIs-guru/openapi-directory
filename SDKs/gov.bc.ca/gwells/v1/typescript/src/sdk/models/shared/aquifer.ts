import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Aquifer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aquifer_id" })
  aquiferId?: number;

  @SpeakeasyMetadata({ data: "json, name=aquifer_name" })
  aquiferName?: string;

  @SpeakeasyMetadata({ data: "json, name=area" })
  area?: string;

  @SpeakeasyMetadata({ data: "json, name=demand" })
  demand?: string;

  @SpeakeasyMetadata({ data: "json, name=demand_description" })
  demandDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=known_water_use" })
  knownWaterUse?: string;

  @SpeakeasyMetadata({ data: "json, name=known_water_use_description" })
  knownWaterUseDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=litho_stratographic_unit" })
  lithoStratographicUnit?: string;

  @SpeakeasyMetadata({ data: "json, name=location_description" })
  locationDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=mapping_year" })
  mappingYear?: number;

  @SpeakeasyMetadata({ data: "json, name=material" })
  material?: string;

  @SpeakeasyMetadata({ data: "json, name=material_description" })
  materialDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=productivity" })
  productivity?: string;

  @SpeakeasyMetadata({ data: "json, name=productivity_description" })
  productivityDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=quality_concern" })
  qualityConcern?: string;

  @SpeakeasyMetadata({ data: "json, name=quality_concern_description" })
  qualityConcernDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=subtype" })
  subtype?: string;

  @SpeakeasyMetadata({ data: "json, name=subtype_description" })
  subtypeDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=vulnerability" })
  vulnerability?: string;

  @SpeakeasyMetadata({ data: "json, name=vulnerability_description" })
  vulnerabilityDescription?: string;
}
