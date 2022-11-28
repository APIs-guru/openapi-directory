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
var SetProjectConfigPathParams = /** @class */ (function (_super) {
    __extends(SetProjectConfigPathParams, _super);
    function SetProjectConfigPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-id" }),
        __metadata("design:type", Number)
    ], SetProjectConfigPathParams.prototype, "projectId", void 0);
    return SetProjectConfigPathParams;
}(SpeakeasyBase));
export { SetProjectConfigPathParams };
var SetProjectConfigSecurity = /** @class */ (function (_super) {
    __extends(SetProjectConfigSecurity, _super);
    function SetProjectConfigSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeAccessToken)
    ], SetProjectConfigSecurity.prototype, "accessToken", void 0);
    return SetProjectConfigSecurity;
}(SpeakeasyBase));
export { SetProjectConfigSecurity };
var SetProjectConfigRequest = /** @class */ (function (_super) {
    __extends(SetProjectConfigRequest, _super);
    function SetProjectConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SetProjectConfigPathParams)
    ], SetProjectConfigRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-yaml" }),
        __metadata("design:type", String)
    ], SetProjectConfigRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SetProjectConfigSecurity)
    ], SetProjectConfigRequest.prototype, "security", void 0);
    return SetProjectConfigRequest;
}(SpeakeasyBase));
export { SetProjectConfigRequest };
var SetProjectConfigResponse = /** @class */ (function (_super) {
    __extends(SetProjectConfigResponse, _super);
    function SetProjectConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], SetProjectConfigResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SetProjectConfigResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SetProjectConfigResponse.prototype, "statusCode", void 0);
    return SetProjectConfigResponse;
}(SpeakeasyBase));
export { SetProjectConfigResponse };
