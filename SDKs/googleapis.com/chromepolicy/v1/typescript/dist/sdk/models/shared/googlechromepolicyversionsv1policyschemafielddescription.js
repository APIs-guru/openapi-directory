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
import { GoogleChromePolicyVersionsV1PolicySchemaFieldDependencies } from "./googlechromepolicyversionsv1policyschemafielddependencies";
import { GoogleChromePolicyVersionsV1PolicySchemaFieldKnownValueDescription } from "./googlechromepolicyversionsv1policyschemafieldknownvaluedescription";
import { GoogleChromePolicyVersionsV1PolicySchemaRequiredItems } from "./googlechromepolicyversionsv1policyschemarequireditems";
// GoogleChromePolicyVersionsV1PolicySchemaFieldDescription
/**
 * Provides detailed information for a particular field that is part of a PolicySchema.
**/
var GoogleChromePolicyVersionsV1PolicySchemaFieldDescription = /** @class */ (function (_super) {
    __extends(GoogleChromePolicyVersionsV1PolicySchemaFieldDescription, _super);
    function GoogleChromePolicyVersionsV1PolicySchemaFieldDescription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultValue" }),
        __metadata("design:type", Object)
    ], GoogleChromePolicyVersionsV1PolicySchemaFieldDescription.prototype, "defaultValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleChromePolicyVersionsV1PolicySchemaFieldDescription.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=field" }),
        __metadata("design:type", String)
    ], GoogleChromePolicyVersionsV1PolicySchemaFieldDescription.prototype, "field", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fieldDependencies", elemType: GoogleChromePolicyVersionsV1PolicySchemaFieldDependencies }),
        __metadata("design:type", Array)
    ], GoogleChromePolicyVersionsV1PolicySchemaFieldDescription.prototype, "fieldDependencies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fieldDescription" }),
        __metadata("design:type", String)
    ], GoogleChromePolicyVersionsV1PolicySchemaFieldDescription.prototype, "fieldDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inputConstraint" }),
        __metadata("design:type", String)
    ], GoogleChromePolicyVersionsV1PolicySchemaFieldDescription.prototype, "inputConstraint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=knownValueDescriptions", elemType: GoogleChromePolicyVersionsV1PolicySchemaFieldKnownValueDescription }),
        __metadata("design:type", Array)
    ], GoogleChromePolicyVersionsV1PolicySchemaFieldDescription.prototype, "knownValueDescriptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleChromePolicyVersionsV1PolicySchemaFieldDescription.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nestedFieldDescriptions", elemType: GoogleChromePolicyVersionsV1PolicySchemaFieldDescription }),
        __metadata("design:type", Array)
    ], GoogleChromePolicyVersionsV1PolicySchemaFieldDescription.prototype, "nestedFieldDescriptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requiredItems", elemType: GoogleChromePolicyVersionsV1PolicySchemaRequiredItems }),
        __metadata("design:type", Array)
    ], GoogleChromePolicyVersionsV1PolicySchemaFieldDescription.prototype, "requiredItems", void 0);
    return GoogleChromePolicyVersionsV1PolicySchemaFieldDescription;
}(SpeakeasyBase));
export { GoogleChromePolicyVersionsV1PolicySchemaFieldDescription };
