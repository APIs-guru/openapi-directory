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
var DoubleclickbidmanagerQueriesReportsListPathParams = /** @class */ (function (_super) {
    __extends(DoubleclickbidmanagerQueriesReportsListPathParams, _super);
    function DoubleclickbidmanagerQueriesReportsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=queryId" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesReportsListPathParams.prototype, "queryId", void 0);
    return DoubleclickbidmanagerQueriesReportsListPathParams;
}(SpeakeasyBase));
export { DoubleclickbidmanagerQueriesReportsListPathParams };
var DoubleclickbidmanagerQueriesReportsListQueryParams = /** @class */ (function (_super) {
    __extends(DoubleclickbidmanagerQueriesReportsListQueryParams, _super);
    function DoubleclickbidmanagerQueriesReportsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesReportsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesReportsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesReportsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesReportsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesReportsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesReportsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesReportsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesReportsListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DoubleclickbidmanagerQueriesReportsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesReportsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DoubleclickbidmanagerQueriesReportsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesReportsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesReportsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesReportsListQueryParams.prototype, "uploadProtocol", void 0);
    return DoubleclickbidmanagerQueriesReportsListQueryParams;
}(SpeakeasyBase));
export { DoubleclickbidmanagerQueriesReportsListQueryParams };
var DoubleclickbidmanagerQueriesReportsListSecurity = /** @class */ (function (_super) {
    __extends(DoubleclickbidmanagerQueriesReportsListSecurity, _super);
    function DoubleclickbidmanagerQueriesReportsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DoubleclickbidmanagerQueriesReportsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DoubleclickbidmanagerQueriesReportsListSecurity.prototype, "oauth2c", void 0);
    return DoubleclickbidmanagerQueriesReportsListSecurity;
}(SpeakeasyBase));
export { DoubleclickbidmanagerQueriesReportsListSecurity };
var DoubleclickbidmanagerQueriesReportsListRequest = /** @class */ (function (_super) {
    __extends(DoubleclickbidmanagerQueriesReportsListRequest, _super);
    function DoubleclickbidmanagerQueriesReportsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DoubleclickbidmanagerQueriesReportsListPathParams)
    ], DoubleclickbidmanagerQueriesReportsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DoubleclickbidmanagerQueriesReportsListQueryParams)
    ], DoubleclickbidmanagerQueriesReportsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DoubleclickbidmanagerQueriesReportsListSecurity)
    ], DoubleclickbidmanagerQueriesReportsListRequest.prototype, "security", void 0);
    return DoubleclickbidmanagerQueriesReportsListRequest;
}(SpeakeasyBase));
export { DoubleclickbidmanagerQueriesReportsListRequest };
var DoubleclickbidmanagerQueriesReportsListResponse = /** @class */ (function (_super) {
    __extends(DoubleclickbidmanagerQueriesReportsListResponse, _super);
    function DoubleclickbidmanagerQueriesReportsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesReportsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListReportsResponse)
    ], DoubleclickbidmanagerQueriesReportsListResponse.prototype, "listReportsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DoubleclickbidmanagerQueriesReportsListResponse.prototype, "statusCode", void 0);
    return DoubleclickbidmanagerQueriesReportsListResponse;
}(SpeakeasyBase));
export { DoubleclickbidmanagerQueriesReportsListResponse };
