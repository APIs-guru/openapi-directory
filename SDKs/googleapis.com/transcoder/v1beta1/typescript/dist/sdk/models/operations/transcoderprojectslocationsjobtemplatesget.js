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
var TranscoderProjectsLocationsJobTemplatesGetPathParams = /** @class */ (function (_super) {
    __extends(TranscoderProjectsLocationsJobTemplatesGetPathParams, _super);
    function TranscoderProjectsLocationsJobTemplatesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], TranscoderProjectsLocationsJobTemplatesGetPathParams.prototype, "name", void 0);
    return TranscoderProjectsLocationsJobTemplatesGetPathParams;
}(SpeakeasyBase));
export { TranscoderProjectsLocationsJobTemplatesGetPathParams };
var TranscoderProjectsLocationsJobTemplatesGetQueryParams = /** @class */ (function (_super) {
    __extends(TranscoderProjectsLocationsJobTemplatesGetQueryParams, _super);
    function TranscoderProjectsLocationsJobTemplatesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TranscoderProjectsLocationsJobTemplatesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TranscoderProjectsLocationsJobTemplatesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TranscoderProjectsLocationsJobTemplatesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TranscoderProjectsLocationsJobTemplatesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TranscoderProjectsLocationsJobTemplatesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TranscoderProjectsLocationsJobTemplatesGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TranscoderProjectsLocationsJobTemplatesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TranscoderProjectsLocationsJobTemplatesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TranscoderProjectsLocationsJobTemplatesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TranscoderProjectsLocationsJobTemplatesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TranscoderProjectsLocationsJobTemplatesGetQueryParams.prototype, "uploadProtocol", void 0);
    return TranscoderProjectsLocationsJobTemplatesGetQueryParams;
}(SpeakeasyBase));
export { TranscoderProjectsLocationsJobTemplatesGetQueryParams };
var TranscoderProjectsLocationsJobTemplatesGetSecurity = /** @class */ (function (_super) {
    __extends(TranscoderProjectsLocationsJobTemplatesGetSecurity, _super);
    function TranscoderProjectsLocationsJobTemplatesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TranscoderProjectsLocationsJobTemplatesGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TranscoderProjectsLocationsJobTemplatesGetSecurity.prototype, "oauth2c", void 0);
    return TranscoderProjectsLocationsJobTemplatesGetSecurity;
}(SpeakeasyBase));
export { TranscoderProjectsLocationsJobTemplatesGetSecurity };
var TranscoderProjectsLocationsJobTemplatesGetRequest = /** @class */ (function (_super) {
    __extends(TranscoderProjectsLocationsJobTemplatesGetRequest, _super);
    function TranscoderProjectsLocationsJobTemplatesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", TranscoderProjectsLocationsJobTemplatesGetPathParams)
    ], TranscoderProjectsLocationsJobTemplatesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", TranscoderProjectsLocationsJobTemplatesGetQueryParams)
    ], TranscoderProjectsLocationsJobTemplatesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", TranscoderProjectsLocationsJobTemplatesGetSecurity)
    ], TranscoderProjectsLocationsJobTemplatesGetRequest.prototype, "security", void 0);
    return TranscoderProjectsLocationsJobTemplatesGetRequest;
}(SpeakeasyBase));
export { TranscoderProjectsLocationsJobTemplatesGetRequest };
var TranscoderProjectsLocationsJobTemplatesGetResponse = /** @class */ (function (_super) {
    __extends(TranscoderProjectsLocationsJobTemplatesGetResponse, _super);
    function TranscoderProjectsLocationsJobTemplatesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], TranscoderProjectsLocationsJobTemplatesGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.JobTemplate)
    ], TranscoderProjectsLocationsJobTemplatesGetResponse.prototype, "jobTemplate", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], TranscoderProjectsLocationsJobTemplatesGetResponse.prototype, "statusCode", void 0);
    return TranscoderProjectsLocationsJobTemplatesGetResponse;
}(SpeakeasyBase));
export { TranscoderProjectsLocationsJobTemplatesGetResponse };
