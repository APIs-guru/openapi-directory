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
var VideointelligenceProjectsLocationsOperationsGetPathParams = /** @class */ (function (_super) {
    __extends(VideointelligenceProjectsLocationsOperationsGetPathParams, _super);
    function VideointelligenceProjectsLocationsOperationsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], VideointelligenceProjectsLocationsOperationsGetPathParams.prototype, "name", void 0);
    return VideointelligenceProjectsLocationsOperationsGetPathParams;
}(SpeakeasyBase));
export { VideointelligenceProjectsLocationsOperationsGetPathParams };
var VideointelligenceProjectsLocationsOperationsGetQueryParams = /** @class */ (function (_super) {
    __extends(VideointelligenceProjectsLocationsOperationsGetQueryParams, _super);
    function VideointelligenceProjectsLocationsOperationsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], VideointelligenceProjectsLocationsOperationsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], VideointelligenceProjectsLocationsOperationsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], VideointelligenceProjectsLocationsOperationsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], VideointelligenceProjectsLocationsOperationsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], VideointelligenceProjectsLocationsOperationsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], VideointelligenceProjectsLocationsOperationsGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], VideointelligenceProjectsLocationsOperationsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], VideointelligenceProjectsLocationsOperationsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], VideointelligenceProjectsLocationsOperationsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], VideointelligenceProjectsLocationsOperationsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], VideointelligenceProjectsLocationsOperationsGetQueryParams.prototype, "uploadProtocol", void 0);
    return VideointelligenceProjectsLocationsOperationsGetQueryParams;
}(SpeakeasyBase));
export { VideointelligenceProjectsLocationsOperationsGetQueryParams };
var VideointelligenceProjectsLocationsOperationsGetSecurity = /** @class */ (function (_super) {
    __extends(VideointelligenceProjectsLocationsOperationsGetSecurity, _super);
    function VideointelligenceProjectsLocationsOperationsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VideointelligenceProjectsLocationsOperationsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VideointelligenceProjectsLocationsOperationsGetSecurity.prototype, "oauth2c", void 0);
    return VideointelligenceProjectsLocationsOperationsGetSecurity;
}(SpeakeasyBase));
export { VideointelligenceProjectsLocationsOperationsGetSecurity };
var VideointelligenceProjectsLocationsOperationsGetRequest = /** @class */ (function (_super) {
    __extends(VideointelligenceProjectsLocationsOperationsGetRequest, _super);
    function VideointelligenceProjectsLocationsOperationsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", VideointelligenceProjectsLocationsOperationsGetPathParams)
    ], VideointelligenceProjectsLocationsOperationsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", VideointelligenceProjectsLocationsOperationsGetQueryParams)
    ], VideointelligenceProjectsLocationsOperationsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", VideointelligenceProjectsLocationsOperationsGetSecurity)
    ], VideointelligenceProjectsLocationsOperationsGetRequest.prototype, "security", void 0);
    return VideointelligenceProjectsLocationsOperationsGetRequest;
}(SpeakeasyBase));
export { VideointelligenceProjectsLocationsOperationsGetRequest };
var VideointelligenceProjectsLocationsOperationsGetResponse = /** @class */ (function (_super) {
    __extends(VideointelligenceProjectsLocationsOperationsGetResponse, _super);
    function VideointelligenceProjectsLocationsOperationsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], VideointelligenceProjectsLocationsOperationsGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], VideointelligenceProjectsLocationsOperationsGetResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], VideointelligenceProjectsLocationsOperationsGetResponse.prototype, "statusCode", void 0);
    return VideointelligenceProjectsLocationsOperationsGetResponse;
}(SpeakeasyBase));
export { VideointelligenceProjectsLocationsOperationsGetResponse };
