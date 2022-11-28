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
var UpdateLinodeConfigPathParams = /** @class */ (function (_super) {
    __extends(UpdateLinodeConfigPathParams, _super);
    function UpdateLinodeConfigPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=configId" }),
        __metadata("design:type", Number)
    ], UpdateLinodeConfigPathParams.prototype, "configId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linodeId" }),
        __metadata("design:type", Number)
    ], UpdateLinodeConfigPathParams.prototype, "linodeId", void 0);
    return UpdateLinodeConfigPathParams;
}(SpeakeasyBase));
export { UpdateLinodeConfigPathParams };
var UpdateLinodeConfigSecurity = /** @class */ (function (_super) {
    __extends(UpdateLinodeConfigSecurity, _super);
    function UpdateLinodeConfigSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], UpdateLinodeConfigSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], UpdateLinodeConfigSecurity.prototype, "oauth", void 0);
    return UpdateLinodeConfigSecurity;
}(SpeakeasyBase));
export { UpdateLinodeConfigSecurity };
var UpdateLinodeConfigDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateLinodeConfigDefaultApplicationJson, _super);
    function UpdateLinodeConfigDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], UpdateLinodeConfigDefaultApplicationJson.prototype, "errors", void 0);
    return UpdateLinodeConfigDefaultApplicationJson;
}(SpeakeasyBase));
export { UpdateLinodeConfigDefaultApplicationJson };
var UpdateLinodeConfigRequest = /** @class */ (function (_super) {
    __extends(UpdateLinodeConfigRequest, _super);
    function UpdateLinodeConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateLinodeConfigPathParams)
    ], UpdateLinodeConfigRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], UpdateLinodeConfigRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateLinodeConfigSecurity)
    ], UpdateLinodeConfigRequest.prototype, "security", void 0);
    return UpdateLinodeConfigRequest;
}(SpeakeasyBase));
export { UpdateLinodeConfigRequest };
var UpdateLinodeConfigResponse = /** @class */ (function (_super) {
    __extends(UpdateLinodeConfigResponse, _super);
    function UpdateLinodeConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateLinodeConfigResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LinodeConfig)
    ], UpdateLinodeConfigResponse.prototype, "linodeConfig", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateLinodeConfigResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateLinodeConfigDefaultApplicationJson)
    ], UpdateLinodeConfigResponse.prototype, "updateLinodeConfigDefaultApplicationJsonObject", void 0);
    return UpdateLinodeConfigResponse;
}(SpeakeasyBase));
export { UpdateLinodeConfigResponse };
