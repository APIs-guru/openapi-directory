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
var GkehubProjectsLocationsMembershipsCreatePathParams = /** @class */ (function (_super) {
    __extends(GkehubProjectsLocationsMembershipsCreatePathParams, _super);
    function GkehubProjectsLocationsMembershipsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsCreatePathParams.prototype, "parent", void 0);
    return GkehubProjectsLocationsMembershipsCreatePathParams;
}(SpeakeasyBase));
export { GkehubProjectsLocationsMembershipsCreatePathParams };
var GkehubProjectsLocationsMembershipsCreateQueryParams = /** @class */ (function (_super) {
    __extends(GkehubProjectsLocationsMembershipsCreateQueryParams, _super);
    function GkehubProjectsLocationsMembershipsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=membershipId" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsCreateQueryParams.prototype, "membershipId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GkehubProjectsLocationsMembershipsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return GkehubProjectsLocationsMembershipsCreateQueryParams;
}(SpeakeasyBase));
export { GkehubProjectsLocationsMembershipsCreateQueryParams };
var GkehubProjectsLocationsMembershipsCreateSecurity = /** @class */ (function (_super) {
    __extends(GkehubProjectsLocationsMembershipsCreateSecurity, _super);
    function GkehubProjectsLocationsMembershipsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GkehubProjectsLocationsMembershipsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GkehubProjectsLocationsMembershipsCreateSecurity.prototype, "oauth2c", void 0);
    return GkehubProjectsLocationsMembershipsCreateSecurity;
}(SpeakeasyBase));
export { GkehubProjectsLocationsMembershipsCreateSecurity };
var GkehubProjectsLocationsMembershipsCreateRequest = /** @class */ (function (_super) {
    __extends(GkehubProjectsLocationsMembershipsCreateRequest, _super);
    function GkehubProjectsLocationsMembershipsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GkehubProjectsLocationsMembershipsCreatePathParams)
    ], GkehubProjectsLocationsMembershipsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GkehubProjectsLocationsMembershipsCreateQueryParams)
    ], GkehubProjectsLocationsMembershipsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.MembershipInput)
    ], GkehubProjectsLocationsMembershipsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GkehubProjectsLocationsMembershipsCreateSecurity)
    ], GkehubProjectsLocationsMembershipsCreateRequest.prototype, "security", void 0);
    return GkehubProjectsLocationsMembershipsCreateRequest;
}(SpeakeasyBase));
export { GkehubProjectsLocationsMembershipsCreateRequest };
var GkehubProjectsLocationsMembershipsCreateResponse = /** @class */ (function (_super) {
    __extends(GkehubProjectsLocationsMembershipsCreateResponse, _super);
    function GkehubProjectsLocationsMembershipsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], GkehubProjectsLocationsMembershipsCreateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GkehubProjectsLocationsMembershipsCreateResponse.prototype, "statusCode", void 0);
    return GkehubProjectsLocationsMembershipsCreateResponse;
}(SpeakeasyBase));
export { GkehubProjectsLocationsMembershipsCreateResponse };
