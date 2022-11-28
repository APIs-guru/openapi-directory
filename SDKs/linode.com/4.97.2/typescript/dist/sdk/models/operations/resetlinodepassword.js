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
var ResetLinodePasswordPathParams = /** @class */ (function (_super) {
    __extends(ResetLinodePasswordPathParams, _super);
    function ResetLinodePasswordPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linodeId" }),
        __metadata("design:type", Number)
    ], ResetLinodePasswordPathParams.prototype, "linodeId", void 0);
    return ResetLinodePasswordPathParams;
}(SpeakeasyBase));
export { ResetLinodePasswordPathParams };
var ResetLinodePasswordSecurity = /** @class */ (function (_super) {
    __extends(ResetLinodePasswordSecurity, _super);
    function ResetLinodePasswordSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], ResetLinodePasswordSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], ResetLinodePasswordSecurity.prototype, "oauth", void 0);
    return ResetLinodePasswordSecurity;
}(SpeakeasyBase));
export { ResetLinodePasswordSecurity };
var ResetLinodePasswordDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(ResetLinodePasswordDefaultApplicationJson, _super);
    function ResetLinodePasswordDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], ResetLinodePasswordDefaultApplicationJson.prototype, "errors", void 0);
    return ResetLinodePasswordDefaultApplicationJson;
}(SpeakeasyBase));
export { ResetLinodePasswordDefaultApplicationJson };
var ResetLinodePasswordRequest = /** @class */ (function (_super) {
    __extends(ResetLinodePasswordRequest, _super);
    function ResetLinodePasswordRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ResetLinodePasswordPathParams)
    ], ResetLinodePasswordRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], ResetLinodePasswordRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ResetLinodePasswordSecurity)
    ], ResetLinodePasswordRequest.prototype, "security", void 0);
    return ResetLinodePasswordRequest;
}(SpeakeasyBase));
export { ResetLinodePasswordRequest };
var ResetLinodePasswordResponse = /** @class */ (function (_super) {
    __extends(ResetLinodePasswordResponse, _super);
    function ResetLinodePasswordResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ResetLinodePasswordResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ResetLinodePasswordResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ResetLinodePasswordResponse.prototype, "resetLinodePassword200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ResetLinodePasswordDefaultApplicationJson)
    ], ResetLinodePasswordResponse.prototype, "resetLinodePasswordDefaultApplicationJsonObject", void 0);
    return ResetLinodePasswordResponse;
}(SpeakeasyBase));
export { ResetLinodePasswordResponse };
