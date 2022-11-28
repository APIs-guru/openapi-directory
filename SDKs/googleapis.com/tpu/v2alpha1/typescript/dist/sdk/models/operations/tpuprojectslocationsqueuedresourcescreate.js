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
var TpuProjectsLocationsQueuedResourcesCreatePathParams = /** @class */ (function (_super) {
    __extends(TpuProjectsLocationsQueuedResourcesCreatePathParams, _super);
    function TpuProjectsLocationsQueuedResourcesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsQueuedResourcesCreatePathParams.prototype, "parent", void 0);
    return TpuProjectsLocationsQueuedResourcesCreatePathParams;
}(SpeakeasyBase));
export { TpuProjectsLocationsQueuedResourcesCreatePathParams };
var TpuProjectsLocationsQueuedResourcesCreateQueryParams = /** @class */ (function (_super) {
    __extends(TpuProjectsLocationsQueuedResourcesCreateQueryParams, _super);
    function TpuProjectsLocationsQueuedResourcesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsQueuedResourcesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsQueuedResourcesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsQueuedResourcesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsQueuedResourcesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsQueuedResourcesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsQueuedResourcesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsQueuedResourcesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TpuProjectsLocationsQueuedResourcesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=queuedResourceId" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsQueuedResourcesCreateQueryParams.prototype, "queuedResourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsQueuedResourcesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requestId" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsQueuedResourcesCreateQueryParams.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsQueuedResourcesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsQueuedResourcesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return TpuProjectsLocationsQueuedResourcesCreateQueryParams;
}(SpeakeasyBase));
export { TpuProjectsLocationsQueuedResourcesCreateQueryParams };
var TpuProjectsLocationsQueuedResourcesCreateSecurity = /** @class */ (function (_super) {
    __extends(TpuProjectsLocationsQueuedResourcesCreateSecurity, _super);
    function TpuProjectsLocationsQueuedResourcesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TpuProjectsLocationsQueuedResourcesCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TpuProjectsLocationsQueuedResourcesCreateSecurity.prototype, "oauth2c", void 0);
    return TpuProjectsLocationsQueuedResourcesCreateSecurity;
}(SpeakeasyBase));
export { TpuProjectsLocationsQueuedResourcesCreateSecurity };
var TpuProjectsLocationsQueuedResourcesCreateRequest = /** @class */ (function (_super) {
    __extends(TpuProjectsLocationsQueuedResourcesCreateRequest, _super);
    function TpuProjectsLocationsQueuedResourcesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TpuProjectsLocationsQueuedResourcesCreatePathParams)
    ], TpuProjectsLocationsQueuedResourcesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TpuProjectsLocationsQueuedResourcesCreateQueryParams)
    ], TpuProjectsLocationsQueuedResourcesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.QueuedResourceInput)
    ], TpuProjectsLocationsQueuedResourcesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TpuProjectsLocationsQueuedResourcesCreateSecurity)
    ], TpuProjectsLocationsQueuedResourcesCreateRequest.prototype, "security", void 0);
    return TpuProjectsLocationsQueuedResourcesCreateRequest;
}(SpeakeasyBase));
export { TpuProjectsLocationsQueuedResourcesCreateRequest };
var TpuProjectsLocationsQueuedResourcesCreateResponse = /** @class */ (function (_super) {
    __extends(TpuProjectsLocationsQueuedResourcesCreateResponse, _super);
    function TpuProjectsLocationsQueuedResourcesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TpuProjectsLocationsQueuedResourcesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], TpuProjectsLocationsQueuedResourcesCreateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TpuProjectsLocationsQueuedResourcesCreateResponse.prototype, "statusCode", void 0);
    return TpuProjectsLocationsQueuedResourcesCreateResponse;
}(SpeakeasyBase));
export { TpuProjectsLocationsQueuedResourcesCreateResponse };
