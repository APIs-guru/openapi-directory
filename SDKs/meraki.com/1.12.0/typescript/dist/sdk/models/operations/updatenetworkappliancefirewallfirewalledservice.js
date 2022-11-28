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
var UpdateNetworkApplianceFirewallFirewalledServicePathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceFirewallFirewalledServicePathParams, _super);
    function UpdateNetworkApplianceFirewallFirewalledServicePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceFirewallFirewalledServicePathParams.prototype, "networkId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=service" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceFirewallFirewalledServicePathParams.prototype, "service", void 0);
    return UpdateNetworkApplianceFirewallFirewalledServicePathParams;
}(SpeakeasyBase));
export { UpdateNetworkApplianceFirewallFirewalledServicePathParams };
export var UpdateNetworkApplianceFirewallFirewalledServiceRequestBodyAccessEnum;
(function (UpdateNetworkApplianceFirewallFirewalledServiceRequestBodyAccessEnum) {
    UpdateNetworkApplianceFirewallFirewalledServiceRequestBodyAccessEnum["Blocked"] = "blocked";
    UpdateNetworkApplianceFirewallFirewalledServiceRequestBodyAccessEnum["Restricted"] = "restricted";
    UpdateNetworkApplianceFirewallFirewalledServiceRequestBodyAccessEnum["Unrestricted"] = "unrestricted";
})(UpdateNetworkApplianceFirewallFirewalledServiceRequestBodyAccessEnum || (UpdateNetworkApplianceFirewallFirewalledServiceRequestBodyAccessEnum = {}));
var UpdateNetworkApplianceFirewallFirewalledServiceRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceFirewallFirewalledServiceRequestBody, _super);
    function UpdateNetworkApplianceFirewallFirewalledServiceRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=access" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceFirewallFirewalledServiceRequestBody.prototype, "access", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowedIps" }),
        __metadata("design:type", Array)
    ], UpdateNetworkApplianceFirewallFirewalledServiceRequestBody.prototype, "allowedIps", void 0);
    return UpdateNetworkApplianceFirewallFirewalledServiceRequestBody;
}(SpeakeasyBase));
export { UpdateNetworkApplianceFirewallFirewalledServiceRequestBody };
var UpdateNetworkApplianceFirewallFirewalledServiceRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceFirewallFirewalledServiceRequest, _super);
    function UpdateNetworkApplianceFirewallFirewalledServiceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNetworkApplianceFirewallFirewalledServicePathParams)
    ], UpdateNetworkApplianceFirewallFirewalledServiceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkApplianceFirewallFirewalledServiceRequestBody)
    ], UpdateNetworkApplianceFirewallFirewalledServiceRequest.prototype, "request", void 0);
    return UpdateNetworkApplianceFirewallFirewalledServiceRequest;
}(SpeakeasyBase));
export { UpdateNetworkApplianceFirewallFirewalledServiceRequest };
var UpdateNetworkApplianceFirewallFirewalledServiceResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceFirewallFirewalledServiceResponse, _super);
    function UpdateNetworkApplianceFirewallFirewalledServiceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceFirewallFirewalledServiceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNetworkApplianceFirewallFirewalledServiceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateNetworkApplianceFirewallFirewalledServiceResponse.prototype, "updateNetworkApplianceFirewallFirewalledService200ApplicationJsonObject", void 0);
    return UpdateNetworkApplianceFirewallFirewalledServiceResponse;
}(SpeakeasyBase));
export { UpdateNetworkApplianceFirewallFirewalledServiceResponse };
