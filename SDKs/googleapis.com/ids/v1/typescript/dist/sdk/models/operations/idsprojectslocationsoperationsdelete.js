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
var IdsProjectsLocationsOperationsDeletePathParams = /** @class */ (function (_super) {
    __extends(IdsProjectsLocationsOperationsDeletePathParams, _super);
    function IdsProjectsLocationsOperationsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], IdsProjectsLocationsOperationsDeletePathParams.prototype, "name", void 0);
    return IdsProjectsLocationsOperationsDeletePathParams;
}(SpeakeasyBase));
export { IdsProjectsLocationsOperationsDeletePathParams };
var IdsProjectsLocationsOperationsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(IdsProjectsLocationsOperationsDeleteQueryParams, _super);
    function IdsProjectsLocationsOperationsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], IdsProjectsLocationsOperationsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], IdsProjectsLocationsOperationsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IdsProjectsLocationsOperationsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], IdsProjectsLocationsOperationsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IdsProjectsLocationsOperationsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IdsProjectsLocationsOperationsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IdsProjectsLocationsOperationsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IdsProjectsLocationsOperationsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IdsProjectsLocationsOperationsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=requestId" }),
        __metadata("design:type", String)
    ], IdsProjectsLocationsOperationsDeleteQueryParams.prototype, "requestId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], IdsProjectsLocationsOperationsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], IdsProjectsLocationsOperationsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return IdsProjectsLocationsOperationsDeleteQueryParams;
}(SpeakeasyBase));
export { IdsProjectsLocationsOperationsDeleteQueryParams };
var IdsProjectsLocationsOperationsDeleteSecurity = /** @class */ (function (_super) {
    __extends(IdsProjectsLocationsOperationsDeleteSecurity, _super);
    function IdsProjectsLocationsOperationsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IdsProjectsLocationsOperationsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IdsProjectsLocationsOperationsDeleteSecurity.prototype, "oauth2c", void 0);
    return IdsProjectsLocationsOperationsDeleteSecurity;
}(SpeakeasyBase));
export { IdsProjectsLocationsOperationsDeleteSecurity };
var IdsProjectsLocationsOperationsDeleteRequest = /** @class */ (function (_super) {
    __extends(IdsProjectsLocationsOperationsDeleteRequest, _super);
    function IdsProjectsLocationsOperationsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", IdsProjectsLocationsOperationsDeletePathParams)
    ], IdsProjectsLocationsOperationsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", IdsProjectsLocationsOperationsDeleteQueryParams)
    ], IdsProjectsLocationsOperationsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", IdsProjectsLocationsOperationsDeleteSecurity)
    ], IdsProjectsLocationsOperationsDeleteRequest.prototype, "security", void 0);
    return IdsProjectsLocationsOperationsDeleteRequest;
}(SpeakeasyBase));
export { IdsProjectsLocationsOperationsDeleteRequest };
var IdsProjectsLocationsOperationsDeleteResponse = /** @class */ (function (_super) {
    __extends(IdsProjectsLocationsOperationsDeleteResponse, _super);
    function IdsProjectsLocationsOperationsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], IdsProjectsLocationsOperationsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], IdsProjectsLocationsOperationsDeleteResponse.prototype, "empty", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], IdsProjectsLocationsOperationsDeleteResponse.prototype, "statusCode", void 0);
    return IdsProjectsLocationsOperationsDeleteResponse;
}(SpeakeasyBase));
export { IdsProjectsLocationsOperationsDeleteResponse };
