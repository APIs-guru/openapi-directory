import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class WellList extends SpeakeasyBase {
  @Metadata({ data: "json, name=alteration_end_date" })
  alterationEndDate?: Date;

  @Metadata({ data: "json, name=alternative_specs_submitted" })
  alternativeSpecsSubmitted?: boolean;

  @Metadata({ data: "json, name=analytic_solution_type" })
  analyticSolutionType?: string;

  @Metadata({ data: "json, name=aquifer" })
  aquifer?: number;

  @Metadata({ data: "json, name=aquifer_vulnerability_index" })
  aquiferVulnerabilityIndex?: string;

  @Metadata({ data: "json, name=artesian_flow" })
  artesianFlow?: string;

  @Metadata({ data: "json, name=artesian_pressure" })
  artesianPressure?: string;

  @Metadata({ data: "json, name=backfill_depth" })
  backfillDepth?: string;

  @Metadata({ data: "json, name=backfill_material" })
  backfillMaterial?: string;

  @Metadata({ data: "json, name=backfill_type" })
  backfillType?: string;

  @Metadata({ data: "json, name=bcgs_id" })
  bcgsId?: number;

  @Metadata({ data: "json, name=bedrock_depth" })
  bedrockDepth?: string;

  @Metadata({ data: "json, name=boundary_effect" })
  boundaryEffect?: string;

  @Metadata({ data: "json, name=city" })
  city?: string;

  @Metadata({ data: "json, name=comments" })
  comments?: string;

  @Metadata({ data: "json, name=construction_end_date" })
  constructionEndDate?: Date;

  @Metadata({ data: "json, name=construction_start_date" })
  constructionStartDate?: Date;

  @Metadata({ data: "json, name=coordinate_acquisition_code" })
  coordinateAcquisitionCode?: string;

  @Metadata({ data: "json, name=decommission_details" })
  decommissionDetails?: string;

  @Metadata({ data: "json, name=decommission_end_date" })
  decommissionEndDate?: Date;

  @Metadata({ data: "json, name=decommission_method" })
  decommissionMethod?: string;

  @Metadata({ data: "json, name=decommission_reason" })
  decommissionReason?: string;

  @Metadata({ data: "json, name=decommission_start_date" })
  decommissionStartDate?: Date;

  @Metadata({ data: "json, name=development_hours" })
  developmentHours?: string;

  @Metadata({ data: "json, name=development_method" })
  developmentMethod?: string;

  @Metadata({ data: "json, name=development_notes" })
  developmentNotes?: string;

  @Metadata({ data: "json, name=diameter" })
  diameter?: string;

  @Metadata({ data: "json, name=drawdown" })
  drawdown?: string;

  @Metadata({ data: "json, name=drilling_company" })
  drillingCompany?: string;

  @Metadata({ data: "json, name=drilling_method" })
  drillingMethod?: string;

  @Metadata({ data: "json, name=ems" })
  ems?: string;

  @Metadata({ data: "json, name=filter_pack_from" })
  filterPackFrom?: string;

  @Metadata({ data: "json, name=filter_pack_material" })
  filterPackMaterial?: string;

  @Metadata({ data: "json, name=filter_pack_material_size" })
  filterPackMaterialSize?: string;

  @Metadata({ data: "json, name=filter_pack_thickness" })
  filterPackThickness?: string;

  @Metadata({ data: "json, name=filter_pack_to" })
  filterPackTo?: string;

  @Metadata({ data: "json, name=final_casing_stick_up" })
  finalCasingStickUp?: string;

  @Metadata({ data: "json, name=finished_well_depth" })
  finishedWellDepth?: string;

  @Metadata({ data: "json, name=ground_elevation" })
  groundElevation?: string;

  @Metadata({ data: "json, name=ground_elevation_method" })
  groundElevationMethod?: string;

  @Metadata({ data: "json, name=hydraulic_conductivity" })
  hydraulicConductivity?: string;

  @Metadata({ data: "json, name=hydro_fracturing_performed" })
  hydroFracturingPerformed?: boolean;

  @Metadata({ data: "json, name=hydro_fracturing_yield_increase" })
  hydroFracturingYieldIncrease?: string;

  @Metadata({ data: "json, name=id_plate_attached_by" })
  idPlateAttachedBy?: string;

  @Metadata({ data: "json, name=identification_plate_number" })
  identificationPlateNumber?: number;

  @Metadata({ data: "json, name=intended_water_use" })
  intendedWaterUse?: string;

  @Metadata({ data: "json, name=land_district" })
  landDistrict?: string;

  @Metadata({ data: "json, name=latitude" })
  latitude?: string;

  @Metadata({ data: "json, name=legal_block" })
  legalBlock?: string;

  @Metadata({ data: "json, name=legal_district_lot" })
  legalDistrictLot?: string;

  @Metadata({ data: "json, name=legal_lot" })
  legalLot?: string;

  @Metadata({ data: "json, name=legal_pid" })
  legalPid?: number;

  @Metadata({ data: "json, name=legal_plan" })
  legalPlan?: string;

  @Metadata({ data: "json, name=legal_range" })
  legalRange?: string;

  @Metadata({ data: "json, name=legal_section" })
  legalSection?: string;

  @Metadata({ data: "json, name=legal_township" })
  legalTownship?: string;

  @Metadata({ data: "json, name=licenced_status" })
  licencedStatus?: string;

  @Metadata({ data: "json, name=liner_diameter" })
  linerDiameter?: string;

  @Metadata({ data: "json, name=liner_from" })
  linerFrom?: string;

  @Metadata({ data: "json, name=liner_material" })
  linerMaterial?: string;

  @Metadata({ data: "json, name=liner_thickness" })
  linerThickness?: string;

  @Metadata({ data: "json, name=liner_to" })
  linerTo?: string;

  @Metadata({ data: "json, name=longitude" })
  longitude?: string;

  @Metadata({ data: "json, name=observation_well_number" })
  observationWellNumber?: string;

  @Metadata({ data: "json, name=observation_well_status" })
  observationWellStatus?: string;

  @Metadata({ data: "json, name=other_drilling_method" })
  otherDrillingMethod?: string;

  @Metadata({ data: "json, name=other_screen_bottom" })
  otherScreenBottom?: string;

  @Metadata({ data: "json, name=other_screen_material" })
  otherScreenMaterial?: string;

  @Metadata({ data: "json, name=owner_full_name" })
  ownerFullName: string;

  @Metadata({ data: "json, name=recommended_pump_depth" })
  recommendedPumpDepth?: string;

  @Metadata({ data: "json, name=recommended_pump_rate" })
  recommendedPumpRate?: string;

  @Metadata({ data: "json, name=screen_bottom" })
  screenBottom?: string;

  @Metadata({ data: "json, name=screen_information" })
  screenInformation?: string;

  @Metadata({ data: "json, name=screen_intake_method" })
  screenIntakeMethod?: string;

  @Metadata({ data: "json, name=screen_material" })
  screenMaterial?: string;

  @Metadata({ data: "json, name=screen_opening" })
  screenOpening?: string;

  @Metadata({ data: "json, name=screen_type" })
  screenType?: string;

  @Metadata({ data: "json, name=sealant_material" })
  sealantMaterial?: string;

  @Metadata({ data: "json, name=specific_storage" })
  specificStorage?: string;

  @Metadata({ data: "json, name=specific_yield" })
  specificYield?: string;

  @Metadata({ data: "json, name=static_level_before_test" })
  staticLevelBeforeTest?: string;

  @Metadata({ data: "json, name=static_water_level" })
  staticWaterLevel?: string;

  @Metadata({ data: "json, name=storativity" })
  storativity?: string;

  @Metadata({ data: "json, name=street_address" })
  streetAddress?: string;

  @Metadata({ data: "json, name=surface_seal_depth" })
  surfaceSealDepth?: string;

  @Metadata({ data: "json, name=surface_seal_length" })
  surfaceSealLength?: string;

  @Metadata({ data: "json, name=surface_seal_material" })
  surfaceSealMaterial?: string;

  @Metadata({ data: "json, name=surface_seal_method" })
  surfaceSealMethod?: string;

  @Metadata({ data: "json, name=surface_seal_thickness" })
  surfaceSealThickness?: string;

  @Metadata({ data: "json, name=testing_duration" })
  testingDuration?: number;

  @Metadata({ data: "json, name=testing_method" })
  testingMethod?: string;

  @Metadata({ data: "json, name=total_depth_drilled" })
  totalDepthDrilled?: string;

  @Metadata({ data: "json, name=transmissivity" })
  transmissivity?: string;

  @Metadata({ data: "json, name=utm_easting" })
  utmEasting?: number;

  @Metadata({ data: "json, name=utm_northing" })
  utmNorthing?: number;

  @Metadata({ data: "json, name=utm_zone_code" })
  utmZoneCode?: string;

  @Metadata({ data: "json, name=water_quality_characteristics" })
  waterQualityCharacteristics?: string[];

  @Metadata({ data: "json, name=water_quality_colour" })
  waterQualityColour?: string;

  @Metadata({ data: "json, name=water_quality_odour" })
  waterQualityOdour?: string;

  @Metadata({ data: "json, name=water_supply_system_name" })
  waterSupplySystemName?: string;

  @Metadata({ data: "json, name=water_supply_system_well_name" })
  waterSupplySystemWellName?: string;

  @Metadata({ data: "json, name=well_cap_type" })
  wellCapType?: string;

  @Metadata({ data: "json, name=well_class" })
  wellClass?: string;

  @Metadata({ data: "json, name=well_disinfected" })
  wellDisinfected?: boolean;

  @Metadata({ data: "json, name=well_guid" })
  wellGuid?: string;

  @Metadata({ data: "json, name=well_identification_plate_attached" })
  wellIdentificationPlateAttached?: string;

  @Metadata({ data: "json, name=well_location_description" })
  wellLocationDescription?: string;

  @Metadata({ data: "json, name=well_orientation" })
  wellOrientation?: boolean;

  @Metadata({ data: "json, name=well_status" })
  wellStatus?: string;

  @Metadata({ data: "json, name=well_subclass" })
  wellSubclass?: string;

  @Metadata({ data: "json, name=well_tag_number" })
  wellTagNumber?: number;

  @Metadata({ data: "json, name=well_yield" })
  wellYield?: string;

  @Metadata({ data: "json, name=well_yield_unit" })
  wellYieldUnit?: string;

  @Metadata({ data: "json, name=yield_estimation_duration" })
  yieldEstimationDuration?: string;

  @Metadata({ data: "json, name=yield_estimation_method" })
  yieldEstimationMethod?: string;

  @Metadata({ data: "json, name=yield_estimation_rate" })
  yieldEstimationRate?: string;
}
