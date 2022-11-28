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
var GkebackupProjectsLocationsRestorePlansCreatePathParams = /** @class */ (function (_super) {
    __extends(GkebackupProjectsLocationsRestorePlansCreatePathParams, _super);
    function GkebackupProjectsLocationsRestorePlansCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansCreatePathParams.prototype, "parent", void 0);
    return GkebackupProjectsLocationsRestorePlansCreatePathParams;
}(SpeakeasyBase));
export { GkebackupProjectsLocationsRestorePlansCreatePathParams };
var GkebackupProjectsLocationsRestorePlansCreateQueryParams = /** @class */ (function (_super) {
    __extends(GkebackupProjectsLocationsRestorePlansCreateQueryParams, _super);
    function GkebackupProjectsLocationsRestorePlansCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GkebackupProjectsLocationsRestorePlansCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=restorePlanId" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansCreateQueryParams.prototype, "restorePlanId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansCreateQueryParams.prototype, "uploadProtocol", void 0);
    return GkebackupProjectsLocationsRestorePlansCreateQueryParams;
}(SpeakeasyBase));
export { GkebackupProjectsLocationsRestorePlansCreateQueryParams };
var GkebackupProjectsLocationsRestorePlansCreateSecurity = /** @class */ (function (_super) {
    __extends(GkebackupProjectsLocationsRestorePlansCreateSecurity, _super);
    function GkebackupProjectsLocationsRestorePlansCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GkebackupProjectsLocationsRestorePlansCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GkebackupProjectsLocationsRestorePlansCreateSecurity.prototype, "oauth2c", void 0);
    return GkebackupProjectsLocationsRestorePlansCreateSecurity;
}(SpeakeasyBase));
export { GkebackupProjectsLocationsRestorePlansCreateSecurity };
var GkebackupProjectsLocationsRestorePlansCreateRequest = /** @class */ (function (_super) {
    __extends(GkebackupProjectsLocationsRestorePlansCreateRequest, _super);
    function GkebackupProjectsLocationsRestorePlansCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GkebackupProjectsLocationsRestorePlansCreatePathParams)
    ], GkebackupProjectsLocationsRestorePlansCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GkebackupProjectsLocationsRestorePlansCreateQueryParams)
    ], GkebackupProjectsLocationsRestorePlansCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RestorePlanInput)
    ], GkebackupProjectsLocationsRestorePlansCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GkebackupProjectsLocationsRestorePlansCreateSecurity)
    ], GkebackupProjectsLocationsRestorePlansCreateRequest.prototype, "security", void 0);
    return GkebackupProjectsLocationsRestorePlansCreateRequest;
}(SpeakeasyBase));
export { GkebackupProjectsLocationsRestorePlansCreateRequest };
var GkebackupProjectsLocationsRestorePlansCreateResponse = /** @class */ (function (_super) {
    __extends(GkebackupProjectsLocationsRestorePlansCreateResponse, _super);
    function GkebackupProjectsLocationsRestorePlansCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], GkebackupProjectsLocationsRestorePlansCreateResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GkebackupProjectsLocationsRestorePlansCreateResponse.prototype, "statusCode", void 0);
    return GkebackupProjectsLocationsRestorePlansCreateResponse;
}(SpeakeasyBase));
export { GkebackupProjectsLocationsRestorePlansCreateResponse };
