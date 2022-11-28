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
var UpdateNetworkSwitchDhcpServerPolicyPathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchDhcpServerPolicyPathParams, _super);
    function UpdateNetworkSwitchDhcpServerPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchDhcpServerPolicyPathParams.prototype, "networkId", void 0);
    return UpdateNetworkSwitchDhcpServerPolicyPathParams;
}(SpeakeasyBase));
export { UpdateNetworkSwitchDhcpServerPolicyPathParams };
export var UpdateNetworkSwitchDhcpServerPolicyRequestBodyDefaultPolicyEnum;
(function (UpdateNetworkSwitchDhcpServerPolicyRequestBodyDefaultPolicyEnum) {
    UpdateNetworkSwitchDhcpServerPolicyRequestBodyDefaultPolicyEnum["Allow"] = "allow";
    UpdateNetworkSwitchDhcpServerPolicyRequestBodyDefaultPolicyEnum["Block"] = "block";
})(UpdateNetworkSwitchDhcpServerPolicyRequestBodyDefaultPolicyEnum || (UpdateNetworkSwitchDhcpServerPolicyRequestBodyDefaultPolicyEnum = {}));
var UpdateNetworkSwitchDhcpServerPolicyRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchDhcpServerPolicyRequestBody, _super);
    function UpdateNetworkSwitchDhcpServerPolicyRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowedServers" }),
        __metadata("design:type", Array)
    ], UpdateNetworkSwitchDhcpServerPolicyRequestBody.prototype, "allowedServers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blockedServers" }),
        __metadata("design:type", Array)
    ], UpdateNetworkSwitchDhcpServerPolicyRequestBody.prototype, "blockedServers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultPolicy" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchDhcpServerPolicyRequestBody.prototype, "defaultPolicy", void 0);
    return UpdateNetworkSwitchDhcpServerPolicyRequestBody;
}(SpeakeasyBase));
export { UpdateNetworkSwitchDhcpServerPolicyRequestBody };
var UpdateNetworkSwitchDhcpServerPolicyRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchDhcpServerPolicyRequest, _super);
    function UpdateNetworkSwitchDhcpServerPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNetworkSwitchDhcpServerPolicyPathParams)
    ], UpdateNetworkSwitchDhcpServerPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkSwitchDhcpServerPolicyRequestBody)
    ], UpdateNetworkSwitchDhcpServerPolicyRequest.prototype, "request", void 0);
    return UpdateNetworkSwitchDhcpServerPolicyRequest;
}(SpeakeasyBase));
export { UpdateNetworkSwitchDhcpServerPolicyRequest };
var UpdateNetworkSwitchDhcpServerPolicyResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchDhcpServerPolicyResponse, _super);
    function UpdateNetworkSwitchDhcpServerPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchDhcpServerPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNetworkSwitchDhcpServerPolicyResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateNetworkSwitchDhcpServerPolicyResponse.prototype, "updateNetworkSwitchDhcpServerPolicy200ApplicationJsonObject", void 0);
    return UpdateNetworkSwitchDhcpServerPolicyResponse;
}(SpeakeasyBase));
export { UpdateNetworkSwitchDhcpServerPolicyResponse };
