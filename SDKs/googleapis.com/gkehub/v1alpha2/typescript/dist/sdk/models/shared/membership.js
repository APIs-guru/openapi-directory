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
import { AuthorityInput } from "./authority";
import { MembershipEndpointInput } from "./membershipendpoint";
import { Authority } from "./authority";
import { MembershipEndpoint } from "./membershipendpoint";
import { MembershipState } from "./membershipstate";
export var MembershipInfrastructureTypeEnum;
(function (MembershipInfrastructureTypeEnum) {
    MembershipInfrastructureTypeEnum["InfrastructureTypeUnspecified"] = "INFRASTRUCTURE_TYPE_UNSPECIFIED";
    MembershipInfrastructureTypeEnum["OnPrem"] = "ON_PREM";
    MembershipInfrastructureTypeEnum["MultiCloud"] = "MULTI_CLOUD";
})(MembershipInfrastructureTypeEnum || (MembershipInfrastructureTypeEnum = {}));
// MembershipInput
/**
 * Membership contains information about a member cluster.
**/
var MembershipInput = /** @class */ (function (_super) {
    __extends(MembershipInput, _super);
    function MembershipInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authority" }),
        __metadata("design:type", AuthorityInput)
    ], MembershipInput.prototype, "authority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endpoint" }),
        __metadata("design:type", MembershipEndpointInput)
    ], MembershipInput.prototype, "endpoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=externalId" }),
        __metadata("design:type", String)
    ], MembershipInput.prototype, "externalId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=infrastructureType" }),
        __metadata("design:type", String)
    ], MembershipInput.prototype, "infrastructureType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], MembershipInput.prototype, "labels", void 0);
    return MembershipInput;
}(SpeakeasyBase));
export { MembershipInput };
// Membership
/**
 * Membership contains information about a member cluster.
**/
var Membership = /** @class */ (function (_super) {
    __extends(Membership, _super);
    function Membership() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authority" }),
        __metadata("design:type", Authority)
    ], Membership.prototype, "authority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Membership.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleteTime" }),
        __metadata("design:type", String)
    ], Membership.prototype, "deleteTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Membership.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endpoint" }),
        __metadata("design:type", MembershipEndpoint)
    ], Membership.prototype, "endpoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=externalId" }),
        __metadata("design:type", String)
    ], Membership.prototype, "externalId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=infrastructureType" }),
        __metadata("design:type", String)
    ], Membership.prototype, "infrastructureType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], Membership.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastConnectionTime" }),
        __metadata("design:type", String)
    ], Membership.prototype, "lastConnectionTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Membership.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", MembershipState)
    ], Membership.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uniqueId" }),
        __metadata("design:type", String)
    ], Membership.prototype, "uniqueId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Membership.prototype, "updateTime", void 0);
    return Membership;
}(SpeakeasyBase));
export { Membership };
