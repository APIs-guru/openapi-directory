var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
var WellList = /** @class */ (function (_super) {
    __extends(WellList, _super);
    function WellList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alteration_end_date" }),
        __metadata("design:type", Date)
    ], WellList.prototype, "alterationEndDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alternative_specs_submitted" }),
        __metadata("design:type", Boolean)
    ], WellList.prototype, "alternativeSpecsSubmitted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=analytic_solution_type" }),
        __metadata("design:type", String)
    ], WellList.prototype, "analyticSolutionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aquifer" }),
        __metadata("design:type", Number)
    ], WellList.prototype, "aquifer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aquifer_vulnerability_index" }),
        __metadata("design:type", String)
    ], WellList.prototype, "aquiferVulnerabilityIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=artesian_flow" }),
        __metadata("design:type", String)
    ], WellList.prototype, "artesianFlow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=artesian_pressure" }),
        __metadata("design:type", String)
    ], WellList.prototype, "artesianPressure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backfill_depth" }),
        __metadata("design:type", String)
    ], WellList.prototype, "backfillDepth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backfill_material" }),
        __metadata("design:type", String)
    ], WellList.prototype, "backfillMaterial", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backfill_type" }),
        __metadata("design:type", String)
    ], WellList.prototype, "backfillType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bcgs_id" }),
        __metadata("design:type", Number)
    ], WellList.prototype, "bcgsId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bedrock_depth" }),
        __metadata("design:type", String)
    ], WellList.prototype, "bedrockDepth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=boundary_effect" }),
        __metadata("design:type", String)
    ], WellList.prototype, "boundaryEffect", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], WellList.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments" }),
        __metadata("design:type", String)
    ], WellList.prototype, "comments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=construction_end_date" }),
        __metadata("design:type", Date)
    ], WellList.prototype, "constructionEndDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=construction_start_date" }),
        __metadata("design:type", Date)
    ], WellList.prototype, "constructionStartDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=coordinate_acquisition_code" }),
        __metadata("design:type", String)
    ], WellList.prototype, "coordinateAcquisitionCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=decommission_details" }),
        __metadata("design:type", String)
    ], WellList.prototype, "decommissionDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=decommission_end_date" }),
        __metadata("design:type", Date)
    ], WellList.prototype, "decommissionEndDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=decommission_method" }),
        __metadata("design:type", String)
    ], WellList.prototype, "decommissionMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=decommission_reason" }),
        __metadata("design:type", String)
    ], WellList.prototype, "decommissionReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=decommission_start_date" }),
        __metadata("design:type", Date)
    ], WellList.prototype, "decommissionStartDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=development_hours" }),
        __metadata("design:type", String)
    ], WellList.prototype, "developmentHours", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=development_method" }),
        __metadata("design:type", String)
    ], WellList.prototype, "developmentMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=development_notes" }),
        __metadata("design:type", String)
    ], WellList.prototype, "developmentNotes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diameter" }),
        __metadata("design:type", String)
    ], WellList.prototype, "diameter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=drawdown" }),
        __metadata("design:type", String)
    ], WellList.prototype, "drawdown", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=drilling_company" }),
        __metadata("design:type", String)
    ], WellList.prototype, "drillingCompany", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=drilling_method" }),
        __metadata("design:type", String)
    ], WellList.prototype, "drillingMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ems" }),
        __metadata("design:type", String)
    ], WellList.prototype, "ems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filter_pack_from" }),
        __metadata("design:type", String)
    ], WellList.prototype, "filterPackFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filter_pack_material" }),
        __metadata("design:type", String)
    ], WellList.prototype, "filterPackMaterial", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filter_pack_material_size" }),
        __metadata("design:type", String)
    ], WellList.prototype, "filterPackMaterialSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filter_pack_thickness" }),
        __metadata("design:type", String)
    ], WellList.prototype, "filterPackThickness", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filter_pack_to" }),
        __metadata("design:type", String)
    ], WellList.prototype, "filterPackTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=final_casing_stick_up" }),
        __metadata("design:type", String)
    ], WellList.prototype, "finalCasingStickUp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished_well_depth" }),
        __metadata("design:type", String)
    ], WellList.prototype, "finishedWellDepth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ground_elevation" }),
        __metadata("design:type", String)
    ], WellList.prototype, "groundElevation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ground_elevation_method" }),
        __metadata("design:type", String)
    ], WellList.prototype, "groundElevationMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hydraulic_conductivity" }),
        __metadata("design:type", String)
    ], WellList.prototype, "hydraulicConductivity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hydro_fracturing_performed" }),
        __metadata("design:type", Boolean)
    ], WellList.prototype, "hydroFracturingPerformed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hydro_fracturing_yield_increase" }),
        __metadata("design:type", String)
    ], WellList.prototype, "hydroFracturingYieldIncrease", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id_plate_attached_by" }),
        __metadata("design:type", String)
    ], WellList.prototype, "idPlateAttachedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=identification_plate_number" }),
        __metadata("design:type", Number)
    ], WellList.prototype, "identificationPlateNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=intended_water_use" }),
        __metadata("design:type", String)
    ], WellList.prototype, "intendedWaterUse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=land_district" }),
        __metadata("design:type", String)
    ], WellList.prototype, "landDistrict", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latitude" }),
        __metadata("design:type", String)
    ], WellList.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=legal_block" }),
        __metadata("design:type", String)
    ], WellList.prototype, "legalBlock", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=legal_district_lot" }),
        __metadata("design:type", String)
    ], WellList.prototype, "legalDistrictLot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=legal_lot" }),
        __metadata("design:type", String)
    ], WellList.prototype, "legalLot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=legal_pid" }),
        __metadata("design:type", Number)
    ], WellList.prototype, "legalPid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=legal_plan" }),
        __metadata("design:type", String)
    ], WellList.prototype, "legalPlan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=legal_range" }),
        __metadata("design:type", String)
    ], WellList.prototype, "legalRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=legal_section" }),
        __metadata("design:type", String)
    ], WellList.prototype, "legalSection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=legal_township" }),
        __metadata("design:type", String)
    ], WellList.prototype, "legalTownship", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=licenced_status" }),
        __metadata("design:type", String)
    ], WellList.prototype, "licencedStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=liner_diameter" }),
        __metadata("design:type", String)
    ], WellList.prototype, "linerDiameter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=liner_from" }),
        __metadata("design:type", String)
    ], WellList.prototype, "linerFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=liner_material" }),
        __metadata("design:type", String)
    ], WellList.prototype, "linerMaterial", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=liner_thickness" }),
        __metadata("design:type", String)
    ], WellList.prototype, "linerThickness", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=liner_to" }),
        __metadata("design:type", String)
    ], WellList.prototype, "linerTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longitude" }),
        __metadata("design:type", String)
    ], WellList.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=observation_well_number" }),
        __metadata("design:type", String)
    ], WellList.prototype, "observationWellNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=observation_well_status" }),
        __metadata("design:type", String)
    ], WellList.prototype, "observationWellStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=other_drilling_method" }),
        __metadata("design:type", String)
    ], WellList.prototype, "otherDrillingMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=other_screen_bottom" }),
        __metadata("design:type", String)
    ], WellList.prototype, "otherScreenBottom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=other_screen_material" }),
        __metadata("design:type", String)
    ], WellList.prototype, "otherScreenMaterial", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owner_full_name" }),
        __metadata("design:type", String)
    ], WellList.prototype, "ownerFullName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recommended_pump_depth" }),
        __metadata("design:type", String)
    ], WellList.prototype, "recommendedPumpDepth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recommended_pump_rate" }),
        __metadata("design:type", String)
    ], WellList.prototype, "recommendedPumpRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=screen_bottom" }),
        __metadata("design:type", String)
    ], WellList.prototype, "screenBottom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=screen_information" }),
        __metadata("design:type", String)
    ], WellList.prototype, "screenInformation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=screen_intake_method" }),
        __metadata("design:type", String)
    ], WellList.prototype, "screenIntakeMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=screen_material" }),
        __metadata("design:type", String)
    ], WellList.prototype, "screenMaterial", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=screen_opening" }),
        __metadata("design:type", String)
    ], WellList.prototype, "screenOpening", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=screen_type" }),
        __metadata("design:type", String)
    ], WellList.prototype, "screenType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sealant_material" }),
        __metadata("design:type", String)
    ], WellList.prototype, "sealantMaterial", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=specific_storage" }),
        __metadata("design:type", String)
    ], WellList.prototype, "specificStorage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=specific_yield" }),
        __metadata("design:type", String)
    ], WellList.prototype, "specificYield", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=static_level_before_test" }),
        __metadata("design:type", String)
    ], WellList.prototype, "staticLevelBeforeTest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=static_water_level" }),
        __metadata("design:type", String)
    ], WellList.prototype, "staticWaterLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=storativity" }),
        __metadata("design:type", String)
    ], WellList.prototype, "storativity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=street_address" }),
        __metadata("design:type", String)
    ], WellList.prototype, "streetAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=surface_seal_depth" }),
        __metadata("design:type", String)
    ], WellList.prototype, "surfaceSealDepth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=surface_seal_length" }),
        __metadata("design:type", String)
    ], WellList.prototype, "surfaceSealLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=surface_seal_material" }),
        __metadata("design:type", String)
    ], WellList.prototype, "surfaceSealMaterial", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=surface_seal_method" }),
        __metadata("design:type", String)
    ], WellList.prototype, "surfaceSealMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=surface_seal_thickness" }),
        __metadata("design:type", String)
    ], WellList.prototype, "surfaceSealThickness", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=testing_duration" }),
        __metadata("design:type", Number)
    ], WellList.prototype, "testingDuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=testing_method" }),
        __metadata("design:type", String)
    ], WellList.prototype, "testingMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_depth_drilled" }),
        __metadata("design:type", String)
    ], WellList.prototype, "totalDepthDrilled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transmissivity" }),
        __metadata("design:type", String)
    ], WellList.prototype, "transmissivity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=utm_easting" }),
        __metadata("design:type", Number)
    ], WellList.prototype, "utmEasting", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=utm_northing" }),
        __metadata("design:type", Number)
    ], WellList.prototype, "utmNorthing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=utm_zone_code" }),
        __metadata("design:type", String)
    ], WellList.prototype, "utmZoneCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=water_quality_characteristics" }),
        __metadata("design:type", Array)
    ], WellList.prototype, "waterQualityCharacteristics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=water_quality_colour" }),
        __metadata("design:type", String)
    ], WellList.prototype, "waterQualityColour", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=water_quality_odour" }),
        __metadata("design:type", String)
    ], WellList.prototype, "waterQualityOdour", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=water_supply_system_name" }),
        __metadata("design:type", String)
    ], WellList.prototype, "waterSupplySystemName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=water_supply_system_well_name" }),
        __metadata("design:type", String)
    ], WellList.prototype, "waterSupplySystemWellName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=well_cap_type" }),
        __metadata("design:type", String)
    ], WellList.prototype, "wellCapType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=well_class" }),
        __metadata("design:type", String)
    ], WellList.prototype, "wellClass", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=well_disinfected" }),
        __metadata("design:type", Boolean)
    ], WellList.prototype, "wellDisinfected", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=well_guid" }),
        __metadata("design:type", String)
    ], WellList.prototype, "wellGuid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=well_identification_plate_attached" }),
        __metadata("design:type", String)
    ], WellList.prototype, "wellIdentificationPlateAttached", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=well_location_description" }),
        __metadata("design:type", String)
    ], WellList.prototype, "wellLocationDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=well_orientation" }),
        __metadata("design:type", Boolean)
    ], WellList.prototype, "wellOrientation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=well_status" }),
        __metadata("design:type", String)
    ], WellList.prototype, "wellStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=well_subclass" }),
        __metadata("design:type", String)
    ], WellList.prototype, "wellSubclass", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=well_tag_number" }),
        __metadata("design:type", Number)
    ], WellList.prototype, "wellTagNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=well_yield" }),
        __metadata("design:type", String)
    ], WellList.prototype, "wellYield", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=well_yield_unit" }),
        __metadata("design:type", String)
    ], WellList.prototype, "wellYieldUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=yield_estimation_duration" }),
        __metadata("design:type", String)
    ], WellList.prototype, "yieldEstimationDuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=yield_estimation_method" }),
        __metadata("design:type", String)
    ], WellList.prototype, "yieldEstimationMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=yield_estimation_rate" }),
        __metadata("design:type", String)
    ], WellList.prototype, "yieldEstimationRate", void 0);
    return WellList;
}(SpeakeasyBase));
export { WellList };
