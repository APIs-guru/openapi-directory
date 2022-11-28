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
var AddLinodeConfigPathParams = /** @class */ (function (_super) {
    __extends(AddLinodeConfigPathParams, _super);
    function AddLinodeConfigPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linodeId" }),
        __metadata("design:type", Number)
    ], AddLinodeConfigPathParams.prototype, "linodeId", void 0);
    return AddLinodeConfigPathParams;
}(SpeakeasyBase));
export { AddLinodeConfigPathParams };
var AddLinodeConfigSecurity = /** @class */ (function (_super) {
    __extends(AddLinodeConfigSecurity, _super);
    function AddLinodeConfigSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], AddLinodeConfigSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], AddLinodeConfigSecurity.prototype, "oauth", void 0);
    return AddLinodeConfigSecurity;
}(SpeakeasyBase));
export { AddLinodeConfigSecurity };
var AddLinodeConfigDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(AddLinodeConfigDefaultApplicationJson, _super);
    function AddLinodeConfigDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], AddLinodeConfigDefaultApplicationJson.prototype, "errors", void 0);
    return AddLinodeConfigDefaultApplicationJson;
}(SpeakeasyBase));
export { AddLinodeConfigDefaultApplicationJson };
var AddLinodeConfigRequest = /** @class */ (function (_super) {
    __extends(AddLinodeConfigRequest, _super);
    function AddLinodeConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddLinodeConfigPathParams)
    ], AddLinodeConfigRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.LinodeConfigInput)
    ], AddLinodeConfigRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddLinodeConfigSecurity)
    ], AddLinodeConfigRequest.prototype, "security", void 0);
    return AddLinodeConfigRequest;
}(SpeakeasyBase));
export { AddLinodeConfigRequest };
var AddLinodeConfigResponse = /** @class */ (function (_super) {
    __extends(AddLinodeConfigResponse, _super);
    function AddLinodeConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AddLinodeConfigResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LinodeConfig)
    ], AddLinodeConfigResponse.prototype, "linodeConfig", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AddLinodeConfigResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddLinodeConfigDefaultApplicationJson)
    ], AddLinodeConfigResponse.prototype, "addLinodeConfigDefaultApplicationJsonObject", void 0);
    return AddLinodeConfigResponse;
}(SpeakeasyBase));
export { AddLinodeConfigResponse };
