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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var TranscoderProjectsLocationsJobTemplatesCreatePathParams = /** @class */ (function (_super) {
    __extends(TranscoderProjectsLocationsJobTemplatesCreatePathParams, _super);
    function TranscoderProjectsLocationsJobTemplatesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], TranscoderProjectsLocationsJobTemplatesCreatePathParams.prototype, "parent", void 0);
    return TranscoderProjectsLocationsJobTemplatesCreatePathParams;
}(SpeakeasyBase));
export { TranscoderProjectsLocationsJobTemplatesCreatePathParams };
var TranscoderProjectsLocationsJobTemplatesCreateQueryParams = /** @class */ (function (_super) {
    __extends(TranscoderProjectsLocationsJobTemplatesCreateQueryParams, _super);
    function TranscoderProjectsLocationsJobTemplatesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TranscoderProjectsLocationsJobTemplatesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TranscoderProjectsLocationsJobTemplatesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TranscoderProjectsLocationsJobTemplatesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TranscoderProjectsLocationsJobTemplatesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TranscoderProjectsLocationsJobTemplatesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=jobTemplateId" }),
        __metadata("design:type", String)
    ], TranscoderProjectsLocationsJobTemplatesCreateQueryParams.prototype, "jobTemplateId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TranscoderProjectsLocationsJobTemplatesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TranscoderProjectsLocationsJobTemplatesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TranscoderProjectsLocationsJobTemplatesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TranscoderProjectsLocationsJobTemplatesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TranscoderProjectsLocationsJobTemplatesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TranscoderProjectsLocationsJobTemplatesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return TranscoderProjectsLocationsJobTemplatesCreateQueryParams;
}(SpeakeasyBase));
export { TranscoderProjectsLocationsJobTemplatesCreateQueryParams };
var TranscoderProjectsLocationsJobTemplatesCreateSecurity = /** @class */ (function (_super) {
    __extends(TranscoderProjectsLocationsJobTemplatesCreateSecurity, _super);
    function TranscoderProjectsLocationsJobTemplatesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TranscoderProjectsLocationsJobTemplatesCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TranscoderProjectsLocationsJobTemplatesCreateSecurity.prototype, "oauth2c", void 0);
    return TranscoderProjectsLocationsJobTemplatesCreateSecurity;
}(SpeakeasyBase));
export { TranscoderProjectsLocationsJobTemplatesCreateSecurity };
var TranscoderProjectsLocationsJobTemplatesCreateRequest = /** @class */ (function (_super) {
    __extends(TranscoderProjectsLocationsJobTemplatesCreateRequest, _super);
    function TranscoderProjectsLocationsJobTemplatesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", TranscoderProjectsLocationsJobTemplatesCreatePathParams)
    ], TranscoderProjectsLocationsJobTemplatesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", TranscoderProjectsLocationsJobTemplatesCreateQueryParams)
    ], TranscoderProjectsLocationsJobTemplatesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.JobTemplate)
    ], TranscoderProjectsLocationsJobTemplatesCreateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", TranscoderProjectsLocationsJobTemplatesCreateSecurity)
    ], TranscoderProjectsLocationsJobTemplatesCreateRequest.prototype, "security", void 0);
    return TranscoderProjectsLocationsJobTemplatesCreateRequest;
}(SpeakeasyBase));
export { TranscoderProjectsLocationsJobTemplatesCreateRequest };
var TranscoderProjectsLocationsJobTemplatesCreateResponse = /** @class */ (function (_super) {
    __extends(TranscoderProjectsLocationsJobTemplatesCreateResponse, _super);
    function TranscoderProjectsLocationsJobTemplatesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], TranscoderProjectsLocationsJobTemplatesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.JobTemplate)
    ], TranscoderProjectsLocationsJobTemplatesCreateResponse.prototype, "jobTemplate", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], TranscoderProjectsLocationsJobTemplatesCreateResponse.prototype, "statusCode", void 0);
    return TranscoderProjectsLocationsJobTemplatesCreateResponse;
}(SpeakeasyBase));
export { TranscoderProjectsLocationsJobTemplatesCreateResponse };
