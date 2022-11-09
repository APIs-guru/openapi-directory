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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export var GoogleAppsCloudidentityDevicesV1ClientStateComplianceStateEnum;
(function (GoogleAppsCloudidentityDevicesV1ClientStateComplianceStateEnum) {
    GoogleAppsCloudidentityDevicesV1ClientStateComplianceStateEnum["ComplianceStateUnspecified"] = "COMPLIANCE_STATE_UNSPECIFIED";
    GoogleAppsCloudidentityDevicesV1ClientStateComplianceStateEnum["Compliant"] = "COMPLIANT";
    GoogleAppsCloudidentityDevicesV1ClientStateComplianceStateEnum["NonCompliant"] = "NON_COMPLIANT";
})(GoogleAppsCloudidentityDevicesV1ClientStateComplianceStateEnum || (GoogleAppsCloudidentityDevicesV1ClientStateComplianceStateEnum = {}));
export var GoogleAppsCloudidentityDevicesV1ClientStateHealthScoreEnum;
(function (GoogleAppsCloudidentityDevicesV1ClientStateHealthScoreEnum) {
    GoogleAppsCloudidentityDevicesV1ClientStateHealthScoreEnum["HealthScoreUnspecified"] = "HEALTH_SCORE_UNSPECIFIED";
    GoogleAppsCloudidentityDevicesV1ClientStateHealthScoreEnum["VeryPoor"] = "VERY_POOR";
    GoogleAppsCloudidentityDevicesV1ClientStateHealthScoreEnum["Poor"] = "POOR";
    GoogleAppsCloudidentityDevicesV1ClientStateHealthScoreEnum["Neutral"] = "NEUTRAL";
    GoogleAppsCloudidentityDevicesV1ClientStateHealthScoreEnum["Good"] = "GOOD";
    GoogleAppsCloudidentityDevicesV1ClientStateHealthScoreEnum["VeryGood"] = "VERY_GOOD";
})(GoogleAppsCloudidentityDevicesV1ClientStateHealthScoreEnum || (GoogleAppsCloudidentityDevicesV1ClientStateHealthScoreEnum = {}));
export var GoogleAppsCloudidentityDevicesV1ClientStateManagedEnum;
(function (GoogleAppsCloudidentityDevicesV1ClientStateManagedEnum) {
    GoogleAppsCloudidentityDevicesV1ClientStateManagedEnum["ManagedStateUnspecified"] = "MANAGED_STATE_UNSPECIFIED";
    GoogleAppsCloudidentityDevicesV1ClientStateManagedEnum["Managed"] = "MANAGED";
    GoogleAppsCloudidentityDevicesV1ClientStateManagedEnum["Unmanaged"] = "UNMANAGED";
})(GoogleAppsCloudidentityDevicesV1ClientStateManagedEnum || (GoogleAppsCloudidentityDevicesV1ClientStateManagedEnum = {}));
export var GoogleAppsCloudidentityDevicesV1ClientStateOwnerTypeEnum;
(function (GoogleAppsCloudidentityDevicesV1ClientStateOwnerTypeEnum) {
    GoogleAppsCloudidentityDevicesV1ClientStateOwnerTypeEnum["OwnerTypeUnspecified"] = "OWNER_TYPE_UNSPECIFIED";
    GoogleAppsCloudidentityDevicesV1ClientStateOwnerTypeEnum["OwnerTypeCustomer"] = "OWNER_TYPE_CUSTOMER";
    GoogleAppsCloudidentityDevicesV1ClientStateOwnerTypeEnum["OwnerTypePartner"] = "OWNER_TYPE_PARTNER";
})(GoogleAppsCloudidentityDevicesV1ClientStateOwnerTypeEnum || (GoogleAppsCloudidentityDevicesV1ClientStateOwnerTypeEnum = {}));
// GoogleAppsCloudidentityDevicesV1ClientState
/**
 * Represents the state associated with an API client calling the Devices API. Resource representing ClientState and supports updates from API users
**/
var GoogleAppsCloudidentityDevicesV1ClientState = /** @class */ (function (_super) {
    __extends(GoogleAppsCloudidentityDevicesV1ClientState, _super);
    function GoogleAppsCloudidentityDevicesV1ClientState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=assetTags" }),
        __metadata("design:type", Array)
    ], GoogleAppsCloudidentityDevicesV1ClientState.prototype, "assetTags", void 0);
    __decorate([
        Metadata({ data: "json, name=complianceState" }),
        __metadata("design:type", String)
    ], GoogleAppsCloudidentityDevicesV1ClientState.prototype, "complianceState", void 0);
    __decorate([
        Metadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleAppsCloudidentityDevicesV1ClientState.prototype, "createTime", void 0);
    __decorate([
        Metadata({ data: "json, name=customId" }),
        __metadata("design:type", String)
    ], GoogleAppsCloudidentityDevicesV1ClientState.prototype, "customId", void 0);
    __decorate([
        Metadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], GoogleAppsCloudidentityDevicesV1ClientState.prototype, "etag", void 0);
    __decorate([
        Metadata({ data: "json, name=healthScore" }),
        __metadata("design:type", String)
    ], GoogleAppsCloudidentityDevicesV1ClientState.prototype, "healthScore", void 0);
    __decorate([
        Metadata({ data: "json, name=keyValuePairs", elemType: shared.GoogleAppsCloudidentityDevicesV1CustomAttributeValue }),
        __metadata("design:type", Map)
    ], GoogleAppsCloudidentityDevicesV1ClientState.prototype, "keyValuePairs", void 0);
    __decorate([
        Metadata({ data: "json, name=lastUpdateTime" }),
        __metadata("design:type", String)
    ], GoogleAppsCloudidentityDevicesV1ClientState.prototype, "lastUpdateTime", void 0);
    __decorate([
        Metadata({ data: "json, name=managed" }),
        __metadata("design:type", String)
    ], GoogleAppsCloudidentityDevicesV1ClientState.prototype, "managed", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleAppsCloudidentityDevicesV1ClientState.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=ownerType" }),
        __metadata("design:type", String)
    ], GoogleAppsCloudidentityDevicesV1ClientState.prototype, "ownerType", void 0);
    __decorate([
        Metadata({ data: "json, name=scoreReason" }),
        __metadata("design:type", String)
    ], GoogleAppsCloudidentityDevicesV1ClientState.prototype, "scoreReason", void 0);
    return GoogleAppsCloudidentityDevicesV1ClientState;
}(SpeakeasyBase));
export { GoogleAppsCloudidentityDevicesV1ClientState };
