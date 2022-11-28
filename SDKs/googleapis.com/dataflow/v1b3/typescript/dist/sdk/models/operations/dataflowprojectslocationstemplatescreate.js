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
var DataflowProjectsLocationsTemplatesCreatePathParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsTemplatesCreatePathParams, _super);
    function DataflowProjectsLocationsTemplatesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsTemplatesCreatePathParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsTemplatesCreatePathParams.prototype, "projectId", void 0);
    return DataflowProjectsLocationsTemplatesCreatePathParams;
}(SpeakeasyBase));
export { DataflowProjectsLocationsTemplatesCreatePathParams };
var DataflowProjectsLocationsTemplatesCreateQueryParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsTemplatesCreateQueryParams, _super);
    function DataflowProjectsLocationsTemplatesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsTemplatesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsTemplatesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsTemplatesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsTemplatesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsTemplatesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsTemplatesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsTemplatesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataflowProjectsLocationsTemplatesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsTemplatesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsTemplatesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsTemplatesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return DataflowProjectsLocationsTemplatesCreateQueryParams;
}(SpeakeasyBase));
export { DataflowProjectsLocationsTemplatesCreateQueryParams };
var DataflowProjectsLocationsTemplatesCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsTemplatesCreateSecurityOption1, _super);
    function DataflowProjectsLocationsTemplatesCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsTemplatesCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsTemplatesCreateSecurityOption1.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsTemplatesCreateSecurityOption1;
}(SpeakeasyBase));
export { DataflowProjectsLocationsTemplatesCreateSecurityOption1 };
var DataflowProjectsLocationsTemplatesCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsTemplatesCreateSecurityOption2, _super);
    function DataflowProjectsLocationsTemplatesCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsTemplatesCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsTemplatesCreateSecurityOption2.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsTemplatesCreateSecurityOption2;
}(SpeakeasyBase));
export { DataflowProjectsLocationsTemplatesCreateSecurityOption2 };
var DataflowProjectsLocationsTemplatesCreateSecurityOption3 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsTemplatesCreateSecurityOption3, _super);
    function DataflowProjectsLocationsTemplatesCreateSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsTemplatesCreateSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsTemplatesCreateSecurityOption3.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsTemplatesCreateSecurityOption3;
}(SpeakeasyBase));
export { DataflowProjectsLocationsTemplatesCreateSecurityOption3 };
var DataflowProjectsLocationsTemplatesCreateSecurityOption4 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsTemplatesCreateSecurityOption4, _super);
    function DataflowProjectsLocationsTemplatesCreateSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsTemplatesCreateSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsTemplatesCreateSecurityOption4.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsTemplatesCreateSecurityOption4;
}(SpeakeasyBase));
export { DataflowProjectsLocationsTemplatesCreateSecurityOption4 };
var DataflowProjectsLocationsTemplatesCreateSecurity = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsTemplatesCreateSecurity, _super);
    function DataflowProjectsLocationsTemplatesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsTemplatesCreateSecurityOption1)
    ], DataflowProjectsLocationsTemplatesCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsTemplatesCreateSecurityOption2)
    ], DataflowProjectsLocationsTemplatesCreateSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsTemplatesCreateSecurityOption3)
    ], DataflowProjectsLocationsTemplatesCreateSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsTemplatesCreateSecurityOption4)
    ], DataflowProjectsLocationsTemplatesCreateSecurity.prototype, "option4", void 0);
    return DataflowProjectsLocationsTemplatesCreateSecurity;
}(SpeakeasyBase));
export { DataflowProjectsLocationsTemplatesCreateSecurity };
var DataflowProjectsLocationsTemplatesCreateRequest = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsTemplatesCreateRequest, _super);
    function DataflowProjectsLocationsTemplatesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsTemplatesCreatePathParams)
    ], DataflowProjectsLocationsTemplatesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsTemplatesCreateQueryParams)
    ], DataflowProjectsLocationsTemplatesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateJobFromTemplateRequest)
    ], DataflowProjectsLocationsTemplatesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsTemplatesCreateSecurity)
    ], DataflowProjectsLocationsTemplatesCreateRequest.prototype, "security", void 0);
    return DataflowProjectsLocationsTemplatesCreateRequest;
}(SpeakeasyBase));
export { DataflowProjectsLocationsTemplatesCreateRequest };
var DataflowProjectsLocationsTemplatesCreateResponse = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsTemplatesCreateResponse, _super);
    function DataflowProjectsLocationsTemplatesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsTemplatesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Job)
    ], DataflowProjectsLocationsTemplatesCreateResponse.prototype, "job", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataflowProjectsLocationsTemplatesCreateResponse.prototype, "statusCode", void 0);
    return DataflowProjectsLocationsTemplatesCreateResponse;
}(SpeakeasyBase));
export { DataflowProjectsLocationsTemplatesCreateResponse };
