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
var DataflowProjectsLocationsSqlValidatePathParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsSqlValidatePathParams, _super);
    function DataflowProjectsLocationsSqlValidatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsSqlValidatePathParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsSqlValidatePathParams.prototype, "projectId", void 0);
    return DataflowProjectsLocationsSqlValidatePathParams;
}(SpeakeasyBase));
export { DataflowProjectsLocationsSqlValidatePathParams };
var DataflowProjectsLocationsSqlValidateQueryParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsSqlValidateQueryParams, _super);
    function DataflowProjectsLocationsSqlValidateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsSqlValidateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsSqlValidateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsSqlValidateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsSqlValidateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsSqlValidateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsSqlValidateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsSqlValidateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataflowProjectsLocationsSqlValidateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsSqlValidateQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsSqlValidateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsSqlValidateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsSqlValidateQueryParams.prototype, "uploadProtocol", void 0);
    return DataflowProjectsLocationsSqlValidateQueryParams;
}(SpeakeasyBase));
export { DataflowProjectsLocationsSqlValidateQueryParams };
var DataflowProjectsLocationsSqlValidateSecurityOption1 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsSqlValidateSecurityOption1, _super);
    function DataflowProjectsLocationsSqlValidateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsSqlValidateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsSqlValidateSecurityOption1.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsSqlValidateSecurityOption1;
}(SpeakeasyBase));
export { DataflowProjectsLocationsSqlValidateSecurityOption1 };
var DataflowProjectsLocationsSqlValidateSecurityOption2 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsSqlValidateSecurityOption2, _super);
    function DataflowProjectsLocationsSqlValidateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsSqlValidateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsSqlValidateSecurityOption2.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsSqlValidateSecurityOption2;
}(SpeakeasyBase));
export { DataflowProjectsLocationsSqlValidateSecurityOption2 };
var DataflowProjectsLocationsSqlValidateSecurity = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsSqlValidateSecurity, _super);
    function DataflowProjectsLocationsSqlValidateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsSqlValidateSecurityOption1)
    ], DataflowProjectsLocationsSqlValidateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsSqlValidateSecurityOption2)
    ], DataflowProjectsLocationsSqlValidateSecurity.prototype, "option2", void 0);
    return DataflowProjectsLocationsSqlValidateSecurity;
}(SpeakeasyBase));
export { DataflowProjectsLocationsSqlValidateSecurity };
var DataflowProjectsLocationsSqlValidateRequest = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsSqlValidateRequest, _super);
    function DataflowProjectsLocationsSqlValidateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsSqlValidatePathParams)
    ], DataflowProjectsLocationsSqlValidateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsSqlValidateQueryParams)
    ], DataflowProjectsLocationsSqlValidateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsSqlValidateSecurity)
    ], DataflowProjectsLocationsSqlValidateRequest.prototype, "security", void 0);
    return DataflowProjectsLocationsSqlValidateRequest;
}(SpeakeasyBase));
export { DataflowProjectsLocationsSqlValidateRequest };
var DataflowProjectsLocationsSqlValidateResponse = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsSqlValidateResponse, _super);
    function DataflowProjectsLocationsSqlValidateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsSqlValidateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataflowProjectsLocationsSqlValidateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidateResponse)
    ], DataflowProjectsLocationsSqlValidateResponse.prototype, "validateResponse", void 0);
    return DataflowProjectsLocationsSqlValidateResponse;
}(SpeakeasyBase));
export { DataflowProjectsLocationsSqlValidateResponse };
