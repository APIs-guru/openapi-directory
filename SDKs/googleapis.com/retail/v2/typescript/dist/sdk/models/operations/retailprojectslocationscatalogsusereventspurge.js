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
var RetailProjectsLocationsCatalogsUserEventsPurgePathParams = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsUserEventsPurgePathParams, _super);
    function RetailProjectsLocationsCatalogsUserEventsPurgePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsUserEventsPurgePathParams.prototype, "parent", void 0);
    return RetailProjectsLocationsCatalogsUserEventsPurgePathParams;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsUserEventsPurgePathParams };
var RetailProjectsLocationsCatalogsUserEventsPurgeQueryParams = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsUserEventsPurgeQueryParams, _super);
    function RetailProjectsLocationsCatalogsUserEventsPurgeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsUserEventsPurgeQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsUserEventsPurgeQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsUserEventsPurgeQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsUserEventsPurgeQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsUserEventsPurgeQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsUserEventsPurgeQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsUserEventsPurgeQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RetailProjectsLocationsCatalogsUserEventsPurgeQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsUserEventsPurgeQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsUserEventsPurgeQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsUserEventsPurgeQueryParams.prototype, "uploadProtocol", void 0);
    return RetailProjectsLocationsCatalogsUserEventsPurgeQueryParams;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsUserEventsPurgeQueryParams };
var RetailProjectsLocationsCatalogsUserEventsPurgeSecurity = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsUserEventsPurgeSecurity, _super);
    function RetailProjectsLocationsCatalogsUserEventsPurgeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RetailProjectsLocationsCatalogsUserEventsPurgeSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RetailProjectsLocationsCatalogsUserEventsPurgeSecurity.prototype, "oauth2c", void 0);
    return RetailProjectsLocationsCatalogsUserEventsPurgeSecurity;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsUserEventsPurgeSecurity };
var RetailProjectsLocationsCatalogsUserEventsPurgeRequest = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsUserEventsPurgeRequest, _super);
    function RetailProjectsLocationsCatalogsUserEventsPurgeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetailProjectsLocationsCatalogsUserEventsPurgePathParams)
    ], RetailProjectsLocationsCatalogsUserEventsPurgeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetailProjectsLocationsCatalogsUserEventsPurgeQueryParams)
    ], RetailProjectsLocationsCatalogsUserEventsPurgeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudRetailV2PurgeUserEventsRequest)
    ], RetailProjectsLocationsCatalogsUserEventsPurgeRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetailProjectsLocationsCatalogsUserEventsPurgeSecurity)
    ], RetailProjectsLocationsCatalogsUserEventsPurgeRequest.prototype, "security", void 0);
    return RetailProjectsLocationsCatalogsUserEventsPurgeRequest;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsUserEventsPurgeRequest };
var RetailProjectsLocationsCatalogsUserEventsPurgeResponse = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsUserEventsPurgeResponse, _super);
    function RetailProjectsLocationsCatalogsUserEventsPurgeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsUserEventsPurgeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], RetailProjectsLocationsCatalogsUserEventsPurgeResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RetailProjectsLocationsCatalogsUserEventsPurgeResponse.prototype, "statusCode", void 0);
    return RetailProjectsLocationsCatalogsUserEventsPurgeResponse;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsUserEventsPurgeResponse };
