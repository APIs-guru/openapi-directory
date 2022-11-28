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
var DoubleclickbidmanagerQueriesGetqueryPathParams = /** @class */ (function (_super) {
    __extends(DoubleclickbidmanagerQueriesGetqueryPathParams, _super);
    function DoubleclickbidmanagerQueriesGetqueryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=queryId" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesGetqueryPathParams.prototype, "queryId", void 0);
    return DoubleclickbidmanagerQueriesGetqueryPathParams;
}(SpeakeasyBase));
export { DoubleclickbidmanagerQueriesGetqueryPathParams };
var DoubleclickbidmanagerQueriesGetqueryQueryParams = /** @class */ (function (_super) {
    __extends(DoubleclickbidmanagerQueriesGetqueryQueryParams, _super);
    function DoubleclickbidmanagerQueriesGetqueryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesGetqueryQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesGetqueryQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesGetqueryQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesGetqueryQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesGetqueryQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesGetqueryQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesGetqueryQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DoubleclickbidmanagerQueriesGetqueryQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesGetqueryQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesGetqueryQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesGetqueryQueryParams.prototype, "uploadProtocol", void 0);
    return DoubleclickbidmanagerQueriesGetqueryQueryParams;
}(SpeakeasyBase));
export { DoubleclickbidmanagerQueriesGetqueryQueryParams };
var DoubleclickbidmanagerQueriesGetquerySecurity = /** @class */ (function (_super) {
    __extends(DoubleclickbidmanagerQueriesGetquerySecurity, _super);
    function DoubleclickbidmanagerQueriesGetquerySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DoubleclickbidmanagerQueriesGetquerySecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DoubleclickbidmanagerQueriesGetquerySecurity.prototype, "oauth2c", void 0);
    return DoubleclickbidmanagerQueriesGetquerySecurity;
}(SpeakeasyBase));
export { DoubleclickbidmanagerQueriesGetquerySecurity };
var DoubleclickbidmanagerQueriesGetqueryRequest = /** @class */ (function (_super) {
    __extends(DoubleclickbidmanagerQueriesGetqueryRequest, _super);
    function DoubleclickbidmanagerQueriesGetqueryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DoubleclickbidmanagerQueriesGetqueryPathParams)
    ], DoubleclickbidmanagerQueriesGetqueryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DoubleclickbidmanagerQueriesGetqueryQueryParams)
    ], DoubleclickbidmanagerQueriesGetqueryRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DoubleclickbidmanagerQueriesGetquerySecurity)
    ], DoubleclickbidmanagerQueriesGetqueryRequest.prototype, "security", void 0);
    return DoubleclickbidmanagerQueriesGetqueryRequest;
}(SpeakeasyBase));
export { DoubleclickbidmanagerQueriesGetqueryRequest };
var DoubleclickbidmanagerQueriesGetqueryResponse = /** @class */ (function (_super) {
    __extends(DoubleclickbidmanagerQueriesGetqueryResponse, _super);
    function DoubleclickbidmanagerQueriesGetqueryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesGetqueryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Query)
    ], DoubleclickbidmanagerQueriesGetqueryResponse.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DoubleclickbidmanagerQueriesGetqueryResponse.prototype, "statusCode", void 0);
    return DoubleclickbidmanagerQueriesGetqueryResponse;
}(SpeakeasyBase));
export { DoubleclickbidmanagerQueriesGetqueryResponse };
