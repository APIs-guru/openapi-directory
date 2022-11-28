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
import * as shared from "../shared";
var UpdateApiKeyFromGroupPathParams = /** @class */ (function (_super) {
    __extends(UpdateApiKeyFromGroupPathParams, _super);
    function UpdateApiKeyFromGroupPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clientId" }),
        __metadata("design:type", String)
    ], UpdateApiKeyFromGroupPathParams.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" }),
        __metadata("design:type", String)
    ], UpdateApiKeyFromGroupPathParams.prototype, "groupId", void 0);
    return UpdateApiKeyFromGroupPathParams;
}(SpeakeasyBase));
export { UpdateApiKeyFromGroupPathParams };
var UpdateApiKeyFromGroupSecurity = /** @class */ (function (_super) {
    __extends(UpdateApiKeyFromGroupSecurity, _super);
    function UpdateApiKeyFromGroupSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeOtoroshiAuth)
    ], UpdateApiKeyFromGroupSecurity.prototype, "otoroshiAuth", void 0);
    return UpdateApiKeyFromGroupSecurity;
}(SpeakeasyBase));
export { UpdateApiKeyFromGroupSecurity };
var UpdateApiKeyFromGroupRequest = /** @class */ (function (_super) {
    __extends(UpdateApiKeyFromGroupRequest, _super);
    function UpdateApiKeyFromGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateApiKeyFromGroupPathParams)
    ], UpdateApiKeyFromGroupRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ApiKey)
    ], UpdateApiKeyFromGroupRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateApiKeyFromGroupSecurity)
    ], UpdateApiKeyFromGroupRequest.prototype, "security", void 0);
    return UpdateApiKeyFromGroupRequest;
}(SpeakeasyBase));
export { UpdateApiKeyFromGroupRequest };
var UpdateApiKeyFromGroupResponse = /** @class */ (function (_super) {
    __extends(UpdateApiKeyFromGroupResponse, _super);
    function UpdateApiKeyFromGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiKey)
    ], UpdateApiKeyFromGroupResponse.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateApiKeyFromGroupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateApiKeyFromGroupResponse.prototype, "statusCode", void 0);
    return UpdateApiKeyFromGroupResponse;
}(SpeakeasyBase));
export { UpdateApiKeyFromGroupResponse };
