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
var DoubleclickbidmanagerQueriesListQueryParams = /** @class */ (function (_super) {
    __extends(DoubleclickbidmanagerQueriesListQueryParams, _super);
    function DoubleclickbidmanagerQueriesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DoubleclickbidmanagerQueriesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DoubleclickbidmanagerQueriesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesListQueryParams.prototype, "uploadProtocol", void 0);
    return DoubleclickbidmanagerQueriesListQueryParams;
}(SpeakeasyBase));
export { DoubleclickbidmanagerQueriesListQueryParams };
var DoubleclickbidmanagerQueriesListSecurity = /** @class */ (function (_super) {
    __extends(DoubleclickbidmanagerQueriesListSecurity, _super);
    function DoubleclickbidmanagerQueriesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DoubleclickbidmanagerQueriesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DoubleclickbidmanagerQueriesListSecurity.prototype, "oauth2c", void 0);
    return DoubleclickbidmanagerQueriesListSecurity;
}(SpeakeasyBase));
export { DoubleclickbidmanagerQueriesListSecurity };
var DoubleclickbidmanagerQueriesListRequest = /** @class */ (function (_super) {
    __extends(DoubleclickbidmanagerQueriesListRequest, _super);
    function DoubleclickbidmanagerQueriesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DoubleclickbidmanagerQueriesListQueryParams)
    ], DoubleclickbidmanagerQueriesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DoubleclickbidmanagerQueriesListSecurity)
    ], DoubleclickbidmanagerQueriesListRequest.prototype, "security", void 0);
    return DoubleclickbidmanagerQueriesListRequest;
}(SpeakeasyBase));
export { DoubleclickbidmanagerQueriesListRequest };
var DoubleclickbidmanagerQueriesListResponse = /** @class */ (function (_super) {
    __extends(DoubleclickbidmanagerQueriesListResponse, _super);
    function DoubleclickbidmanagerQueriesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListQueriesResponse)
    ], DoubleclickbidmanagerQueriesListResponse.prototype, "listQueriesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DoubleclickbidmanagerQueriesListResponse.prototype, "statusCode", void 0);
    return DoubleclickbidmanagerQueriesListResponse;
}(SpeakeasyBase));
export { DoubleclickbidmanagerQueriesListResponse };
