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
var NetworkservicesProjectsLocationsHttpRoutesCreatePathParams = /** @class */ (function (_super) {
    __extends(NetworkservicesProjectsLocationsHttpRoutesCreatePathParams, _super);
    function NetworkservicesProjectsLocationsHttpRoutesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsHttpRoutesCreatePathParams.prototype, "parent", void 0);
    return NetworkservicesProjectsLocationsHttpRoutesCreatePathParams;
}(SpeakeasyBase));
export { NetworkservicesProjectsLocationsHttpRoutesCreatePathParams };
var NetworkservicesProjectsLocationsHttpRoutesCreateQueryParams = /** @class */ (function (_super) {
    __extends(NetworkservicesProjectsLocationsHttpRoutesCreateQueryParams, _super);
    function NetworkservicesProjectsLocationsHttpRoutesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsHttpRoutesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsHttpRoutesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsHttpRoutesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsHttpRoutesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsHttpRoutesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=httpRouteId" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsHttpRoutesCreateQueryParams.prototype, "httpRouteId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsHttpRoutesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsHttpRoutesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], NetworkservicesProjectsLocationsHttpRoutesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsHttpRoutesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsHttpRoutesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsHttpRoutesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return NetworkservicesProjectsLocationsHttpRoutesCreateQueryParams;
}(SpeakeasyBase));
export { NetworkservicesProjectsLocationsHttpRoutesCreateQueryParams };
var NetworkservicesProjectsLocationsHttpRoutesCreateSecurity = /** @class */ (function (_super) {
    __extends(NetworkservicesProjectsLocationsHttpRoutesCreateSecurity, _super);
    function NetworkservicesProjectsLocationsHttpRoutesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], NetworkservicesProjectsLocationsHttpRoutesCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], NetworkservicesProjectsLocationsHttpRoutesCreateSecurity.prototype, "oauth2c", void 0);
    return NetworkservicesProjectsLocationsHttpRoutesCreateSecurity;
}(SpeakeasyBase));
export { NetworkservicesProjectsLocationsHttpRoutesCreateSecurity };
var NetworkservicesProjectsLocationsHttpRoutesCreateRequest = /** @class */ (function (_super) {
    __extends(NetworkservicesProjectsLocationsHttpRoutesCreateRequest, _super);
    function NetworkservicesProjectsLocationsHttpRoutesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NetworkservicesProjectsLocationsHttpRoutesCreatePathParams)
    ], NetworkservicesProjectsLocationsHttpRoutesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NetworkservicesProjectsLocationsHttpRoutesCreateQueryParams)
    ], NetworkservicesProjectsLocationsHttpRoutesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.HttpRouteInput)
    ], NetworkservicesProjectsLocationsHttpRoutesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NetworkservicesProjectsLocationsHttpRoutesCreateSecurity)
    ], NetworkservicesProjectsLocationsHttpRoutesCreateRequest.prototype, "security", void 0);
    return NetworkservicesProjectsLocationsHttpRoutesCreateRequest;
}(SpeakeasyBase));
export { NetworkservicesProjectsLocationsHttpRoutesCreateRequest };
var NetworkservicesProjectsLocationsHttpRoutesCreateResponse = /** @class */ (function (_super) {
    __extends(NetworkservicesProjectsLocationsHttpRoutesCreateResponse, _super);
    function NetworkservicesProjectsLocationsHttpRoutesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsHttpRoutesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], NetworkservicesProjectsLocationsHttpRoutesCreateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], NetworkservicesProjectsLocationsHttpRoutesCreateResponse.prototype, "statusCode", void 0);
    return NetworkservicesProjectsLocationsHttpRoutesCreateResponse;
}(SpeakeasyBase));
export { NetworkservicesProjectsLocationsHttpRoutesCreateResponse };
