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
var UpdateNetworkApplianceVpnSiteToSiteVpnPathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceVpnSiteToSiteVpnPathParams, _super);
    function UpdateNetworkApplianceVpnSiteToSiteVpnPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceVpnSiteToSiteVpnPathParams.prototype, "networkId", void 0);
    return UpdateNetworkApplianceVpnSiteToSiteVpnPathParams;
}(SpeakeasyBase));
export { UpdateNetworkApplianceVpnSiteToSiteVpnPathParams };
var UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs, _super);
    function UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hubId" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs.prototype, "hubId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=useDefaultRoute" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs.prototype, "useDefaultRoute", void 0);
    return UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs;
}(SpeakeasyBase));
export { UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs };
export var UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyModeEnum;
(function (UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyModeEnum) {
    UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyModeEnum["None"] = "none";
    UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyModeEnum["Spoke"] = "spoke";
    UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyModeEnum["Hub"] = "hub";
})(UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyModeEnum || (UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyModeEnum = {}));
var UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets, _super);
    function UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=localSubnet" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets.prototype, "localSubnet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=useVpn" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets.prototype, "useVpn", void 0);
    return UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets;
}(SpeakeasyBase));
export { UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets };
var UpdateNetworkApplianceVpnSiteToSiteVpnRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceVpnSiteToSiteVpnRequestBody, _super);
    function UpdateNetworkApplianceVpnSiteToSiteVpnRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hubs", elemType: UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs }),
        __metadata("design:type", Array)
    ], UpdateNetworkApplianceVpnSiteToSiteVpnRequestBody.prototype, "hubs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mode" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceVpnSiteToSiteVpnRequestBody.prototype, "mode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subnets", elemType: UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets }),
        __metadata("design:type", Array)
    ], UpdateNetworkApplianceVpnSiteToSiteVpnRequestBody.prototype, "subnets", void 0);
    return UpdateNetworkApplianceVpnSiteToSiteVpnRequestBody;
}(SpeakeasyBase));
export { UpdateNetworkApplianceVpnSiteToSiteVpnRequestBody };
var UpdateNetworkApplianceVpnSiteToSiteVpnRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceVpnSiteToSiteVpnRequest, _super);
    function UpdateNetworkApplianceVpnSiteToSiteVpnRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNetworkApplianceVpnSiteToSiteVpnPathParams)
    ], UpdateNetworkApplianceVpnSiteToSiteVpnRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkApplianceVpnSiteToSiteVpnRequestBody)
    ], UpdateNetworkApplianceVpnSiteToSiteVpnRequest.prototype, "request", void 0);
    return UpdateNetworkApplianceVpnSiteToSiteVpnRequest;
}(SpeakeasyBase));
export { UpdateNetworkApplianceVpnSiteToSiteVpnRequest };
var UpdateNetworkApplianceVpnSiteToSiteVpnResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceVpnSiteToSiteVpnResponse, _super);
    function UpdateNetworkApplianceVpnSiteToSiteVpnResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceVpnSiteToSiteVpnResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNetworkApplianceVpnSiteToSiteVpnResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateNetworkApplianceVpnSiteToSiteVpnResponse.prototype, "updateNetworkApplianceVpnSiteToSiteVpn200ApplicationJsonObject", void 0);
    return UpdateNetworkApplianceVpnSiteToSiteVpnResponse;
}(SpeakeasyBase));
export { UpdateNetworkApplianceVpnSiteToSiteVpnResponse };
