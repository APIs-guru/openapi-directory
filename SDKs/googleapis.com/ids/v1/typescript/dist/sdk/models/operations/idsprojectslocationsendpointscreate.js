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
var IdsProjectsLocationsEndpointsCreatePathParams = /** @class */ (function (_super) {
    __extends(IdsProjectsLocationsEndpointsCreatePathParams, _super);
    function IdsProjectsLocationsEndpointsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], IdsProjectsLocationsEndpointsCreatePathParams.prototype, "parent", void 0);
    return IdsProjectsLocationsEndpointsCreatePathParams;
}(SpeakeasyBase));
export { IdsProjectsLocationsEndpointsCreatePathParams };
var IdsProjectsLocationsEndpointsCreateQueryParams = /** @class */ (function (_super) {
    __extends(IdsProjectsLocationsEndpointsCreateQueryParams, _super);
    function IdsProjectsLocationsEndpointsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], IdsProjectsLocationsEndpointsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], IdsProjectsLocationsEndpointsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IdsProjectsLocationsEndpointsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], IdsProjectsLocationsEndpointsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endpointId" }),
        __metadata("design:type", String)
    ], IdsProjectsLocationsEndpointsCreateQueryParams.prototype, "endpointId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IdsProjectsLocationsEndpointsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IdsProjectsLocationsEndpointsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IdsProjectsLocationsEndpointsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IdsProjectsLocationsEndpointsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IdsProjectsLocationsEndpointsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requestId" }),
        __metadata("design:type", String)
    ], IdsProjectsLocationsEndpointsCreateQueryParams.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], IdsProjectsLocationsEndpointsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], IdsProjectsLocationsEndpointsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return IdsProjectsLocationsEndpointsCreateQueryParams;
}(SpeakeasyBase));
export { IdsProjectsLocationsEndpointsCreateQueryParams };
var IdsProjectsLocationsEndpointsCreateSecurity = /** @class */ (function (_super) {
    __extends(IdsProjectsLocationsEndpointsCreateSecurity, _super);
    function IdsProjectsLocationsEndpointsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IdsProjectsLocationsEndpointsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IdsProjectsLocationsEndpointsCreateSecurity.prototype, "oauth2c", void 0);
    return IdsProjectsLocationsEndpointsCreateSecurity;
}(SpeakeasyBase));
export { IdsProjectsLocationsEndpointsCreateSecurity };
var IdsProjectsLocationsEndpointsCreateRequest = /** @class */ (function (_super) {
    __extends(IdsProjectsLocationsEndpointsCreateRequest, _super);
    function IdsProjectsLocationsEndpointsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IdsProjectsLocationsEndpointsCreatePathParams)
    ], IdsProjectsLocationsEndpointsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IdsProjectsLocationsEndpointsCreateQueryParams)
    ], IdsProjectsLocationsEndpointsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.EndpointInput)
    ], IdsProjectsLocationsEndpointsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IdsProjectsLocationsEndpointsCreateSecurity)
    ], IdsProjectsLocationsEndpointsCreateRequest.prototype, "security", void 0);
    return IdsProjectsLocationsEndpointsCreateRequest;
}(SpeakeasyBase));
export { IdsProjectsLocationsEndpointsCreateRequest };
var IdsProjectsLocationsEndpointsCreateResponse = /** @class */ (function (_super) {
    __extends(IdsProjectsLocationsEndpointsCreateResponse, _super);
    function IdsProjectsLocationsEndpointsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IdsProjectsLocationsEndpointsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], IdsProjectsLocationsEndpointsCreateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IdsProjectsLocationsEndpointsCreateResponse.prototype, "statusCode", void 0);
    return IdsProjectsLocationsEndpointsCreateResponse;
}(SpeakeasyBase));
export { IdsProjectsLocationsEndpointsCreateResponse };
