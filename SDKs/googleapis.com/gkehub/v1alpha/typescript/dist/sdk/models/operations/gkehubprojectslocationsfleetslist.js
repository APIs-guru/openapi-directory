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
var GkehubProjectsLocationsFleetsListPathParams = /** @class */ (function (_super) {
    __extends(GkehubProjectsLocationsFleetsListPathParams, _super);
    function GkehubProjectsLocationsFleetsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsFleetsListPathParams.prototype, "parent", void 0);
    return GkehubProjectsLocationsFleetsListPathParams;
}(SpeakeasyBase));
export { GkehubProjectsLocationsFleetsListPathParams };
var GkehubProjectsLocationsFleetsListQueryParams = /** @class */ (function (_super) {
    __extends(GkehubProjectsLocationsFleetsListQueryParams, _super);
    function GkehubProjectsLocationsFleetsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsFleetsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsFleetsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsFleetsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsFleetsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsFleetsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsFleetsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsFleetsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], GkehubProjectsLocationsFleetsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsFleetsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GkehubProjectsLocationsFleetsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsFleetsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsFleetsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsFleetsListQueryParams.prototype, "uploadProtocol", void 0);
    return GkehubProjectsLocationsFleetsListQueryParams;
}(SpeakeasyBase));
export { GkehubProjectsLocationsFleetsListQueryParams };
var GkehubProjectsLocationsFleetsListSecurity = /** @class */ (function (_super) {
    __extends(GkehubProjectsLocationsFleetsListSecurity, _super);
    function GkehubProjectsLocationsFleetsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GkehubProjectsLocationsFleetsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GkehubProjectsLocationsFleetsListSecurity.prototype, "oauth2c", void 0);
    return GkehubProjectsLocationsFleetsListSecurity;
}(SpeakeasyBase));
export { GkehubProjectsLocationsFleetsListSecurity };
var GkehubProjectsLocationsFleetsListRequest = /** @class */ (function (_super) {
    __extends(GkehubProjectsLocationsFleetsListRequest, _super);
    function GkehubProjectsLocationsFleetsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GkehubProjectsLocationsFleetsListPathParams)
    ], GkehubProjectsLocationsFleetsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GkehubProjectsLocationsFleetsListQueryParams)
    ], GkehubProjectsLocationsFleetsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GkehubProjectsLocationsFleetsListSecurity)
    ], GkehubProjectsLocationsFleetsListRequest.prototype, "security", void 0);
    return GkehubProjectsLocationsFleetsListRequest;
}(SpeakeasyBase));
export { GkehubProjectsLocationsFleetsListRequest };
var GkehubProjectsLocationsFleetsListResponse = /** @class */ (function (_super) {
    __extends(GkehubProjectsLocationsFleetsListResponse, _super);
    function GkehubProjectsLocationsFleetsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsFleetsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListFleetsResponse)
    ], GkehubProjectsLocationsFleetsListResponse.prototype, "listFleetsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GkehubProjectsLocationsFleetsListResponse.prototype, "statusCode", void 0);
    return GkehubProjectsLocationsFleetsListResponse;
}(SpeakeasyBase));
export { GkehubProjectsLocationsFleetsListResponse };
