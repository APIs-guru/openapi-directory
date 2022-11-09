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
var DoubleclickbidmanagerQueriesRunqueryPathParams = /** @class */ (function (_super) {
    __extends(DoubleclickbidmanagerQueriesRunqueryPathParams, _super);
    function DoubleclickbidmanagerQueriesRunqueryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=queryId" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesRunqueryPathParams.prototype, "queryId", void 0);
    return DoubleclickbidmanagerQueriesRunqueryPathParams;
}(SpeakeasyBase));
export { DoubleclickbidmanagerQueriesRunqueryPathParams };
var DoubleclickbidmanagerQueriesRunqueryQueryParams = /** @class */ (function (_super) {
    __extends(DoubleclickbidmanagerQueriesRunqueryQueryParams, _super);
    function DoubleclickbidmanagerQueriesRunqueryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesRunqueryQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesRunqueryQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesRunqueryQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=asynchronous" }),
        __metadata("design:type", Boolean)
    ], DoubleclickbidmanagerQueriesRunqueryQueryParams.prototype, "asynchronous", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesRunqueryQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesRunqueryQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesRunqueryQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesRunqueryQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DoubleclickbidmanagerQueriesRunqueryQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesRunqueryQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesRunqueryQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesRunqueryQueryParams.prototype, "uploadProtocol", void 0);
    return DoubleclickbidmanagerQueriesRunqueryQueryParams;
}(SpeakeasyBase));
export { DoubleclickbidmanagerQueriesRunqueryQueryParams };
var DoubleclickbidmanagerQueriesRunquerySecurity = /** @class */ (function (_super) {
    __extends(DoubleclickbidmanagerQueriesRunquerySecurity, _super);
    function DoubleclickbidmanagerQueriesRunquerySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DoubleclickbidmanagerQueriesRunquerySecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DoubleclickbidmanagerQueriesRunquerySecurity.prototype, "oauth2c", void 0);
    return DoubleclickbidmanagerQueriesRunquerySecurity;
}(SpeakeasyBase));
export { DoubleclickbidmanagerQueriesRunquerySecurity };
var DoubleclickbidmanagerQueriesRunqueryRequest = /** @class */ (function (_super) {
    __extends(DoubleclickbidmanagerQueriesRunqueryRequest, _super);
    function DoubleclickbidmanagerQueriesRunqueryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DoubleclickbidmanagerQueriesRunqueryPathParams)
    ], DoubleclickbidmanagerQueriesRunqueryRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DoubleclickbidmanagerQueriesRunqueryQueryParams)
    ], DoubleclickbidmanagerQueriesRunqueryRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RunQueryRequest)
    ], DoubleclickbidmanagerQueriesRunqueryRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DoubleclickbidmanagerQueriesRunquerySecurity)
    ], DoubleclickbidmanagerQueriesRunqueryRequest.prototype, "security", void 0);
    return DoubleclickbidmanagerQueriesRunqueryRequest;
}(SpeakeasyBase));
export { DoubleclickbidmanagerQueriesRunqueryRequest };
var DoubleclickbidmanagerQueriesRunqueryResponse = /** @class */ (function (_super) {
    __extends(DoubleclickbidmanagerQueriesRunqueryResponse, _super);
    function DoubleclickbidmanagerQueriesRunqueryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesRunqueryResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DoubleclickbidmanagerQueriesRunqueryResponse.prototype, "statusCode", void 0);
    return DoubleclickbidmanagerQueriesRunqueryResponse;
}(SpeakeasyBase));
export { DoubleclickbidmanagerQueriesRunqueryResponse };
