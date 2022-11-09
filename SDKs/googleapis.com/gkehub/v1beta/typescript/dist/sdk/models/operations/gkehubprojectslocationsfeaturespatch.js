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
var GkehubProjectsLocationsFeaturesPatchPathParams = /** @class */ (function (_super) {
    __extends(GkehubProjectsLocationsFeaturesPatchPathParams, _super);
    function GkehubProjectsLocationsFeaturesPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsFeaturesPatchPathParams.prototype, "name", void 0);
    return GkehubProjectsLocationsFeaturesPatchPathParams;
}(SpeakeasyBase));
export { GkehubProjectsLocationsFeaturesPatchPathParams };
var GkehubProjectsLocationsFeaturesPatchQueryParams = /** @class */ (function (_super) {
    __extends(GkehubProjectsLocationsFeaturesPatchQueryParams, _super);
    function GkehubProjectsLocationsFeaturesPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsFeaturesPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsFeaturesPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsFeaturesPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsFeaturesPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsFeaturesPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsFeaturesPatchQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsFeaturesPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GkehubProjectsLocationsFeaturesPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsFeaturesPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=requestId" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsFeaturesPatchQueryParams.prototype, "requestId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsFeaturesPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsFeaturesPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsFeaturesPatchQueryParams.prototype, "uploadProtocol", void 0);
    return GkehubProjectsLocationsFeaturesPatchQueryParams;
}(SpeakeasyBase));
export { GkehubProjectsLocationsFeaturesPatchQueryParams };
var GkehubProjectsLocationsFeaturesPatchSecurity = /** @class */ (function (_super) {
    __extends(GkehubProjectsLocationsFeaturesPatchSecurity, _super);
    function GkehubProjectsLocationsFeaturesPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GkehubProjectsLocationsFeaturesPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GkehubProjectsLocationsFeaturesPatchSecurity.prototype, "oauth2c", void 0);
    return GkehubProjectsLocationsFeaturesPatchSecurity;
}(SpeakeasyBase));
export { GkehubProjectsLocationsFeaturesPatchSecurity };
var GkehubProjectsLocationsFeaturesPatchRequest = /** @class */ (function (_super) {
    __extends(GkehubProjectsLocationsFeaturesPatchRequest, _super);
    function GkehubProjectsLocationsFeaturesPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GkehubProjectsLocationsFeaturesPatchPathParams)
    ], GkehubProjectsLocationsFeaturesPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GkehubProjectsLocationsFeaturesPatchQueryParams)
    ], GkehubProjectsLocationsFeaturesPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Feature)
    ], GkehubProjectsLocationsFeaturesPatchRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GkehubProjectsLocationsFeaturesPatchSecurity)
    ], GkehubProjectsLocationsFeaturesPatchRequest.prototype, "security", void 0);
    return GkehubProjectsLocationsFeaturesPatchRequest;
}(SpeakeasyBase));
export { GkehubProjectsLocationsFeaturesPatchRequest };
var GkehubProjectsLocationsFeaturesPatchResponse = /** @class */ (function (_super) {
    __extends(GkehubProjectsLocationsFeaturesPatchResponse, _super);
    function GkehubProjectsLocationsFeaturesPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsFeaturesPatchResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Operation)
    ], GkehubProjectsLocationsFeaturesPatchResponse.prototype, "operation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GkehubProjectsLocationsFeaturesPatchResponse.prototype, "statusCode", void 0);
    return GkehubProjectsLocationsFeaturesPatchResponse;
}(SpeakeasyBase));
export { GkehubProjectsLocationsFeaturesPatchResponse };
