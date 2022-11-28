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
var ProvisionNetworkClientsPathParams = /** @class */ (function (_super) {
    __extends(ProvisionNetworkClientsPathParams, _super);
    function ProvisionNetworkClientsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], ProvisionNetworkClientsPathParams.prototype, "networkId", void 0);
    return ProvisionNetworkClientsPathParams;
}(SpeakeasyBase));
export { ProvisionNetworkClientsPathParams };
var ProvisionNetworkClientsRequestBodyClients = /** @class */ (function (_super) {
    __extends(ProvisionNetworkClientsRequestBodyClients, _super);
    function ProvisionNetworkClientsRequestBodyClients() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mac" }),
        __metadata("design:type", String)
    ], ProvisionNetworkClientsRequestBodyClients.prototype, "mac", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ProvisionNetworkClientsRequestBodyClients.prototype, "name", void 0);
    return ProvisionNetworkClientsRequestBodyClients;
}(SpeakeasyBase));
export { ProvisionNetworkClientsRequestBodyClients };
export var ProvisionNetworkClientsRequestBodyDevicePolicyEnum;
(function (ProvisionNetworkClientsRequestBodyDevicePolicyEnum) {
    ProvisionNetworkClientsRequestBodyDevicePolicyEnum["GroupPolicy"] = "Group policy";
    ProvisionNetworkClientsRequestBodyDevicePolicyEnum["Allowed"] = "Allowed";
    ProvisionNetworkClientsRequestBodyDevicePolicyEnum["Blocked"] = "Blocked";
    ProvisionNetworkClientsRequestBodyDevicePolicyEnum["PerConnection"] = "Per connection";
    ProvisionNetworkClientsRequestBodyDevicePolicyEnum["Normal"] = "Normal";
})(ProvisionNetworkClientsRequestBodyDevicePolicyEnum || (ProvisionNetworkClientsRequestBodyDevicePolicyEnum = {}));
export var ProvisionNetworkClientsRequestBodyPoliciesBySecurityApplianceDevicePolicyEnum;
(function (ProvisionNetworkClientsRequestBodyPoliciesBySecurityApplianceDevicePolicyEnum) {
    ProvisionNetworkClientsRequestBodyPoliciesBySecurityApplianceDevicePolicyEnum["Allowed"] = "Allowed";
    ProvisionNetworkClientsRequestBodyPoliciesBySecurityApplianceDevicePolicyEnum["Blocked"] = "Blocked";
    ProvisionNetworkClientsRequestBodyPoliciesBySecurityApplianceDevicePolicyEnum["Normal"] = "Normal";
})(ProvisionNetworkClientsRequestBodyPoliciesBySecurityApplianceDevicePolicyEnum || (ProvisionNetworkClientsRequestBodyPoliciesBySecurityApplianceDevicePolicyEnum = {}));
// ProvisionNetworkClientsRequestBodyPoliciesBySecurityAppliance
/**
 * An object, describing what the policy-connection association is for the security appliance. (Only relevant if the security appliance is actually within the network)
**/
var ProvisionNetworkClientsRequestBodyPoliciesBySecurityAppliance = /** @class */ (function (_super) {
    __extends(ProvisionNetworkClientsRequestBodyPoliciesBySecurityAppliance, _super);
    function ProvisionNetworkClientsRequestBodyPoliciesBySecurityAppliance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=devicePolicy" }),
        __metadata("design:type", String)
    ], ProvisionNetworkClientsRequestBodyPoliciesBySecurityAppliance.prototype, "devicePolicy", void 0);
    return ProvisionNetworkClientsRequestBodyPoliciesBySecurityAppliance;
}(SpeakeasyBase));
export { ProvisionNetworkClientsRequestBodyPoliciesBySecurityAppliance };
export var ProvisionNetworkClientsRequestBodyPoliciesBySsid0DevicePolicyEnum;
(function (ProvisionNetworkClientsRequestBodyPoliciesBySsid0DevicePolicyEnum) {
    ProvisionNetworkClientsRequestBodyPoliciesBySsid0DevicePolicyEnum["Allowed"] = "Allowed";
    ProvisionNetworkClientsRequestBodyPoliciesBySsid0DevicePolicyEnum["Blocked"] = "Blocked";
    ProvisionNetworkClientsRequestBodyPoliciesBySsid0DevicePolicyEnum["Normal"] = "Normal";
    ProvisionNetworkClientsRequestBodyPoliciesBySsid0DevicePolicyEnum["GroupPolicy"] = "Group policy";
})(ProvisionNetworkClientsRequestBodyPoliciesBySsid0DevicePolicyEnum || (ProvisionNetworkClientsRequestBodyPoliciesBySsid0DevicePolicyEnum = {}));
// ProvisionNetworkClientsRequestBodyPoliciesBySsid0
/**
 * The number for the SSID
**/
var ProvisionNetworkClientsRequestBodyPoliciesBySsid0 = /** @class */ (function (_super) {
    __extends(ProvisionNetworkClientsRequestBodyPoliciesBySsid0, _super);
    function ProvisionNetworkClientsRequestBodyPoliciesBySsid0() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=devicePolicy" }),
        __metadata("design:type", String)
    ], ProvisionNetworkClientsRequestBodyPoliciesBySsid0.prototype, "devicePolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupPolicyId" }),
        __metadata("design:type", String)
    ], ProvisionNetworkClientsRequestBodyPoliciesBySsid0.prototype, "groupPolicyId", void 0);
    return ProvisionNetworkClientsRequestBodyPoliciesBySsid0;
}(SpeakeasyBase));
export { ProvisionNetworkClientsRequestBodyPoliciesBySsid0 };
export var ProvisionNetworkClientsRequestBodyPoliciesBySsid1DevicePolicyEnum;
(function (ProvisionNetworkClientsRequestBodyPoliciesBySsid1DevicePolicyEnum) {
    ProvisionNetworkClientsRequestBodyPoliciesBySsid1DevicePolicyEnum["Allowed"] = "Allowed";
    ProvisionNetworkClientsRequestBodyPoliciesBySsid1DevicePolicyEnum["Blocked"] = "Blocked";
    ProvisionNetworkClientsRequestBodyPoliciesBySsid1DevicePolicyEnum["Normal"] = "Normal";
    ProvisionNetworkClientsRequestBodyPoliciesBySsid1DevicePolicyEnum["GroupPolicy"] = "Group policy";
})(ProvisionNetworkClientsRequestBodyPoliciesBySsid1DevicePolicyEnum || (ProvisionNetworkClientsRequestBodyPoliciesBySsid1DevicePolicyEnum = {}));
// ProvisionNetworkClientsRequestBodyPoliciesBySsid1
/**
 * The number for the SSID
**/
var ProvisionNetworkClientsRequestBodyPoliciesBySsid1 = /** @class */ (function (_super) {
    __extends(ProvisionNetworkClientsRequestBodyPoliciesBySsid1, _super);
    function ProvisionNetworkClientsRequestBodyPoliciesBySsid1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=devicePolicy" }),
        __metadata("design:type", String)
    ], ProvisionNetworkClientsRequestBodyPoliciesBySsid1.prototype, "devicePolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupPolicyId" }),
        __metadata("design:type", String)
    ], ProvisionNetworkClientsRequestBodyPoliciesBySsid1.prototype, "groupPolicyId", void 0);
    return ProvisionNetworkClientsRequestBodyPoliciesBySsid1;
}(SpeakeasyBase));
export { ProvisionNetworkClientsRequestBodyPoliciesBySsid1 };
export var ProvisionNetworkClientsRequestBodyPoliciesBySsid10DevicePolicyEnum;
(function (ProvisionNetworkClientsRequestBodyPoliciesBySsid10DevicePolicyEnum) {
    ProvisionNetworkClientsRequestBodyPoliciesBySsid10DevicePolicyEnum["Allowed"] = "Allowed";
    ProvisionNetworkClientsRequestBodyPoliciesBySsid10DevicePolicyEnum["Blocked"] = "Blocked";
    ProvisionNetworkClientsRequestBodyPoliciesBySsid10DevicePolicyEnum["Normal"] = "Normal";
    ProvisionNetworkClientsRequestBodyPoliciesBySsid10DevicePolicyEnum["GroupPolicy"] = "Group policy";
})(ProvisionNetworkClientsRequestBodyPoliciesBySsid10DevicePolicyEnum || (ProvisionNetworkClientsRequestBodyPoliciesBySsid10DevicePolicyEnum = {}));
// ProvisionNetworkClientsRequestBodyPoliciesBySsid10
/**
 * The number for the SSID
**/
var ProvisionNetworkClientsRequestBodyPoliciesBySsid10 = /** @class */ (function (_super) {
    __extends(ProvisionNetworkClientsRequestBodyPoliciesBySsid10, _super);
    function ProvisionNetworkClientsRequestBodyPoliciesBySsid10() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=devicePolicy" }),
        __metadata("design:type", String)
    ], ProvisionNetworkClientsRequestBodyPoliciesBySsid10.prototype, "devicePolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupPolicyId" }),
        __metadata("design:type", String)
    ], ProvisionNetworkClientsRequestBodyPoliciesBySsid10.prototype, "groupPolicyId", void 0);
    return ProvisionNetworkClientsRequestBodyPoliciesBySsid10;
}(SpeakeasyBase));
export { ProvisionNetworkClientsRequestBodyPoliciesBySsid10 };
export var ProvisionNetworkClientsRequestBodyPoliciesBySsid11DevicePolicyEnum;
(function (ProvisionNetworkClientsRequestBodyPoliciesBySsid11DevicePolicyEnum) {
    ProvisionNetworkClientsRequestBodyPoliciesBySsid11DevicePolicyEnum["Allowed"] = "Allowed";
    ProvisionNetworkClientsRequestBodyPoliciesBySsid11DevicePolicyEnum["Blocked"] = "Blocked";
    ProvisionNetworkClientsRequestBodyPoliciesBySsid11DevicePolicyEnum["Normal"] = "Normal";
    ProvisionNetworkClientsRequestBodyPoliciesBySsid11DevicePolicyEnum["GroupPolicy"] = "Group policy";
})(ProvisionNetworkClientsRequestBodyPoliciesBySsid11DevicePolicyEnum || (ProvisionNetworkClientsRequestBodyPoliciesBySsid11DevicePolicyEnum = {}));
// ProvisionNetworkClientsRequestBodyPoliciesBySsid11
/**
 * The number for the SSID
**/
var ProvisionNetworkClientsRequestBodyPoliciesBySsid11 = /** @class */ (function (_super) {
    __extends(ProvisionNetworkClientsRequestBodyPoliciesBySsid11, _super);
    function ProvisionNetworkClientsRequestBodyPoliciesBySsid11() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=devicePolicy" }),
        __metadata("design:type", String)
    ], ProvisionNetworkClientsRequestBodyPoliciesBySsid11.prototype, "devicePolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupPolicyId" }),
        __metadata("design:type", String)
    ], ProvisionNetworkClientsRequestBodyPoliciesBySsid11.prototype, "groupPolicyId", void 0);
    return ProvisionNetworkClientsRequestBodyPoliciesBySsid11;
}(SpeakeasyBase));
export { ProvisionNetworkClientsRequestBodyPoliciesBySsid11 };
export var ProvisionNetworkClientsRequestBodyPoliciesBySsid12DevicePolicyEnum;
(function (ProvisionNetworkClientsRequestBodyPoliciesBySsid12DevicePolicyEnum) {
    ProvisionNetworkClientsRequestBodyPoliciesBySsid12DevicePolicyEnum["Allowed"] = "Allowed";
    ProvisionNetworkClientsRequestBodyPoliciesBySsid12DevicePolicyEnum["Blocked"] = "Blocked";
    ProvisionNetworkClientsRequestBodyPoliciesBySsid12DevicePolicyEnum["Normal"] = "Normal";
    ProvisionNetworkClientsRequestBodyPoliciesBySsid12DevicePolicyEnum["GroupPolicy"] = "Group policy";
})(ProvisionNetworkClientsRequestBodyPoliciesBySsid12DevicePolicyEnum || (ProvisionNetworkClientsRequestBodyPoliciesBySsid12DevicePolicyEnum = {}));
// ProvisionNetworkClientsRequestBodyPoliciesBySsid12
/**
 * The number for the SSID
**/
var ProvisionNetworkClientsRequestBodyPoliciesBySsid12 = /** @class */ (function (_super) {
    __extends(ProvisionNetworkClientsRequestBodyPoliciesBySsid12, _super);
    function ProvisionNetworkClientsRequestBodyPoliciesBySsid12() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=devicePolicy" }),
        __metadata("design:type", String)
    ], ProvisionNetworkClientsRequestBodyPoliciesBySsid12.prototype, "devicePolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupPolicyId" }),
        __metadata("design:type", String)
    ], ProvisionNetworkClientsRequestBodyPoliciesBySsid12.prototype, "groupPolicyId", void 0);
    return ProvisionNetworkClientsRequestBodyPoliciesBySsid12;
}(SpeakeasyBase));
export { ProvisionNetworkClientsRequestBodyPoliciesBySsid12 };
export var ProvisionNetworkClientsRequestBodyPoliciesBySsid13DevicePolicyEnum;
(function (ProvisionNetworkClientsRequestBodyPoliciesBySsid13DevicePolicyEnum) {
    ProvisionNetworkClientsRequestBodyPoliciesBySsid13DevicePolicyEnum["Allowed"] = "Allowed";
    ProvisionNetworkClientsRequestBodyPoliciesBySsid13DevicePolicyEnum["Blocked"] = "Blocked";
    ProvisionNetworkClientsRequestBodyPoliciesBySsid13DevicePolicyEnum["Normal"] = "Normal";
    ProvisionNetworkClientsRequestBodyPoliciesBySsid13DevicePolicyEnum["GroupPolicy"] = "Group policy";
})(ProvisionNetworkClientsRequestBodyPoliciesBySsid13DevicePolicyEnum || (ProvisionNetworkClientsRequestBodyPoliciesBySsid13DevicePolicyEnum = {}));
// ProvisionNetworkClientsRequestBodyPoliciesBySsid13
/**
 * The number for the SSID
**/
var ProvisionNetworkClientsRequestBodyPoliciesBySsid13 = /** @class */ (function (_super) {
    __extends(ProvisionNetworkClientsRequestBodyPoliciesBySsid13, _super);
    function ProvisionNetworkClientsRequestBodyPoliciesBySsid13() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=devicePolicy" }),
        __metadata("design:type", String)
    ], ProvisionNetworkClientsRequestBodyPoliciesBySsid13.prototype, "devicePolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupPolicyId" }),
        __metadata("design:type", String)
    ], ProvisionNetworkClientsRequestBodyPoliciesBySsid13.prototype, "groupPolicyId", void 0);
    return ProvisionNetworkClientsRequestBodyPoliciesBySsid13;
}(SpeakeasyBase));
export { ProvisionNetworkClientsRequestBodyPoliciesBySsid13 };
export var ProvisionNetworkClientsRequestBodyPoliciesBySsid14DevicePolicyEnum;
(function (ProvisionNetworkClientsRequestBodyPoliciesBySsid14DevicePolicyEnum) {
    ProvisionNetworkClientsRequestBodyPoliciesBySsid14DevicePolicyEnum["Allowed"] = "Allowed";
    ProvisionNetworkClientsRequestBodyPoliciesBySsid14DevicePolicyEnum["Blocked"] = "Blocked";
    ProvisionNetworkClientsRequestBodyPoliciesBySsid14DevicePolicyEnum["Normal"] = "Normal";
    ProvisionNetworkClientsRequestBodyPoliciesBySsid14DevicePolicyEnum["GroupPolicy"] = "Group policy";
})(ProvisionNetworkClientsRequestBodyPoliciesBySsid14DevicePolicyEnum || (ProvisionNetworkClientsRequestBodyPoliciesBySsid14DevicePolicyEnum = {}));
// ProvisionNetworkClientsRequestBodyPoliciesBySsid14
/**
 * The number for the SSID
**/
var ProvisionNetworkClientsRequestBodyPoliciesBySsid14 = /** @class */ (function (_super) {
    __extends(ProvisionNetworkClientsRequestBodyPoliciesBySsid14, _super);
    function ProvisionNetworkClientsRequestBodyPoliciesBySsid14() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=devicePolicy" }),
        __metadata("design:type", String)
    ], ProvisionNetworkClientsRequestBodyPoliciesBySsid14.prototype, "devicePolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupPolicyId" }),
        __metadata("design:type", String)
    ], ProvisionNetworkClientsRequestBodyPoliciesBySsid14.prototype, "groupPolicyId", void 0);
    return ProvisionNetworkClientsRequestBodyPoliciesBySsid14;
}(SpeakeasyBase));
export { ProvisionNetworkClientsRequestBodyPoliciesBySsid14 };
export var ProvisionNetworkClientsRequestBodyPoliciesBySsid2DevicePolicyEnum;
(function (ProvisionNetworkClientsRequestBodyPoliciesBySsid2DevicePolicyEnum) {
    ProvisionNetworkClientsRequestBodyPoliciesBySsid2DevicePolicyEnum["Allowed"] = "Allowed";
    ProvisionNetworkClientsRequestBodyPoliciesBySsid2DevicePolicyEnum["Blocked"] = "Blocked";
    ProvisionNetworkClientsRequestBodyPoliciesBySsid2DevicePolicyEnum["Normal"] = "Normal";
    ProvisionNetworkClientsRequestBodyPoliciesBySsid2DevicePolicyEnum["GroupPolicy"] = "Group policy";
})(ProvisionNetworkClientsRequestBodyPoliciesBySsid2DevicePolicyEnum || (ProvisionNetworkClientsRequestBodyPoliciesBySsid2DevicePolicyEnum = {}));
// ProvisionNetworkClientsRequestBodyPoliciesBySsid2
/**
 * The number for the SSID
**/
var ProvisionNetworkClientsRequestBodyPoliciesBySsid2 = /** @class */ (function (_super) {
    __extends(ProvisionNetworkClientsRequestBodyPoliciesBySsid2, _super);
    function ProvisionNetworkClientsRequestBodyPoliciesBySsid2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=devicePolicy" }),
        __metadata("design:type", String)
    ], ProvisionNetworkClientsRequestBodyPoliciesBySsid2.prototype, "devicePolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupPolicyId" }),
        __metadata("design:type", String)
    ], ProvisionNetworkClientsRequestBodyPoliciesBySsid2.prototype, "groupPolicyId", void 0);
    return ProvisionNetworkClientsRequestBodyPoliciesBySsid2;
}(SpeakeasyBase));
export { ProvisionNetworkClientsRequestBodyPoliciesBySsid2 };
export var ProvisionNetworkClientsRequestBodyPoliciesBySsid3DevicePolicyEnum;
(function (ProvisionNetworkClientsRequestBodyPoliciesBySsid3DevicePolicyEnum) {
    ProvisionNetworkClientsRequestBodyPoliciesBySsid3DevicePolicyEnum["Allowed"] = "Allowed";
    ProvisionNetworkClientsRequestBodyPoliciesBySsid3DevicePolicyEnum["Blocked"] = "Blocked";
    ProvisionNetworkClientsRequestBodyPoliciesBySsid3DevicePolicyEnum["Normal"] = "Normal";
    ProvisionNetworkClientsRequestBodyPoliciesBySsid3DevicePolicyEnum["GroupPolicy"] = "Group policy";
})(ProvisionNetworkClientsRequestBodyPoliciesBySsid3DevicePolicyEnum || (ProvisionNetworkClientsRequestBodyPoliciesBySsid3DevicePolicyEnum = {}));
// ProvisionNetworkClientsRequestBodyPoliciesBySsid3
/**
 * The number for the SSID
**/
var ProvisionNetworkClientsRequestBodyPoliciesBySsid3 = /** @class */ (function (_super) {
    __extends(ProvisionNetworkClientsRequestBodyPoliciesBySsid3, _super);
    function ProvisionNetworkClientsRequestBodyPoliciesBySsid3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=devicePolicy" }),
        __metadata("design:type", String)
    ], ProvisionNetworkClientsRequestBodyPoliciesBySsid3.prototype, "devicePolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupPolicyId" }),
        __metadata("design:type", String)
    ], ProvisionNetworkClientsRequestBodyPoliciesBySsid3.prototype, "groupPolicyId", void 0);
    return ProvisionNetworkClientsRequestBodyPoliciesBySsid3;
}(SpeakeasyBase));
export { ProvisionNetworkClientsRequestBodyPoliciesBySsid3 };
export var ProvisionNetworkClientsRequestBodyPoliciesBySsid4DevicePolicyEnum;
(function (ProvisionNetworkClientsRequestBodyPoliciesBySsid4DevicePolicyEnum) {
    ProvisionNetworkClientsRequestBodyPoliciesBySsid4DevicePolicyEnum["Allowed"] = "Allowed";
    ProvisionNetworkClientsRequestBodyPoliciesBySsid4DevicePolicyEnum["Blocked"] = "Blocked";
    ProvisionNetworkClientsRequestBodyPoliciesBySsid4DevicePolicyEnum["Normal"] = "Normal";
    ProvisionNetworkClientsRequestBodyPoliciesBySsid4DevicePolicyEnum["GroupPolicy"] = "Group policy";
})(ProvisionNetworkClientsRequestBodyPoliciesBySsid4DevicePolicyEnum || (ProvisionNetworkClientsRequestBodyPoliciesBySsid4DevicePolicyEnum = {}));
// ProvisionNetworkClientsRequestBodyPoliciesBySsid4
/**
 * The number for the SSID
**/
var ProvisionNetworkClientsRequestBodyPoliciesBySsid4 = /** @class */ (function (_super) {
    __extends(ProvisionNetworkClientsRequestBodyPoliciesBySsid4, _super);
    function ProvisionNetworkClientsRequestBodyPoliciesBySsid4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=devicePolicy" }),
        __metadata("design:type", String)
    ], ProvisionNetworkClientsRequestBodyPoliciesBySsid4.prototype, "devicePolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupPolicyId" }),
        __metadata("design:type", String)
    ], ProvisionNetworkClientsRequestBodyPoliciesBySsid4.prototype, "groupPolicyId", void 0);
    return ProvisionNetworkClientsRequestBodyPoliciesBySsid4;
}(SpeakeasyBase));
export { ProvisionNetworkClientsRequestBodyPoliciesBySsid4 };
export var ProvisionNetworkClientsRequestBodyPoliciesBySsid5DevicePolicyEnum;
(function (ProvisionNetworkClientsRequestBodyPoliciesBySsid5DevicePolicyEnum) {
    ProvisionNetworkClientsRequestBodyPoliciesBySsid5DevicePolicyEnum["Allowed"] = "Allowed";
    ProvisionNetworkClientsRequestBodyPoliciesBySsid5DevicePolicyEnum["Blocked"] = "Blocked";
    ProvisionNetworkClientsRequestBodyPoliciesBySsid5DevicePolicyEnum["Normal"] = "Normal";
    ProvisionNetworkClientsRequestBodyPoliciesBySsid5DevicePolicyEnum["GroupPolicy"] = "Group policy";
})(ProvisionNetworkClientsRequestBodyPoliciesBySsid5DevicePolicyEnum || (ProvisionNetworkClientsRequestBodyPoliciesBySsid5DevicePolicyEnum = {}));
// ProvisionNetworkClientsRequestBodyPoliciesBySsid5
/**
 * The number for the SSID
**/
var ProvisionNetworkClientsRequestBodyPoliciesBySsid5 = /** @class */ (function (_super) {
    __extends(ProvisionNetworkClientsRequestBodyPoliciesBySsid5, _super);
    function ProvisionNetworkClientsRequestBodyPoliciesBySsid5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=devicePolicy" }),
        __metadata("design:type", String)
    ], ProvisionNetworkClientsRequestBodyPoliciesBySsid5.prototype, "devicePolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupPolicyId" }),
        __metadata("design:type", String)
    ], ProvisionNetworkClientsRequestBodyPoliciesBySsid5.prototype, "groupPolicyId", void 0);
    return ProvisionNetworkClientsRequestBodyPoliciesBySsid5;
}(SpeakeasyBase));
export { ProvisionNetworkClientsRequestBodyPoliciesBySsid5 };
export var ProvisionNetworkClientsRequestBodyPoliciesBySsid6DevicePolicyEnum;
(function (ProvisionNetworkClientsRequestBodyPoliciesBySsid6DevicePolicyEnum) {
    ProvisionNetworkClientsRequestBodyPoliciesBySsid6DevicePolicyEnum["Allowed"] = "Allowed";
    ProvisionNetworkClientsRequestBodyPoliciesBySsid6DevicePolicyEnum["Blocked"] = "Blocked";
    ProvisionNetworkClientsRequestBodyPoliciesBySsid6DevicePolicyEnum["Normal"] = "Normal";
    ProvisionNetworkClientsRequestBodyPoliciesBySsid6DevicePolicyEnum["GroupPolicy"] = "Group policy";
})(ProvisionNetworkClientsRequestBodyPoliciesBySsid6DevicePolicyEnum || (ProvisionNetworkClientsRequestBodyPoliciesBySsid6DevicePolicyEnum = {}));
// ProvisionNetworkClientsRequestBodyPoliciesBySsid6
/**
 * The number for the SSID
**/
var ProvisionNetworkClientsRequestBodyPoliciesBySsid6 = /** @class */ (function (_super) {
    __extends(ProvisionNetworkClientsRequestBodyPoliciesBySsid6, _super);
    function ProvisionNetworkClientsRequestBodyPoliciesBySsid6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=devicePolicy" }),
        __metadata("design:type", String)
    ], ProvisionNetworkClientsRequestBodyPoliciesBySsid6.prototype, "devicePolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupPolicyId" }),
        __metadata("design:type", String)
    ], ProvisionNetworkClientsRequestBodyPoliciesBySsid6.prototype, "groupPolicyId", void 0);
    return ProvisionNetworkClientsRequestBodyPoliciesBySsid6;
}(SpeakeasyBase));
export { ProvisionNetworkClientsRequestBodyPoliciesBySsid6 };
export var ProvisionNetworkClientsRequestBodyPoliciesBySsid7DevicePolicyEnum;
(function (ProvisionNetworkClientsRequestBodyPoliciesBySsid7DevicePolicyEnum) {
    ProvisionNetworkClientsRequestBodyPoliciesBySsid7DevicePolicyEnum["Allowed"] = "Allowed";
    ProvisionNetworkClientsRequestBodyPoliciesBySsid7DevicePolicyEnum["Blocked"] = "Blocked";
    ProvisionNetworkClientsRequestBodyPoliciesBySsid7DevicePolicyEnum["Normal"] = "Normal";
    ProvisionNetworkClientsRequestBodyPoliciesBySsid7DevicePolicyEnum["GroupPolicy"] = "Group policy";
})(ProvisionNetworkClientsRequestBodyPoliciesBySsid7DevicePolicyEnum || (ProvisionNetworkClientsRequestBodyPoliciesBySsid7DevicePolicyEnum = {}));
// ProvisionNetworkClientsRequestBodyPoliciesBySsid7
/**
 * The number for the SSID
**/
var ProvisionNetworkClientsRequestBodyPoliciesBySsid7 = /** @class */ (function (_super) {
    __extends(ProvisionNetworkClientsRequestBodyPoliciesBySsid7, _super);
    function ProvisionNetworkClientsRequestBodyPoliciesBySsid7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=devicePolicy" }),
        __metadata("design:type", String)
    ], ProvisionNetworkClientsRequestBodyPoliciesBySsid7.prototype, "devicePolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupPolicyId" }),
        __metadata("design:type", String)
    ], ProvisionNetworkClientsRequestBodyPoliciesBySsid7.prototype, "groupPolicyId", void 0);
    return ProvisionNetworkClientsRequestBodyPoliciesBySsid7;
}(SpeakeasyBase));
export { ProvisionNetworkClientsRequestBodyPoliciesBySsid7 };
export var ProvisionNetworkClientsRequestBodyPoliciesBySsid8DevicePolicyEnum;
(function (ProvisionNetworkClientsRequestBodyPoliciesBySsid8DevicePolicyEnum) {
    ProvisionNetworkClientsRequestBodyPoliciesBySsid8DevicePolicyEnum["Allowed"] = "Allowed";
    ProvisionNetworkClientsRequestBodyPoliciesBySsid8DevicePolicyEnum["Blocked"] = "Blocked";
    ProvisionNetworkClientsRequestBodyPoliciesBySsid8DevicePolicyEnum["Normal"] = "Normal";
    ProvisionNetworkClientsRequestBodyPoliciesBySsid8DevicePolicyEnum["GroupPolicy"] = "Group policy";
})(ProvisionNetworkClientsRequestBodyPoliciesBySsid8DevicePolicyEnum || (ProvisionNetworkClientsRequestBodyPoliciesBySsid8DevicePolicyEnum = {}));
// ProvisionNetworkClientsRequestBodyPoliciesBySsid8
/**
 * The number for the SSID
**/
var ProvisionNetworkClientsRequestBodyPoliciesBySsid8 = /** @class */ (function (_super) {
    __extends(ProvisionNetworkClientsRequestBodyPoliciesBySsid8, _super);
    function ProvisionNetworkClientsRequestBodyPoliciesBySsid8() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=devicePolicy" }),
        __metadata("design:type", String)
    ], ProvisionNetworkClientsRequestBodyPoliciesBySsid8.prototype, "devicePolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupPolicyId" }),
        __metadata("design:type", String)
    ], ProvisionNetworkClientsRequestBodyPoliciesBySsid8.prototype, "groupPolicyId", void 0);
    return ProvisionNetworkClientsRequestBodyPoliciesBySsid8;
}(SpeakeasyBase));
export { ProvisionNetworkClientsRequestBodyPoliciesBySsid8 };
export var ProvisionNetworkClientsRequestBodyPoliciesBySsid9DevicePolicyEnum;
(function (ProvisionNetworkClientsRequestBodyPoliciesBySsid9DevicePolicyEnum) {
    ProvisionNetworkClientsRequestBodyPoliciesBySsid9DevicePolicyEnum["Allowed"] = "Allowed";
    ProvisionNetworkClientsRequestBodyPoliciesBySsid9DevicePolicyEnum["Blocked"] = "Blocked";
    ProvisionNetworkClientsRequestBodyPoliciesBySsid9DevicePolicyEnum["Normal"] = "Normal";
    ProvisionNetworkClientsRequestBodyPoliciesBySsid9DevicePolicyEnum["GroupPolicy"] = "Group policy";
})(ProvisionNetworkClientsRequestBodyPoliciesBySsid9DevicePolicyEnum || (ProvisionNetworkClientsRequestBodyPoliciesBySsid9DevicePolicyEnum = {}));
// ProvisionNetworkClientsRequestBodyPoliciesBySsid9
/**
 * The number for the SSID
**/
var ProvisionNetworkClientsRequestBodyPoliciesBySsid9 = /** @class */ (function (_super) {
    __extends(ProvisionNetworkClientsRequestBodyPoliciesBySsid9, _super);
    function ProvisionNetworkClientsRequestBodyPoliciesBySsid9() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=devicePolicy" }),
        __metadata("design:type", String)
    ], ProvisionNetworkClientsRequestBodyPoliciesBySsid9.prototype, "devicePolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupPolicyId" }),
        __metadata("design:type", String)
    ], ProvisionNetworkClientsRequestBodyPoliciesBySsid9.prototype, "groupPolicyId", void 0);
    return ProvisionNetworkClientsRequestBodyPoliciesBySsid9;
}(SpeakeasyBase));
export { ProvisionNetworkClientsRequestBodyPoliciesBySsid9 };
// ProvisionNetworkClientsRequestBodyPoliciesBySsid
/**
 * An object, describing the policy-connection associations for each active SSID within the network. Keys should be the number of enabled SSIDs, mapping to an object describing the client's policy
**/
var ProvisionNetworkClientsRequestBodyPoliciesBySsid = /** @class */ (function (_super) {
    __extends(ProvisionNetworkClientsRequestBodyPoliciesBySsid, _super);
    function ProvisionNetworkClientsRequestBodyPoliciesBySsid() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=0" }),
        __metadata("design:type", ProvisionNetworkClientsRequestBodyPoliciesBySsid0)
    ], ProvisionNetworkClientsRequestBodyPoliciesBySsid.prototype, "zero", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=1" }),
        __metadata("design:type", ProvisionNetworkClientsRequestBodyPoliciesBySsid1)
    ], ProvisionNetworkClientsRequestBodyPoliciesBySsid.prototype, "one", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=10" }),
        __metadata("design:type", ProvisionNetworkClientsRequestBodyPoliciesBySsid10)
    ], ProvisionNetworkClientsRequestBodyPoliciesBySsid.prototype, "ten", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=11" }),
        __metadata("design:type", ProvisionNetworkClientsRequestBodyPoliciesBySsid11)
    ], ProvisionNetworkClientsRequestBodyPoliciesBySsid.prototype, "eleven", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=12" }),
        __metadata("design:type", ProvisionNetworkClientsRequestBodyPoliciesBySsid12)
    ], ProvisionNetworkClientsRequestBodyPoliciesBySsid.prototype, "twelve", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=13" }),
        __metadata("design:type", ProvisionNetworkClientsRequestBodyPoliciesBySsid13)
    ], ProvisionNetworkClientsRequestBodyPoliciesBySsid.prototype, "thirteen", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=14" }),
        __metadata("design:type", ProvisionNetworkClientsRequestBodyPoliciesBySsid14)
    ], ProvisionNetworkClientsRequestBodyPoliciesBySsid.prototype, "fourteen", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=2" }),
        __metadata("design:type", ProvisionNetworkClientsRequestBodyPoliciesBySsid2)
    ], ProvisionNetworkClientsRequestBodyPoliciesBySsid.prototype, "two", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=3" }),
        __metadata("design:type", ProvisionNetworkClientsRequestBodyPoliciesBySsid3)
    ], ProvisionNetworkClientsRequestBodyPoliciesBySsid.prototype, "three", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=4" }),
        __metadata("design:type", ProvisionNetworkClientsRequestBodyPoliciesBySsid4)
    ], ProvisionNetworkClientsRequestBodyPoliciesBySsid.prototype, "four", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=5" }),
        __metadata("design:type", ProvisionNetworkClientsRequestBodyPoliciesBySsid5)
    ], ProvisionNetworkClientsRequestBodyPoliciesBySsid.prototype, "five", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=6" }),
        __metadata("design:type", ProvisionNetworkClientsRequestBodyPoliciesBySsid6)
    ], ProvisionNetworkClientsRequestBodyPoliciesBySsid.prototype, "six", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=7" }),
        __metadata("design:type", ProvisionNetworkClientsRequestBodyPoliciesBySsid7)
    ], ProvisionNetworkClientsRequestBodyPoliciesBySsid.prototype, "seven", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=8" }),
        __metadata("design:type", ProvisionNetworkClientsRequestBodyPoliciesBySsid8)
    ], ProvisionNetworkClientsRequestBodyPoliciesBySsid.prototype, "eight", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=9" }),
        __metadata("design:type", ProvisionNetworkClientsRequestBodyPoliciesBySsid9)
    ], ProvisionNetworkClientsRequestBodyPoliciesBySsid.prototype, "nine", void 0);
    return ProvisionNetworkClientsRequestBodyPoliciesBySsid;
}(SpeakeasyBase));
export { ProvisionNetworkClientsRequestBodyPoliciesBySsid };
var ProvisionNetworkClientsRequestBody = /** @class */ (function (_super) {
    __extends(ProvisionNetworkClientsRequestBody, _super);
    function ProvisionNetworkClientsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clients", elemType: ProvisionNetworkClientsRequestBodyClients }),
        __metadata("design:type", Array)
    ], ProvisionNetworkClientsRequestBody.prototype, "clients", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=devicePolicy" }),
        __metadata("design:type", String)
    ], ProvisionNetworkClientsRequestBody.prototype, "devicePolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupPolicyId" }),
        __metadata("design:type", String)
    ], ProvisionNetworkClientsRequestBody.prototype, "groupPolicyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policiesBySecurityAppliance" }),
        __metadata("design:type", ProvisionNetworkClientsRequestBodyPoliciesBySecurityAppliance)
    ], ProvisionNetworkClientsRequestBody.prototype, "policiesBySecurityAppliance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policiesBySsid" }),
        __metadata("design:type", ProvisionNetworkClientsRequestBodyPoliciesBySsid)
    ], ProvisionNetworkClientsRequestBody.prototype, "policiesBySsid", void 0);
    return ProvisionNetworkClientsRequestBody;
}(SpeakeasyBase));
export { ProvisionNetworkClientsRequestBody };
var ProvisionNetworkClientsRequest = /** @class */ (function (_super) {
    __extends(ProvisionNetworkClientsRequest, _super);
    function ProvisionNetworkClientsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProvisionNetworkClientsPathParams)
    ], ProvisionNetworkClientsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ProvisionNetworkClientsRequestBody)
    ], ProvisionNetworkClientsRequest.prototype, "request", void 0);
    return ProvisionNetworkClientsRequest;
}(SpeakeasyBase));
export { ProvisionNetworkClientsRequest };
var ProvisionNetworkClientsResponse = /** @class */ (function (_super) {
    __extends(ProvisionNetworkClientsResponse, _super);
    function ProvisionNetworkClientsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ProvisionNetworkClientsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ProvisionNetworkClientsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ProvisionNetworkClientsResponse.prototype, "provisionNetworkClients201ApplicationJsonObject", void 0);
    return ProvisionNetworkClientsResponse;
}(SpeakeasyBase));
export { ProvisionNetworkClientsResponse };
