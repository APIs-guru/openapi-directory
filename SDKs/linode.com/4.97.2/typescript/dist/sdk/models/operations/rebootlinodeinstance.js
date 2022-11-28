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
var RebootLinodeInstancePathParams = /** @class */ (function (_super) {
    __extends(RebootLinodeInstancePathParams, _super);
    function RebootLinodeInstancePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linodeId" }),
        __metadata("design:type", Number)
    ], RebootLinodeInstancePathParams.prototype, "linodeId", void 0);
    return RebootLinodeInstancePathParams;
}(SpeakeasyBase));
export { RebootLinodeInstancePathParams };
var RebootLinodeInstanceSecurity = /** @class */ (function (_super) {
    __extends(RebootLinodeInstanceSecurity, _super);
    function RebootLinodeInstanceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], RebootLinodeInstanceSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], RebootLinodeInstanceSecurity.prototype, "oauth", void 0);
    return RebootLinodeInstanceSecurity;
}(SpeakeasyBase));
export { RebootLinodeInstanceSecurity };
var RebootLinodeInstanceDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(RebootLinodeInstanceDefaultApplicationJson, _super);
    function RebootLinodeInstanceDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], RebootLinodeInstanceDefaultApplicationJson.prototype, "errors", void 0);
    return RebootLinodeInstanceDefaultApplicationJson;
}(SpeakeasyBase));
export { RebootLinodeInstanceDefaultApplicationJson };
var RebootLinodeInstanceRequest = /** @class */ (function (_super) {
    __extends(RebootLinodeInstanceRequest, _super);
    function RebootLinodeInstanceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RebootLinodeInstancePathParams)
    ], RebootLinodeInstanceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], RebootLinodeInstanceRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RebootLinodeInstanceSecurity)
    ], RebootLinodeInstanceRequest.prototype, "security", void 0);
    return RebootLinodeInstanceRequest;
}(SpeakeasyBase));
export { RebootLinodeInstanceRequest };
var RebootLinodeInstanceResponse = /** @class */ (function (_super) {
    __extends(RebootLinodeInstanceResponse, _super);
    function RebootLinodeInstanceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RebootLinodeInstanceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RebootLinodeInstanceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], RebootLinodeInstanceResponse.prototype, "rebootLinodeInstance200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RebootLinodeInstanceDefaultApplicationJson)
    ], RebootLinodeInstanceResponse.prototype, "rebootLinodeInstanceDefaultApplicationJsonObject", void 0);
    return RebootLinodeInstanceResponse;
}(SpeakeasyBase));
export { RebootLinodeInstanceResponse };
