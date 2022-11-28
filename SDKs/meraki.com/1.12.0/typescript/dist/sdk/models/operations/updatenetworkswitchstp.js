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
var UpdateNetworkSwitchStpPathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchStpPathParams, _super);
    function UpdateNetworkSwitchStpPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchStpPathParams.prototype, "networkId", void 0);
    return UpdateNetworkSwitchStpPathParams;
}(SpeakeasyBase));
export { UpdateNetworkSwitchStpPathParams };
var UpdateNetworkSwitchStpRequestBodyStpBridgePriority = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchStpRequestBodyStpBridgePriority, _super);
    function UpdateNetworkSwitchStpRequestBodyStpBridgePriority() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stacks" }),
        __metadata("design:type", Array)
    ], UpdateNetworkSwitchStpRequestBodyStpBridgePriority.prototype, "stacks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stpPriority" }),
        __metadata("design:type", Number)
    ], UpdateNetworkSwitchStpRequestBodyStpBridgePriority.prototype, "stpPriority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=switchProfiles" }),
        __metadata("design:type", Array)
    ], UpdateNetworkSwitchStpRequestBodyStpBridgePriority.prototype, "switchProfiles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=switches" }),
        __metadata("design:type", Array)
    ], UpdateNetworkSwitchStpRequestBodyStpBridgePriority.prototype, "switches", void 0);
    return UpdateNetworkSwitchStpRequestBodyStpBridgePriority;
}(SpeakeasyBase));
export { UpdateNetworkSwitchStpRequestBodyStpBridgePriority };
var UpdateNetworkSwitchStpRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchStpRequestBody, _super);
    function UpdateNetworkSwitchStpRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rstpEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkSwitchStpRequestBody.prototype, "rstpEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stpBridgePriority", elemType: UpdateNetworkSwitchStpRequestBodyStpBridgePriority }),
        __metadata("design:type", Array)
    ], UpdateNetworkSwitchStpRequestBody.prototype, "stpBridgePriority", void 0);
    return UpdateNetworkSwitchStpRequestBody;
}(SpeakeasyBase));
export { UpdateNetworkSwitchStpRequestBody };
var UpdateNetworkSwitchStpRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchStpRequest, _super);
    function UpdateNetworkSwitchStpRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNetworkSwitchStpPathParams)
    ], UpdateNetworkSwitchStpRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkSwitchStpRequestBody)
    ], UpdateNetworkSwitchStpRequest.prototype, "request", void 0);
    return UpdateNetworkSwitchStpRequest;
}(SpeakeasyBase));
export { UpdateNetworkSwitchStpRequest };
var UpdateNetworkSwitchStpResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchStpResponse, _super);
    function UpdateNetworkSwitchStpResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchStpResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNetworkSwitchStpResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateNetworkSwitchStpResponse.prototype, "updateNetworkSwitchStp200ApplicationJsonObject", void 0);
    return UpdateNetworkSwitchStpResponse;
}(SpeakeasyBase));
export { UpdateNetworkSwitchStpResponse };
