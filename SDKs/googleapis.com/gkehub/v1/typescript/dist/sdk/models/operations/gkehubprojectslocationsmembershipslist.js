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
var GkehubProjectsLocationsMembershipsListPathParams = /** @class */ (function (_super) {
    __extends(GkehubProjectsLocationsMembershipsListPathParams, _super);
    function GkehubProjectsLocationsMembershipsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsListPathParams.prototype, "parent", void 0);
    return GkehubProjectsLocationsMembershipsListPathParams;
}(SpeakeasyBase));
export { GkehubProjectsLocationsMembershipsListPathParams };
var GkehubProjectsLocationsMembershipsListQueryParams = /** @class */ (function (_super) {
    __extends(GkehubProjectsLocationsMembershipsListQueryParams, _super);
    function GkehubProjectsLocationsMembershipsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], GkehubProjectsLocationsMembershipsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GkehubProjectsLocationsMembershipsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsListQueryParams.prototype, "uploadProtocol", void 0);
    return GkehubProjectsLocationsMembershipsListQueryParams;
}(SpeakeasyBase));
export { GkehubProjectsLocationsMembershipsListQueryParams };
var GkehubProjectsLocationsMembershipsListSecurity = /** @class */ (function (_super) {
    __extends(GkehubProjectsLocationsMembershipsListSecurity, _super);
    function GkehubProjectsLocationsMembershipsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GkehubProjectsLocationsMembershipsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GkehubProjectsLocationsMembershipsListSecurity.prototype, "oauth2c", void 0);
    return GkehubProjectsLocationsMembershipsListSecurity;
}(SpeakeasyBase));
export { GkehubProjectsLocationsMembershipsListSecurity };
var GkehubProjectsLocationsMembershipsListRequest = /** @class */ (function (_super) {
    __extends(GkehubProjectsLocationsMembershipsListRequest, _super);
    function GkehubProjectsLocationsMembershipsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GkehubProjectsLocationsMembershipsListPathParams)
    ], GkehubProjectsLocationsMembershipsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GkehubProjectsLocationsMembershipsListQueryParams)
    ], GkehubProjectsLocationsMembershipsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GkehubProjectsLocationsMembershipsListSecurity)
    ], GkehubProjectsLocationsMembershipsListRequest.prototype, "security", void 0);
    return GkehubProjectsLocationsMembershipsListRequest;
}(SpeakeasyBase));
export { GkehubProjectsLocationsMembershipsListRequest };
var GkehubProjectsLocationsMembershipsListResponse = /** @class */ (function (_super) {
    __extends(GkehubProjectsLocationsMembershipsListResponse, _super);
    function GkehubProjectsLocationsMembershipsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListMembershipsResponse)
    ], GkehubProjectsLocationsMembershipsListResponse.prototype, "listMembershipsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GkehubProjectsLocationsMembershipsListResponse.prototype, "statusCode", void 0);
    return GkehubProjectsLocationsMembershipsListResponse;
}(SpeakeasyBase));
export { GkehubProjectsLocationsMembershipsListResponse };
