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
import { GoogleCloudDatacatalogV1SystemTimestamps } from "./googleclouddatacatalogv1systemtimestamps";
import { GoogleCloudDatacatalogV1SystemTimestampsInput } from "./googleclouddatacatalogv1systemtimestamps";
export var GoogleCloudDatacatalogV1TaxonomyActivatedPolicyTypesEnum;
(function (GoogleCloudDatacatalogV1TaxonomyActivatedPolicyTypesEnum) {
    GoogleCloudDatacatalogV1TaxonomyActivatedPolicyTypesEnum["PolicyTypeUnspecified"] = "POLICY_TYPE_UNSPECIFIED";
    GoogleCloudDatacatalogV1TaxonomyActivatedPolicyTypesEnum["FineGrainedAccessControl"] = "FINE_GRAINED_ACCESS_CONTROL";
})(GoogleCloudDatacatalogV1TaxonomyActivatedPolicyTypesEnum || (GoogleCloudDatacatalogV1TaxonomyActivatedPolicyTypesEnum = {}));
// GoogleCloudDatacatalogV1Taxonomy
/**
 * A taxonomy is a collection of hierarchical policy tags that classify data along a common axis. For example, a "data sensitivity" taxonomy might contain the following policy tags: ``` + PII + Account number + Age + SSN + Zipcode + Financials + Revenue ``` A "data origin" taxonomy might contain the following policy tags: ``` + User data + Employee data + Partner data + Public data ```
**/
var GoogleCloudDatacatalogV1Taxonomy = /** @class */ (function (_super) {
    __extends(GoogleCloudDatacatalogV1Taxonomy, _super);
    function GoogleCloudDatacatalogV1Taxonomy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activatedPolicyTypes" }),
        __metadata("design:type", Array)
    ], GoogleCloudDatacatalogV1Taxonomy.prototype, "activatedPolicyTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1Taxonomy.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1Taxonomy.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1Taxonomy.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policyTagCount" }),
        __metadata("design:type", Number)
    ], GoogleCloudDatacatalogV1Taxonomy.prototype, "policyTagCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taxonomyTimestamps" }),
        __metadata("design:type", GoogleCloudDatacatalogV1SystemTimestamps)
    ], GoogleCloudDatacatalogV1Taxonomy.prototype, "taxonomyTimestamps", void 0);
    return GoogleCloudDatacatalogV1Taxonomy;
}(SpeakeasyBase));
export { GoogleCloudDatacatalogV1Taxonomy };
// GoogleCloudDatacatalogV1TaxonomyInput
/**
 * A taxonomy is a collection of hierarchical policy tags that classify data along a common axis. For example, a "data sensitivity" taxonomy might contain the following policy tags: ``` + PII + Account number + Age + SSN + Zipcode + Financials + Revenue ``` A "data origin" taxonomy might contain the following policy tags: ``` + User data + Employee data + Partner data + Public data ```
**/
var GoogleCloudDatacatalogV1TaxonomyInput = /** @class */ (function (_super) {
    __extends(GoogleCloudDatacatalogV1TaxonomyInput, _super);
    function GoogleCloudDatacatalogV1TaxonomyInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activatedPolicyTypes" }),
        __metadata("design:type", Array)
    ], GoogleCloudDatacatalogV1TaxonomyInput.prototype, "activatedPolicyTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1TaxonomyInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1TaxonomyInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taxonomyTimestamps" }),
        __metadata("design:type", GoogleCloudDatacatalogV1SystemTimestampsInput)
    ], GoogleCloudDatacatalogV1TaxonomyInput.prototype, "taxonomyTimestamps", void 0);
    return GoogleCloudDatacatalogV1TaxonomyInput;
}(SpeakeasyBase));
export { GoogleCloudDatacatalogV1TaxonomyInput };
