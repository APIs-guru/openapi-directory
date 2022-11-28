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
var DataflowProjectsTemplatesCreatePathParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsTemplatesCreatePathParams, _super);
    function DataflowProjectsTemplatesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DataflowProjectsTemplatesCreatePathParams.prototype, "projectId", void 0);
    return DataflowProjectsTemplatesCreatePathParams;
}(SpeakeasyBase));
export { DataflowProjectsTemplatesCreatePathParams };
var DataflowProjectsTemplatesCreateQueryParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsTemplatesCreateQueryParams, _super);
    function DataflowProjectsTemplatesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataflowProjectsTemplatesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsTemplatesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataflowProjectsTemplatesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataflowProjectsTemplatesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataflowProjectsTemplatesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataflowProjectsTemplatesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsTemplatesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataflowProjectsTemplatesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataflowProjectsTemplatesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataflowProjectsTemplatesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataflowProjectsTemplatesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return DataflowProjectsTemplatesCreateQueryParams;
}(SpeakeasyBase));
export { DataflowProjectsTemplatesCreateQueryParams };
var DataflowProjectsTemplatesCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(DataflowProjectsTemplatesCreateSecurityOption1, _super);
    function DataflowProjectsTemplatesCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsTemplatesCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsTemplatesCreateSecurityOption1.prototype, "oauth2c", void 0);
    return DataflowProjectsTemplatesCreateSecurityOption1;
}(SpeakeasyBase));
export { DataflowProjectsTemplatesCreateSecurityOption1 };
var DataflowProjectsTemplatesCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(DataflowProjectsTemplatesCreateSecurityOption2, _super);
    function DataflowProjectsTemplatesCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsTemplatesCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsTemplatesCreateSecurityOption2.prototype, "oauth2c", void 0);
    return DataflowProjectsTemplatesCreateSecurityOption2;
}(SpeakeasyBase));
export { DataflowProjectsTemplatesCreateSecurityOption2 };
var DataflowProjectsTemplatesCreateSecurityOption3 = /** @class */ (function (_super) {
    __extends(DataflowProjectsTemplatesCreateSecurityOption3, _super);
    function DataflowProjectsTemplatesCreateSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsTemplatesCreateSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsTemplatesCreateSecurityOption3.prototype, "oauth2c", void 0);
    return DataflowProjectsTemplatesCreateSecurityOption3;
}(SpeakeasyBase));
export { DataflowProjectsTemplatesCreateSecurityOption3 };
var DataflowProjectsTemplatesCreateSecurityOption4 = /** @class */ (function (_super) {
    __extends(DataflowProjectsTemplatesCreateSecurityOption4, _super);
    function DataflowProjectsTemplatesCreateSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsTemplatesCreateSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsTemplatesCreateSecurityOption4.prototype, "oauth2c", void 0);
    return DataflowProjectsTemplatesCreateSecurityOption4;
}(SpeakeasyBase));
export { DataflowProjectsTemplatesCreateSecurityOption4 };
var DataflowProjectsTemplatesCreateSecurity = /** @class */ (function (_super) {
    __extends(DataflowProjectsTemplatesCreateSecurity, _super);
    function DataflowProjectsTemplatesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsTemplatesCreateSecurityOption1)
    ], DataflowProjectsTemplatesCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsTemplatesCreateSecurityOption2)
    ], DataflowProjectsTemplatesCreateSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsTemplatesCreateSecurityOption3)
    ], DataflowProjectsTemplatesCreateSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsTemplatesCreateSecurityOption4)
    ], DataflowProjectsTemplatesCreateSecurity.prototype, "option4", void 0);
    return DataflowProjectsTemplatesCreateSecurity;
}(SpeakeasyBase));
export { DataflowProjectsTemplatesCreateSecurity };
var DataflowProjectsTemplatesCreateRequest = /** @class */ (function (_super) {
    __extends(DataflowProjectsTemplatesCreateRequest, _super);
    function DataflowProjectsTemplatesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsTemplatesCreatePathParams)
    ], DataflowProjectsTemplatesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsTemplatesCreateQueryParams)
    ], DataflowProjectsTemplatesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateJobFromTemplateRequest)
    ], DataflowProjectsTemplatesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsTemplatesCreateSecurity)
    ], DataflowProjectsTemplatesCreateRequest.prototype, "security", void 0);
    return DataflowProjectsTemplatesCreateRequest;
}(SpeakeasyBase));
export { DataflowProjectsTemplatesCreateRequest };
var DataflowProjectsTemplatesCreateResponse = /** @class */ (function (_super) {
    __extends(DataflowProjectsTemplatesCreateResponse, _super);
    function DataflowProjectsTemplatesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataflowProjectsTemplatesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Job)
    ], DataflowProjectsTemplatesCreateResponse.prototype, "job", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataflowProjectsTemplatesCreateResponse.prototype, "statusCode", void 0);
    return DataflowProjectsTemplatesCreateResponse;
}(SpeakeasyBase));
export { DataflowProjectsTemplatesCreateResponse };
