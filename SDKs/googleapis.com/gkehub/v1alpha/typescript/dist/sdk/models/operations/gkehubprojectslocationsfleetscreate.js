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
var GkehubProjectsLocationsFleetsCreatePathParams = /** @class */ (function (_super) {
    __extends(GkehubProjectsLocationsFleetsCreatePathParams, _super);
    function GkehubProjectsLocationsFleetsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsFleetsCreatePathParams.prototype, "parent", void 0);
    return GkehubProjectsLocationsFleetsCreatePathParams;
}(SpeakeasyBase));
export { GkehubProjectsLocationsFleetsCreatePathParams };
var GkehubProjectsLocationsFleetsCreateQueryParams = /** @class */ (function (_super) {
    __extends(GkehubProjectsLocationsFleetsCreateQueryParams, _super);
    function GkehubProjectsLocationsFleetsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsFleetsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsFleetsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsFleetsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsFleetsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsFleetsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsFleetsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsFleetsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GkehubProjectsLocationsFleetsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsFleetsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsFleetsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsFleetsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return GkehubProjectsLocationsFleetsCreateQueryParams;
}(SpeakeasyBase));
export { GkehubProjectsLocationsFleetsCreateQueryParams };
var GkehubProjectsLocationsFleetsCreateSecurity = /** @class */ (function (_super) {
    __extends(GkehubProjectsLocationsFleetsCreateSecurity, _super);
    function GkehubProjectsLocationsFleetsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GkehubProjectsLocationsFleetsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GkehubProjectsLocationsFleetsCreateSecurity.prototype, "oauth2c", void 0);
    return GkehubProjectsLocationsFleetsCreateSecurity;
}(SpeakeasyBase));
export { GkehubProjectsLocationsFleetsCreateSecurity };
var GkehubProjectsLocationsFleetsCreateRequest = /** @class */ (function (_super) {
    __extends(GkehubProjectsLocationsFleetsCreateRequest, _super);
    function GkehubProjectsLocationsFleetsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GkehubProjectsLocationsFleetsCreatePathParams)
    ], GkehubProjectsLocationsFleetsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GkehubProjectsLocationsFleetsCreateQueryParams)
    ], GkehubProjectsLocationsFleetsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.FleetInput)
    ], GkehubProjectsLocationsFleetsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GkehubProjectsLocationsFleetsCreateSecurity)
    ], GkehubProjectsLocationsFleetsCreateRequest.prototype, "security", void 0);
    return GkehubProjectsLocationsFleetsCreateRequest;
}(SpeakeasyBase));
export { GkehubProjectsLocationsFleetsCreateRequest };
var GkehubProjectsLocationsFleetsCreateResponse = /** @class */ (function (_super) {
    __extends(GkehubProjectsLocationsFleetsCreateResponse, _super);
    function GkehubProjectsLocationsFleetsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsFleetsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], GkehubProjectsLocationsFleetsCreateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GkehubProjectsLocationsFleetsCreateResponse.prototype, "statusCode", void 0);
    return GkehubProjectsLocationsFleetsCreateResponse;
}(SpeakeasyBase));
export { GkehubProjectsLocationsFleetsCreateResponse };
