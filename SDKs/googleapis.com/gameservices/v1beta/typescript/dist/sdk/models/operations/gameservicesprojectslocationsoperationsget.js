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
var GameservicesProjectsLocationsOperationsGetPathParams = /** @class */ (function (_super) {
    __extends(GameservicesProjectsLocationsOperationsGetPathParams, _super);
    function GameservicesProjectsLocationsOperationsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsOperationsGetPathParams.prototype, "name", void 0);
    return GameservicesProjectsLocationsOperationsGetPathParams;
}(SpeakeasyBase));
export { GameservicesProjectsLocationsOperationsGetPathParams };
var GameservicesProjectsLocationsOperationsGetQueryParams = /** @class */ (function (_super) {
    __extends(GameservicesProjectsLocationsOperationsGetQueryParams, _super);
    function GameservicesProjectsLocationsOperationsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsOperationsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsOperationsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsOperationsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsOperationsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsOperationsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsOperationsGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsOperationsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GameservicesProjectsLocationsOperationsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsOperationsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsOperationsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsOperationsGetQueryParams.prototype, "uploadProtocol", void 0);
    return GameservicesProjectsLocationsOperationsGetQueryParams;
}(SpeakeasyBase));
export { GameservicesProjectsLocationsOperationsGetQueryParams };
var GameservicesProjectsLocationsOperationsGetSecurity = /** @class */ (function (_super) {
    __extends(GameservicesProjectsLocationsOperationsGetSecurity, _super);
    function GameservicesProjectsLocationsOperationsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GameservicesProjectsLocationsOperationsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GameservicesProjectsLocationsOperationsGetSecurity.prototype, "oauth2c", void 0);
    return GameservicesProjectsLocationsOperationsGetSecurity;
}(SpeakeasyBase));
export { GameservicesProjectsLocationsOperationsGetSecurity };
var GameservicesProjectsLocationsOperationsGetRequest = /** @class */ (function (_super) {
    __extends(GameservicesProjectsLocationsOperationsGetRequest, _super);
    function GameservicesProjectsLocationsOperationsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GameservicesProjectsLocationsOperationsGetPathParams)
    ], GameservicesProjectsLocationsOperationsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GameservicesProjectsLocationsOperationsGetQueryParams)
    ], GameservicesProjectsLocationsOperationsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GameservicesProjectsLocationsOperationsGetSecurity)
    ], GameservicesProjectsLocationsOperationsGetRequest.prototype, "security", void 0);
    return GameservicesProjectsLocationsOperationsGetRequest;
}(SpeakeasyBase));
export { GameservicesProjectsLocationsOperationsGetRequest };
var GameservicesProjectsLocationsOperationsGetResponse = /** @class */ (function (_super) {
    __extends(GameservicesProjectsLocationsOperationsGetResponse, _super);
    function GameservicesProjectsLocationsOperationsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsOperationsGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Operation)
    ], GameservicesProjectsLocationsOperationsGetResponse.prototype, "operation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GameservicesProjectsLocationsOperationsGetResponse.prototype, "statusCode", void 0);
    return GameservicesProjectsLocationsOperationsGetResponse;
}(SpeakeasyBase));
export { GameservicesProjectsLocationsOperationsGetResponse };
