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
var UpdateNetworkSnmpPathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkSnmpPathParams, _super);
    function UpdateNetworkSnmpPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkSnmpPathParams.prototype, "networkId", void 0);
    return UpdateNetworkSnmpPathParams;
}(SpeakeasyBase));
export { UpdateNetworkSnmpPathParams };
export var UpdateNetworkSnmpRequestBodyAccessEnum;
(function (UpdateNetworkSnmpRequestBodyAccessEnum) {
    UpdateNetworkSnmpRequestBodyAccessEnum["None"] = "none";
    UpdateNetworkSnmpRequestBodyAccessEnum["Community"] = "community";
    UpdateNetworkSnmpRequestBodyAccessEnum["Users"] = "users";
})(UpdateNetworkSnmpRequestBodyAccessEnum || (UpdateNetworkSnmpRequestBodyAccessEnum = {}));
var UpdateNetworkSnmpRequestBodyUsers = /** @class */ (function (_super) {
    __extends(UpdateNetworkSnmpRequestBodyUsers, _super);
    function UpdateNetworkSnmpRequestBodyUsers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=passphrase" }),
        __metadata("design:type", String)
    ], UpdateNetworkSnmpRequestBodyUsers.prototype, "passphrase", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], UpdateNetworkSnmpRequestBodyUsers.prototype, "username", void 0);
    return UpdateNetworkSnmpRequestBodyUsers;
}(SpeakeasyBase));
export { UpdateNetworkSnmpRequestBodyUsers };
var UpdateNetworkSnmpRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkSnmpRequestBody, _super);
    function UpdateNetworkSnmpRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=access" }),
        __metadata("design:type", String)
    ], UpdateNetworkSnmpRequestBody.prototype, "access", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=communityString" }),
        __metadata("design:type", String)
    ], UpdateNetworkSnmpRequestBody.prototype, "communityString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=users", elemType: UpdateNetworkSnmpRequestBodyUsers }),
        __metadata("design:type", Array)
    ], UpdateNetworkSnmpRequestBody.prototype, "users", void 0);
    return UpdateNetworkSnmpRequestBody;
}(SpeakeasyBase));
export { UpdateNetworkSnmpRequestBody };
var UpdateNetworkSnmpRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkSnmpRequest, _super);
    function UpdateNetworkSnmpRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNetworkSnmpPathParams)
    ], UpdateNetworkSnmpRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkSnmpRequestBody)
    ], UpdateNetworkSnmpRequest.prototype, "request", void 0);
    return UpdateNetworkSnmpRequest;
}(SpeakeasyBase));
export { UpdateNetworkSnmpRequest };
var UpdateNetworkSnmpResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkSnmpResponse, _super);
    function UpdateNetworkSnmpResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNetworkSnmpResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNetworkSnmpResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateNetworkSnmpResponse.prototype, "updateNetworkSnmp200ApplicationJsonObject", void 0);
    return UpdateNetworkSnmpResponse;
}(SpeakeasyBase));
export { UpdateNetworkSnmpResponse };
