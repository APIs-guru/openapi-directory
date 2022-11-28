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
var DoubleclickbidmanagerQueriesGetPathParams = /** @class */ (function (_super) {
    __extends(DoubleclickbidmanagerQueriesGetPathParams, _super);
    function DoubleclickbidmanagerQueriesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=queryId" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesGetPathParams.prototype, "queryId", void 0);
    return DoubleclickbidmanagerQueriesGetPathParams;
}(SpeakeasyBase));
export { DoubleclickbidmanagerQueriesGetPathParams };
var DoubleclickbidmanagerQueriesGetQueryParams = /** @class */ (function (_super) {
    __extends(DoubleclickbidmanagerQueriesGetQueryParams, _super);
    function DoubleclickbidmanagerQueriesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DoubleclickbidmanagerQueriesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesGetQueryParams.prototype, "uploadProtocol", void 0);
    return DoubleclickbidmanagerQueriesGetQueryParams;
}(SpeakeasyBase));
export { DoubleclickbidmanagerQueriesGetQueryParams };
var DoubleclickbidmanagerQueriesGetSecurity = /** @class */ (function (_super) {
    __extends(DoubleclickbidmanagerQueriesGetSecurity, _super);
    function DoubleclickbidmanagerQueriesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DoubleclickbidmanagerQueriesGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DoubleclickbidmanagerQueriesGetSecurity.prototype, "oauth2c", void 0);
    return DoubleclickbidmanagerQueriesGetSecurity;
}(SpeakeasyBase));
export { DoubleclickbidmanagerQueriesGetSecurity };
var DoubleclickbidmanagerQueriesGetRequest = /** @class */ (function (_super) {
    __extends(DoubleclickbidmanagerQueriesGetRequest, _super);
    function DoubleclickbidmanagerQueriesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DoubleclickbidmanagerQueriesGetPathParams)
    ], DoubleclickbidmanagerQueriesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DoubleclickbidmanagerQueriesGetQueryParams)
    ], DoubleclickbidmanagerQueriesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DoubleclickbidmanagerQueriesGetSecurity)
    ], DoubleclickbidmanagerQueriesGetRequest.prototype, "security", void 0);
    return DoubleclickbidmanagerQueriesGetRequest;
}(SpeakeasyBase));
export { DoubleclickbidmanagerQueriesGetRequest };
var DoubleclickbidmanagerQueriesGetResponse = /** @class */ (function (_super) {
    __extends(DoubleclickbidmanagerQueriesGetResponse, _super);
    function DoubleclickbidmanagerQueriesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Query)
    ], DoubleclickbidmanagerQueriesGetResponse.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DoubleclickbidmanagerQueriesGetResponse.prototype, "statusCode", void 0);
    return DoubleclickbidmanagerQueriesGetResponse;
}(SpeakeasyBase));
export { DoubleclickbidmanagerQueriesGetResponse };
