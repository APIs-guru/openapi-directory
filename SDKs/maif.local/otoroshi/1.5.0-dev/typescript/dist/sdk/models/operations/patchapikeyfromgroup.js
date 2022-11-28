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
var PatchApiKeyFromGroupPathParams = /** @class */ (function (_super) {
    __extends(PatchApiKeyFromGroupPathParams, _super);
    function PatchApiKeyFromGroupPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clientId" }),
        __metadata("design:type", String)
    ], PatchApiKeyFromGroupPathParams.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" }),
        __metadata("design:type", String)
    ], PatchApiKeyFromGroupPathParams.prototype, "groupId", void 0);
    return PatchApiKeyFromGroupPathParams;
}(SpeakeasyBase));
export { PatchApiKeyFromGroupPathParams };
var PatchApiKeyFromGroupSecurity = /** @class */ (function (_super) {
    __extends(PatchApiKeyFromGroupSecurity, _super);
    function PatchApiKeyFromGroupSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeOtoroshiAuth)
    ], PatchApiKeyFromGroupSecurity.prototype, "otoroshiAuth", void 0);
    return PatchApiKeyFromGroupSecurity;
}(SpeakeasyBase));
export { PatchApiKeyFromGroupSecurity };
var PatchApiKeyFromGroupRequest = /** @class */ (function (_super) {
    __extends(PatchApiKeyFromGroupRequest, _super);
    function PatchApiKeyFromGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PatchApiKeyFromGroupPathParams)
    ], PatchApiKeyFromGroupRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.Patch }),
        __metadata("design:type", Array)
    ], PatchApiKeyFromGroupRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PatchApiKeyFromGroupSecurity)
    ], PatchApiKeyFromGroupRequest.prototype, "security", void 0);
    return PatchApiKeyFromGroupRequest;
}(SpeakeasyBase));
export { PatchApiKeyFromGroupRequest };
var PatchApiKeyFromGroupResponse = /** @class */ (function (_super) {
    __extends(PatchApiKeyFromGroupResponse, _super);
    function PatchApiKeyFromGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiKey)
    ], PatchApiKeyFromGroupResponse.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PatchApiKeyFromGroupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PatchApiKeyFromGroupResponse.prototype, "statusCode", void 0);
    return PatchApiKeyFromGroupResponse;
}(SpeakeasyBase));
export { PatchApiKeyFromGroupResponse };
