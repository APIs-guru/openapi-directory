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
import { Casing } from "./casing";
import { OrganizationNameList } from "./organizationnamelist";
import { DecommissionDescription } from "./decommissiondescription";
import { LinerPerforation } from "./linerperforation";
import { LithologyDescription } from "./lithologydescription";
import { PersonBasic } from "./personbasic";
import { Screen } from "./screen";
var WellDetail = /** @class */ (function (_super) {
    __extends(WellDetail, _super);
    function WellDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alteration_end_date" }),
        __metadata("design:type", Date)
    ], WellDetail.prototype, "alterationEndDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alternative_specs_submitted" }),
        __metadata("design:type", Boolean)
    ], WellDetail.prototype, "alternativeSpecsSubmitted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=analytic_solution_type" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "analyticSolutionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aquifer" }),
        __metadata("design:type", Number)
    ], WellDetail.prototype, "aquifer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aquifer_vulnerability_index" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "aquiferVulnerabilityIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=artesian_flow" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "artesianFlow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=artesian_pressure" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "artesianPressure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backfill_depth" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "backfillDepth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backfill_material" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "backfillMaterial", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backfill_type" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "backfillType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bcgs_id" }),
        __metadata("design:type", Number)
    ], WellDetail.prototype, "bcgsId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bedrock_depth" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "bedrockDepth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=boundary_effect" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "boundaryEffect", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=casing_set", elemType: Casing }),
        __metadata("design:type", Array)
    ], WellDetail.prototype, "casingSet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "comments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=company_of_person_responsible" }),
        __metadata("design:type", OrganizationNameList)
    ], WellDetail.prototype, "companyOfPersonResponsible", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=construction_end_date" }),
        __metadata("design:type", Date)
    ], WellDetail.prototype, "constructionEndDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=construction_start_date" }),
        __metadata("design:type", Date)
    ], WellDetail.prototype, "constructionStartDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=coordinate_acquisition_code" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "coordinateAcquisitionCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=decommission_description_set", elemType: DecommissionDescription }),
        __metadata("design:type", Array)
    ], WellDetail.prototype, "decommissionDescriptionSet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=decommission_details" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "decommissionDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=decommission_end_date" }),
        __metadata("design:type", Date)
    ], WellDetail.prototype, "decommissionEndDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=decommission_method" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "decommissionMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=decommission_reason" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "decommissionReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=decommission_start_date" }),
        __metadata("design:type", Date)
    ], WellDetail.prototype, "decommissionStartDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=development_hours" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "developmentHours", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=development_method" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "developmentMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=development_notes" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "developmentNotes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diameter" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "diameter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=drawdown" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "drawdown", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=drilling_company" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "drillingCompany", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=drilling_method" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "drillingMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ems" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "ems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filter_pack_from" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "filterPackFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filter_pack_material" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "filterPackMaterial", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filter_pack_material_size" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "filterPackMaterialSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filter_pack_thickness" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "filterPackThickness", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filter_pack_to" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "filterPackTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=final_casing_stick_up" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "finalCasingStickUp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished_well_depth" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "finishedWellDepth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ground_elevation" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "groundElevation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ground_elevation_method" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "groundElevationMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hydraulic_conductivity" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "hydraulicConductivity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hydro_fracturing_performed" }),
        __metadata("design:type", Boolean)
    ], WellDetail.prototype, "hydroFracturingPerformed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hydro_fracturing_yield_increase" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "hydroFracturingYieldIncrease", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id_plate_attached_by" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "idPlateAttachedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=identification_plate_number" }),
        __metadata("design:type", Number)
    ], WellDetail.prototype, "identificationPlateNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=intended_water_use" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "intendedWaterUse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=land_district" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "landDistrict", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latitude" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=legal_block" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "legalBlock", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=legal_district_lot" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "legalDistrictLot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=legal_lot" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "legalLot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=legal_pid" }),
        __metadata("design:type", Number)
    ], WellDetail.prototype, "legalPid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=legal_plan" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "legalPlan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=legal_range" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "legalRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=legal_section" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "legalSection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=legal_township" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "legalTownship", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=licenced_status" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "licencedStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=liner_diameter" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "linerDiameter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=liner_from" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "linerFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=liner_material" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "linerMaterial", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=liner_thickness" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "linerThickness", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=liner_to" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "linerTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linerperforation_set", elemType: LinerPerforation }),
        __metadata("design:type", Array)
    ], WellDetail.prototype, "linerperforationSet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lithologydescription_set", elemType: LithologyDescription }),
        __metadata("design:type", Array)
    ], WellDetail.prototype, "lithologydescriptionSet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longitude" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=observation_well_number" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "observationWellNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=observation_well_status" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "observationWellStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=other_drilling_method" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "otherDrillingMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=other_screen_bottom" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "otherScreenBottom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=other_screen_material" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "otherScreenMaterial", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owner_full_name" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "ownerFullName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=person_responsible" }),
        __metadata("design:type", PersonBasic)
    ], WellDetail.prototype, "personResponsible", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recommended_pump_depth" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "recommendedPumpDepth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recommended_pump_rate" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "recommendedPumpRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=screen_bottom" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "screenBottom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=screen_information" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "screenInformation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=screen_intake_method" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "screenIntakeMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=screen_material" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "screenMaterial", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=screen_opening" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "screenOpening", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=screen_set", elemType: Screen }),
        __metadata("design:type", Array)
    ], WellDetail.prototype, "screenSet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=screen_type" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "screenType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sealant_material" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "sealantMaterial", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=specific_storage" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "specificStorage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=specific_yield" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "specificYield", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=static_level_before_test" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "staticLevelBeforeTest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=static_water_level" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "staticWaterLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=storativity" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "storativity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=street_address" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "streetAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=surface_seal_depth" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "surfaceSealDepth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=surface_seal_length" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "surfaceSealLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=surface_seal_material" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "surfaceSealMaterial", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=surface_seal_method" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "surfaceSealMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=surface_seal_thickness" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "surfaceSealThickness", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=testing_duration" }),
        __metadata("design:type", Number)
    ], WellDetail.prototype, "testingDuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=testing_method" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "testingMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_depth_drilled" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "totalDepthDrilled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transmissivity" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "transmissivity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=utm_easting" }),
        __metadata("design:type", Number)
    ], WellDetail.prototype, "utmEasting", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=utm_northing" }),
        __metadata("design:type", Number)
    ], WellDetail.prototype, "utmNorthing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=utm_zone_code" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "utmZoneCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=water_quality_characteristics" }),
        __metadata("design:type", Array)
    ], WellDetail.prototype, "waterQualityCharacteristics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=water_quality_colour" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "waterQualityColour", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=water_quality_odour" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "waterQualityOdour", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=water_supply_system_name" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "waterSupplySystemName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=water_supply_system_well_name" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "waterSupplySystemWellName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=well" }),
        __metadata("design:type", Number)
    ], WellDetail.prototype, "well", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=well_cap_type" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "wellCapType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=well_class" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "wellClass", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=well_disinfected" }),
        __metadata("design:type", Boolean)
    ], WellDetail.prototype, "wellDisinfected", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=well_guid" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "wellGuid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=well_identification_plate_attached" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "wellIdentificationPlateAttached", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=well_location_description" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "wellLocationDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=well_orientation" }),
        __metadata("design:type", Boolean)
    ], WellDetail.prototype, "wellOrientation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=well_status" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "wellStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=well_subclass" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "wellSubclass", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=well_tag_number" }),
        __metadata("design:type", Number)
    ], WellDetail.prototype, "wellTagNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=well_yield" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "wellYield", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=well_yield_unit" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "wellYieldUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=yield_estimation_duration" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "yieldEstimationDuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=yield_estimation_method" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "yieldEstimationMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=yield_estimation_rate" }),
        __metadata("design:type", String)
    ], WellDetail.prototype, "yieldEstimationRate", void 0);
    return WellDetail;
}(SpeakeasyBase));
export { WellDetail };
