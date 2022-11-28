import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WellList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alteration_end_date" })
  alterationEndDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=alternative_specs_submitted" })
  alternativeSpecsSubmitted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=analytic_solution_type" })
  analyticSolutionType?: string;

  @SpeakeasyMetadata({ data: "json, name=aquifer" })
  aquifer?: number;

  @SpeakeasyMetadata({ data: "json, name=aquifer_vulnerability_index" })
  aquiferVulnerabilityIndex?: string;

  @SpeakeasyMetadata({ data: "json, name=artesian_flow" })
  artesianFlow?: string;

  @SpeakeasyMetadata({ data: "json, name=artesian_pressure" })
  artesianPressure?: string;

  @SpeakeasyMetadata({ data: "json, name=backfill_depth" })
  backfillDepth?: string;

  @SpeakeasyMetadata({ data: "json, name=backfill_material" })
  backfillMaterial?: string;

  @SpeakeasyMetadata({ data: "json, name=backfill_type" })
  backfillType?: string;

  @SpeakeasyMetadata({ data: "json, name=bcgs_id" })
  bcgsId?: number;

  @SpeakeasyMetadata({ data: "json, name=bedrock_depth" })
  bedrockDepth?: string;

  @SpeakeasyMetadata({ data: "json, name=boundary_effect" })
  boundaryEffect?: string;

  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: string;

  @SpeakeasyMetadata({ data: "json, name=construction_end_date" })
  constructionEndDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=construction_start_date" })
  constructionStartDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=coordinate_acquisition_code" })
  coordinateAcquisitionCode?: string;

  @SpeakeasyMetadata({ data: "json, name=decommission_details" })
  decommissionDetails?: string;

  @SpeakeasyMetadata({ data: "json, name=decommission_end_date" })
  decommissionEndDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=decommission_method" })
  decommissionMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=decommission_reason" })
  decommissionReason?: string;

  @SpeakeasyMetadata({ data: "json, name=decommission_start_date" })
  decommissionStartDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=development_hours" })
  developmentHours?: string;

  @SpeakeasyMetadata({ data: "json, name=development_method" })
  developmentMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=development_notes" })
  developmentNotes?: string;

  @SpeakeasyMetadata({ data: "json, name=diameter" })
  diameter?: string;

  @SpeakeasyMetadata({ data: "json, name=drawdown" })
  drawdown?: string;

  @SpeakeasyMetadata({ data: "json, name=drilling_company" })
  drillingCompany?: string;

  @SpeakeasyMetadata({ data: "json, name=drilling_method" })
  drillingMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=ems" })
  ems?: string;

  @SpeakeasyMetadata({ data: "json, name=filter_pack_from" })
  filterPackFrom?: string;

  @SpeakeasyMetadata({ data: "json, name=filter_pack_material" })
  filterPackMaterial?: string;

  @SpeakeasyMetadata({ data: "json, name=filter_pack_material_size" })
  filterPackMaterialSize?: string;

  @SpeakeasyMetadata({ data: "json, name=filter_pack_thickness" })
  filterPackThickness?: string;

  @SpeakeasyMetadata({ data: "json, name=filter_pack_to" })
  filterPackTo?: string;

  @SpeakeasyMetadata({ data: "json, name=final_casing_stick_up" })
  finalCasingStickUp?: string;

  @SpeakeasyMetadata({ data: "json, name=finished_well_depth" })
  finishedWellDepth?: string;

  @SpeakeasyMetadata({ data: "json, name=ground_elevation" })
  groundElevation?: string;

  @SpeakeasyMetadata({ data: "json, name=ground_elevation_method" })
  groundElevationMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=hydraulic_conductivity" })
  hydraulicConductivity?: string;

  @SpeakeasyMetadata({ data: "json, name=hydro_fracturing_performed" })
  hydroFracturingPerformed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hydro_fracturing_yield_increase" })
  hydroFracturingYieldIncrease?: string;

  @SpeakeasyMetadata({ data: "json, name=id_plate_attached_by" })
  idPlateAttachedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=identification_plate_number" })
  identificationPlateNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=intended_water_use" })
  intendedWaterUse?: string;

  @SpeakeasyMetadata({ data: "json, name=land_district" })
  landDistrict?: string;

  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude?: string;

  @SpeakeasyMetadata({ data: "json, name=legal_block" })
  legalBlock?: string;

  @SpeakeasyMetadata({ data: "json, name=legal_district_lot" })
  legalDistrictLot?: string;

  @SpeakeasyMetadata({ data: "json, name=legal_lot" })
  legalLot?: string;

  @SpeakeasyMetadata({ data: "json, name=legal_pid" })
  legalPid?: number;

  @SpeakeasyMetadata({ data: "json, name=legal_plan" })
  legalPlan?: string;

  @SpeakeasyMetadata({ data: "json, name=legal_range" })
  legalRange?: string;

  @SpeakeasyMetadata({ data: "json, name=legal_section" })
  legalSection?: string;

  @SpeakeasyMetadata({ data: "json, name=legal_township" })
  legalTownship?: string;

  @SpeakeasyMetadata({ data: "json, name=licenced_status" })
  licencedStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=liner_diameter" })
  linerDiameter?: string;

  @SpeakeasyMetadata({ data: "json, name=liner_from" })
  linerFrom?: string;

  @SpeakeasyMetadata({ data: "json, name=liner_material" })
  linerMaterial?: string;

  @SpeakeasyMetadata({ data: "json, name=liner_thickness" })
  linerThickness?: string;

  @SpeakeasyMetadata({ data: "json, name=liner_to" })
  linerTo?: string;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude?: string;

  @SpeakeasyMetadata({ data: "json, name=observation_well_number" })
  observationWellNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=observation_well_status" })
  observationWellStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=other_drilling_method" })
  otherDrillingMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=other_screen_bottom" })
  otherScreenBottom?: string;

  @SpeakeasyMetadata({ data: "json, name=other_screen_material" })
  otherScreenMaterial?: string;

  @SpeakeasyMetadata({ data: "json, name=owner_full_name" })
  ownerFullName: string;

  @SpeakeasyMetadata({ data: "json, name=recommended_pump_depth" })
  recommendedPumpDepth?: string;

  @SpeakeasyMetadata({ data: "json, name=recommended_pump_rate" })
  recommendedPumpRate?: string;

  @SpeakeasyMetadata({ data: "json, name=screen_bottom" })
  screenBottom?: string;

  @SpeakeasyMetadata({ data: "json, name=screen_information" })
  screenInformation?: string;

  @SpeakeasyMetadata({ data: "json, name=screen_intake_method" })
  screenIntakeMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=screen_material" })
  screenMaterial?: string;

  @SpeakeasyMetadata({ data: "json, name=screen_opening" })
  screenOpening?: string;

  @SpeakeasyMetadata({ data: "json, name=screen_type" })
  screenType?: string;

  @SpeakeasyMetadata({ data: "json, name=sealant_material" })
  sealantMaterial?: string;

  @SpeakeasyMetadata({ data: "json, name=specific_storage" })
  specificStorage?: string;

  @SpeakeasyMetadata({ data: "json, name=specific_yield" })
  specificYield?: string;

  @SpeakeasyMetadata({ data: "json, name=static_level_before_test" })
  staticLevelBeforeTest?: string;

  @SpeakeasyMetadata({ data: "json, name=static_water_level" })
  staticWaterLevel?: string;

  @SpeakeasyMetadata({ data: "json, name=storativity" })
  storativity?: string;

  @SpeakeasyMetadata({ data: "json, name=street_address" })
  streetAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=surface_seal_depth" })
  surfaceSealDepth?: string;

  @SpeakeasyMetadata({ data: "json, name=surface_seal_length" })
  surfaceSealLength?: string;

  @SpeakeasyMetadata({ data: "json, name=surface_seal_material" })
  surfaceSealMaterial?: string;

  @SpeakeasyMetadata({ data: "json, name=surface_seal_method" })
  surfaceSealMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=surface_seal_thickness" })
  surfaceSealThickness?: string;

  @SpeakeasyMetadata({ data: "json, name=testing_duration" })
  testingDuration?: number;

  @SpeakeasyMetadata({ data: "json, name=testing_method" })
  testingMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=total_depth_drilled" })
  totalDepthDrilled?: string;

  @SpeakeasyMetadata({ data: "json, name=transmissivity" })
  transmissivity?: string;

  @SpeakeasyMetadata({ data: "json, name=utm_easting" })
  utmEasting?: number;

  @SpeakeasyMetadata({ data: "json, name=utm_northing" })
  utmNorthing?: number;

  @SpeakeasyMetadata({ data: "json, name=utm_zone_code" })
  utmZoneCode?: string;

  @SpeakeasyMetadata({ data: "json, name=water_quality_characteristics" })
  waterQualityCharacteristics?: string[];

  @SpeakeasyMetadata({ data: "json, name=water_quality_colour" })
  waterQualityColour?: string;

  @SpeakeasyMetadata({ data: "json, name=water_quality_odour" })
  waterQualityOdour?: string;

  @SpeakeasyMetadata({ data: "json, name=water_supply_system_name" })
  waterSupplySystemName?: string;

  @SpeakeasyMetadata({ data: "json, name=water_supply_system_well_name" })
  waterSupplySystemWellName?: string;

  @SpeakeasyMetadata({ data: "json, name=well_cap_type" })
  wellCapType?: string;

  @SpeakeasyMetadata({ data: "json, name=well_class" })
  wellClass?: string;

  @SpeakeasyMetadata({ data: "json, name=well_disinfected" })
  wellDisinfected?: boolean;

  @SpeakeasyMetadata({ data: "json, name=well_guid" })
  wellGuid?: string;

  @SpeakeasyMetadata({ data: "json, name=well_identification_plate_attached" })
  wellIdentificationPlateAttached?: string;

  @SpeakeasyMetadata({ data: "json, name=well_location_description" })
  wellLocationDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=well_orientation" })
  wellOrientation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=well_status" })
  wellStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=well_subclass" })
  wellSubclass?: string;

  @SpeakeasyMetadata({ data: "json, name=well_tag_number" })
  wellTagNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=well_yield" })
  wellYield?: string;

  @SpeakeasyMetadata({ data: "json, name=well_yield_unit" })
  wellYieldUnit?: string;

  @SpeakeasyMetadata({ data: "json, name=yield_estimation_duration" })
  yieldEstimationDuration?: string;

  @SpeakeasyMetadata({ data: "json, name=yield_estimation_method" })
  yieldEstimationMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=yield_estimation_rate" })
  yieldEstimationRate?: string;
}
