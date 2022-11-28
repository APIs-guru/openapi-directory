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
var LoggingProjectsLocationsOperationsCancelPathParams = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsOperationsCancelPathParams, _super);
    function LoggingProjectsLocationsOperationsCancelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsOperationsCancelPathParams.prototype, "name", void 0);
    return LoggingProjectsLocationsOperationsCancelPathParams;
}(SpeakeasyBase));
export { LoggingProjectsLocationsOperationsCancelPathParams };
var LoggingProjectsLocationsOperationsCancelQueryParams = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsOperationsCancelQueryParams, _super);
    function LoggingProjectsLocationsOperationsCancelQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsOperationsCancelQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsOperationsCancelQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsOperationsCancelQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsOperationsCancelQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsOperationsCancelQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsOperationsCancelQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsOperationsCancelQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], LoggingProjectsLocationsOperationsCancelQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsOperationsCancelQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsOperationsCancelQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsOperationsCancelQueryParams.prototype, "uploadProtocol", void 0);
    return LoggingProjectsLocationsOperationsCancelQueryParams;
}(SpeakeasyBase));
export { LoggingProjectsLocationsOperationsCancelQueryParams };
var LoggingProjectsLocationsOperationsCancelSecurityOption1 = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsOperationsCancelSecurityOption1, _super);
    function LoggingProjectsLocationsOperationsCancelSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsLocationsOperationsCancelSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsLocationsOperationsCancelSecurityOption1.prototype, "oauth2c", void 0);
    return LoggingProjectsLocationsOperationsCancelSecurityOption1;
}(SpeakeasyBase));
export { LoggingProjectsLocationsOperationsCancelSecurityOption1 };
var LoggingProjectsLocationsOperationsCancelSecurityOption2 = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsOperationsCancelSecurityOption2, _super);
    function LoggingProjectsLocationsOperationsCancelSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsLocationsOperationsCancelSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsLocationsOperationsCancelSecurityOption2.prototype, "oauth2c", void 0);
    return LoggingProjectsLocationsOperationsCancelSecurityOption2;
}(SpeakeasyBase));
export { LoggingProjectsLocationsOperationsCancelSecurityOption2 };
var LoggingProjectsLocationsOperationsCancelSecurity = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsOperationsCancelSecurity, _super);
    function LoggingProjectsLocationsOperationsCancelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsLocationsOperationsCancelSecurityOption1)
    ], LoggingProjectsLocationsOperationsCancelSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsLocationsOperationsCancelSecurityOption2)
    ], LoggingProjectsLocationsOperationsCancelSecurity.prototype, "option2", void 0);
    return LoggingProjectsLocationsOperationsCancelSecurity;
}(SpeakeasyBase));
export { LoggingProjectsLocationsOperationsCancelSecurity };
var LoggingProjectsLocationsOperationsCancelRequest = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsOperationsCancelRequest, _super);
    function LoggingProjectsLocationsOperationsCancelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LoggingProjectsLocationsOperationsCancelPathParams)
    ], LoggingProjectsLocationsOperationsCancelRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LoggingProjectsLocationsOperationsCancelQueryParams)
    ], LoggingProjectsLocationsOperationsCancelRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], LoggingProjectsLocationsOperationsCancelRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LoggingProjectsLocationsOperationsCancelSecurity)
    ], LoggingProjectsLocationsOperationsCancelRequest.prototype, "security", void 0);
    return LoggingProjectsLocationsOperationsCancelRequest;
}(SpeakeasyBase));
export { LoggingProjectsLocationsOperationsCancelRequest };
var LoggingProjectsLocationsOperationsCancelResponse = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsOperationsCancelResponse, _super);
    function LoggingProjectsLocationsOperationsCancelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsOperationsCancelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], LoggingProjectsLocationsOperationsCancelResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], LoggingProjectsLocationsOperationsCancelResponse.prototype, "statusCode", void 0);
    return LoggingProjectsLocationsOperationsCancelResponse;
}(SpeakeasyBase));
export { LoggingProjectsLocationsOperationsCancelResponse };
