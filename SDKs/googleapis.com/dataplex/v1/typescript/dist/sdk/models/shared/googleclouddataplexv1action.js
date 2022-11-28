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
import { GoogleCloudDataplexV1ActionFailedSecurityPolicyApply } from "./googleclouddataplexv1actionfailedsecuritypolicyapply";
import { GoogleCloudDataplexV1ActionIncompatibleDataSchema } from "./googleclouddataplexv1actionincompatibledataschema";
import { GoogleCloudDataplexV1ActionInvalidDataFormat } from "./googleclouddataplexv1actioninvaliddataformat";
import { GoogleCloudDataplexV1ActionInvalidDataPartition } from "./googleclouddataplexv1actioninvaliddatapartition";
export var GoogleCloudDataplexV1ActionCategoryEnum;
(function (GoogleCloudDataplexV1ActionCategoryEnum) {
    GoogleCloudDataplexV1ActionCategoryEnum["CategoryUnspecified"] = "CATEGORY_UNSPECIFIED";
    GoogleCloudDataplexV1ActionCategoryEnum["ResourceManagement"] = "RESOURCE_MANAGEMENT";
    GoogleCloudDataplexV1ActionCategoryEnum["SecurityPolicy"] = "SECURITY_POLICY";
    GoogleCloudDataplexV1ActionCategoryEnum["DataDiscovery"] = "DATA_DISCOVERY";
})(GoogleCloudDataplexV1ActionCategoryEnum || (GoogleCloudDataplexV1ActionCategoryEnum = {}));
// GoogleCloudDataplexV1Action
/**
 * Action represents an issue requiring administrator action for resolution.
**/
var GoogleCloudDataplexV1Action = /** @class */ (function (_super) {
    __extends(GoogleCloudDataplexV1Action, _super);
    function GoogleCloudDataplexV1Action() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=asset" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Action.prototype, "asset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Action.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataLocations" }),
        __metadata("design:type", Array)
    ], GoogleCloudDataplexV1Action.prototype, "dataLocations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detectTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Action.prototype, "detectTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=failedSecurityPolicyApply" }),
        __metadata("design:type", GoogleCloudDataplexV1ActionFailedSecurityPolicyApply)
    ], GoogleCloudDataplexV1Action.prototype, "failedSecurityPolicyApply", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=incompatibleDataSchema" }),
        __metadata("design:type", GoogleCloudDataplexV1ActionIncompatibleDataSchema)
    ], GoogleCloudDataplexV1Action.prototype, "incompatibleDataSchema", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=invalidDataFormat" }),
        __metadata("design:type", GoogleCloudDataplexV1ActionInvalidDataFormat)
    ], GoogleCloudDataplexV1Action.prototype, "invalidDataFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=invalidDataOrganization" }),
        __metadata("design:type", Map)
    ], GoogleCloudDataplexV1Action.prototype, "invalidDataOrganization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=invalidDataPartition" }),
        __metadata("design:type", GoogleCloudDataplexV1ActionInvalidDataPartition)
    ], GoogleCloudDataplexV1Action.prototype, "invalidDataPartition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issue" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Action.prototype, "issue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lake" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Action.prototype, "lake", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=missingData" }),
        __metadata("design:type", Map)
    ], GoogleCloudDataplexV1Action.prototype, "missingData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=missingResource" }),
        __metadata("design:type", Map)
    ], GoogleCloudDataplexV1Action.prototype, "missingResource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Action.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unauthorizedResource" }),
        __metadata("design:type", Map)
    ], GoogleCloudDataplexV1Action.prototype, "unauthorizedResource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=zone" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Action.prototype, "zone", void 0);
    return GoogleCloudDataplexV1Action;
}(SpeakeasyBase));
export { GoogleCloudDataplexV1Action };
