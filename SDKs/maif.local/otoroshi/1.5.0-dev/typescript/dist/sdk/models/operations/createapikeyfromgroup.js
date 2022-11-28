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
var CreateApiKeyFromGroupPathParams = /** @class */ (function (_super) {
    __extends(CreateApiKeyFromGroupPathParams, _super);
    function CreateApiKeyFromGroupPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" }),
        __metadata("design:type", String)
    ], CreateApiKeyFromGroupPathParams.prototype, "groupId", void 0);
    return CreateApiKeyFromGroupPathParams;
}(SpeakeasyBase));
export { CreateApiKeyFromGroupPathParams };
var CreateApiKeyFromGroupSecurity = /** @class */ (function (_super) {
    __extends(CreateApiKeyFromGroupSecurity, _super);
    function CreateApiKeyFromGroupSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeOtoroshiAuth)
    ], CreateApiKeyFromGroupSecurity.prototype, "otoroshiAuth", void 0);
    return CreateApiKeyFromGroupSecurity;
}(SpeakeasyBase));
export { CreateApiKeyFromGroupSecurity };
var CreateApiKeyFromGroupRequest = /** @class */ (function (_super) {
    __extends(CreateApiKeyFromGroupRequest, _super);
    function CreateApiKeyFromGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateApiKeyFromGroupPathParams)
    ], CreateApiKeyFromGroupRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ApiKey)
    ], CreateApiKeyFromGroupRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateApiKeyFromGroupSecurity)
    ], CreateApiKeyFromGroupRequest.prototype, "security", void 0);
    return CreateApiKeyFromGroupRequest;
}(SpeakeasyBase));
export { CreateApiKeyFromGroupRequest };
var CreateApiKeyFromGroupResponse = /** @class */ (function (_super) {
    __extends(CreateApiKeyFromGroupResponse, _super);
    function CreateApiKeyFromGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiKey)
    ], CreateApiKeyFromGroupResponse.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateApiKeyFromGroupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateApiKeyFromGroupResponse.prototype, "statusCode", void 0);
    return CreateApiKeyFromGroupResponse;
}(SpeakeasyBase));
export { CreateApiKeyFromGroupResponse };
