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
var ManagedidentitiesProjectsLocationsGlobalPeeringsCreatePathParams = /** @class */ (function (_super) {
    __extends(ManagedidentitiesProjectsLocationsGlobalPeeringsCreatePathParams, _super);
    function ManagedidentitiesProjectsLocationsGlobalPeeringsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsCreatePathParams.prototype, "parent", void 0);
    return ManagedidentitiesProjectsLocationsGlobalPeeringsCreatePathParams;
}(SpeakeasyBase));
export { ManagedidentitiesProjectsLocationsGlobalPeeringsCreatePathParams };
var ManagedidentitiesProjectsLocationsGlobalPeeringsCreateQueryParams = /** @class */ (function (_super) {
    __extends(ManagedidentitiesProjectsLocationsGlobalPeeringsCreateQueryParams, _super);
    function ManagedidentitiesProjectsLocationsGlobalPeeringsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=peeringId" }),
        __metadata("design:type", String)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsCreateQueryParams.prototype, "peeringId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return ManagedidentitiesProjectsLocationsGlobalPeeringsCreateQueryParams;
}(SpeakeasyBase));
export { ManagedidentitiesProjectsLocationsGlobalPeeringsCreateQueryParams };
var ManagedidentitiesProjectsLocationsGlobalPeeringsCreateSecurity = /** @class */ (function (_super) {
    __extends(ManagedidentitiesProjectsLocationsGlobalPeeringsCreateSecurity, _super);
    function ManagedidentitiesProjectsLocationsGlobalPeeringsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsCreateSecurity.prototype, "oauth2c", void 0);
    return ManagedidentitiesProjectsLocationsGlobalPeeringsCreateSecurity;
}(SpeakeasyBase));
export { ManagedidentitiesProjectsLocationsGlobalPeeringsCreateSecurity };
var ManagedidentitiesProjectsLocationsGlobalPeeringsCreateRequest = /** @class */ (function (_super) {
    __extends(ManagedidentitiesProjectsLocationsGlobalPeeringsCreateRequest, _super);
    function ManagedidentitiesProjectsLocationsGlobalPeeringsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ManagedidentitiesProjectsLocationsGlobalPeeringsCreatePathParams)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ManagedidentitiesProjectsLocationsGlobalPeeringsCreateQueryParams)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PeeringInput)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ManagedidentitiesProjectsLocationsGlobalPeeringsCreateSecurity)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsCreateRequest.prototype, "security", void 0);
    return ManagedidentitiesProjectsLocationsGlobalPeeringsCreateRequest;
}(SpeakeasyBase));
export { ManagedidentitiesProjectsLocationsGlobalPeeringsCreateRequest };
var ManagedidentitiesProjectsLocationsGlobalPeeringsCreateResponse = /** @class */ (function (_super) {
    __extends(ManagedidentitiesProjectsLocationsGlobalPeeringsCreateResponse, _super);
    function ManagedidentitiesProjectsLocationsGlobalPeeringsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsCreateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsCreateResponse.prototype, "statusCode", void 0);
    return ManagedidentitiesProjectsLocationsGlobalPeeringsCreateResponse;
}(SpeakeasyBase));
export { ManagedidentitiesProjectsLocationsGlobalPeeringsCreateResponse };
