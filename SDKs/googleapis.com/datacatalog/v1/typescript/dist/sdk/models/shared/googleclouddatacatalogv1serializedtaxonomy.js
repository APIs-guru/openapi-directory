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
import { GoogleCloudDatacatalogV1SerializedPolicyTag } from "./googleclouddatacatalogv1serializedpolicytag";
export var GoogleCloudDatacatalogV1SerializedTaxonomyActivatedPolicyTypesEnum;
(function (GoogleCloudDatacatalogV1SerializedTaxonomyActivatedPolicyTypesEnum) {
    GoogleCloudDatacatalogV1SerializedTaxonomyActivatedPolicyTypesEnum["PolicyTypeUnspecified"] = "POLICY_TYPE_UNSPECIFIED";
    GoogleCloudDatacatalogV1SerializedTaxonomyActivatedPolicyTypesEnum["FineGrainedAccessControl"] = "FINE_GRAINED_ACCESS_CONTROL";
})(GoogleCloudDatacatalogV1SerializedTaxonomyActivatedPolicyTypesEnum || (GoogleCloudDatacatalogV1SerializedTaxonomyActivatedPolicyTypesEnum = {}));
// GoogleCloudDatacatalogV1SerializedTaxonomy
/**
 * A nested protocol buffer that represents a taxonomy and the hierarchy of its policy tags. Used for taxonomy replacement, import, and export.
**/
var GoogleCloudDatacatalogV1SerializedTaxonomy = /** @class */ (function (_super) {
    __extends(GoogleCloudDatacatalogV1SerializedTaxonomy, _super);
    function GoogleCloudDatacatalogV1SerializedTaxonomy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activatedPolicyTypes" }),
        __metadata("design:type", Array)
    ], GoogleCloudDatacatalogV1SerializedTaxonomy.prototype, "activatedPolicyTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1SerializedTaxonomy.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1SerializedTaxonomy.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policyTags", elemType: GoogleCloudDatacatalogV1SerializedPolicyTag }),
        __metadata("design:type", Array)
    ], GoogleCloudDatacatalogV1SerializedTaxonomy.prototype, "policyTags", void 0);
    return GoogleCloudDatacatalogV1SerializedTaxonomy;
}(SpeakeasyBase));
export { GoogleCloudDatacatalogV1SerializedTaxonomy };
