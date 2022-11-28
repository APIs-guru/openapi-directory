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
var PubsubliteAdminProjectsLocationsSubscriptionsSeekPathParams = /** @class */ (function (_super) {
    __extends(PubsubliteAdminProjectsLocationsSubscriptionsSeekPathParams, _super);
    function PubsubliteAdminProjectsLocationsSubscriptionsSeekPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsSubscriptionsSeekPathParams.prototype, "name", void 0);
    return PubsubliteAdminProjectsLocationsSubscriptionsSeekPathParams;
}(SpeakeasyBase));
export { PubsubliteAdminProjectsLocationsSubscriptionsSeekPathParams };
var PubsubliteAdminProjectsLocationsSubscriptionsSeekQueryParams = /** @class */ (function (_super) {
    __extends(PubsubliteAdminProjectsLocationsSubscriptionsSeekQueryParams, _super);
    function PubsubliteAdminProjectsLocationsSubscriptionsSeekQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsSubscriptionsSeekQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsSubscriptionsSeekQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsSubscriptionsSeekQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsSubscriptionsSeekQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsSubscriptionsSeekQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsSubscriptionsSeekQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsSubscriptionsSeekQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PubsubliteAdminProjectsLocationsSubscriptionsSeekQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsSubscriptionsSeekQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsSubscriptionsSeekQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsSubscriptionsSeekQueryParams.prototype, "uploadProtocol", void 0);
    return PubsubliteAdminProjectsLocationsSubscriptionsSeekQueryParams;
}(SpeakeasyBase));
export { PubsubliteAdminProjectsLocationsSubscriptionsSeekQueryParams };
var PubsubliteAdminProjectsLocationsSubscriptionsSeekSecurity = /** @class */ (function (_super) {
    __extends(PubsubliteAdminProjectsLocationsSubscriptionsSeekSecurity, _super);
    function PubsubliteAdminProjectsLocationsSubscriptionsSeekSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubliteAdminProjectsLocationsSubscriptionsSeekSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubliteAdminProjectsLocationsSubscriptionsSeekSecurity.prototype, "oauth2c", void 0);
    return PubsubliteAdminProjectsLocationsSubscriptionsSeekSecurity;
}(SpeakeasyBase));
export { PubsubliteAdminProjectsLocationsSubscriptionsSeekSecurity };
var PubsubliteAdminProjectsLocationsSubscriptionsSeekRequest = /** @class */ (function (_super) {
    __extends(PubsubliteAdminProjectsLocationsSubscriptionsSeekRequest, _super);
    function PubsubliteAdminProjectsLocationsSubscriptionsSeekRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubliteAdminProjectsLocationsSubscriptionsSeekPathParams)
    ], PubsubliteAdminProjectsLocationsSubscriptionsSeekRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubliteAdminProjectsLocationsSubscriptionsSeekQueryParams)
    ], PubsubliteAdminProjectsLocationsSubscriptionsSeekRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SeekSubscriptionRequest)
    ], PubsubliteAdminProjectsLocationsSubscriptionsSeekRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubliteAdminProjectsLocationsSubscriptionsSeekSecurity)
    ], PubsubliteAdminProjectsLocationsSubscriptionsSeekRequest.prototype, "security", void 0);
    return PubsubliteAdminProjectsLocationsSubscriptionsSeekRequest;
}(SpeakeasyBase));
export { PubsubliteAdminProjectsLocationsSubscriptionsSeekRequest };
var PubsubliteAdminProjectsLocationsSubscriptionsSeekResponse = /** @class */ (function (_super) {
    __extends(PubsubliteAdminProjectsLocationsSubscriptionsSeekResponse, _super);
    function PubsubliteAdminProjectsLocationsSubscriptionsSeekResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsSubscriptionsSeekResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], PubsubliteAdminProjectsLocationsSubscriptionsSeekResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PubsubliteAdminProjectsLocationsSubscriptionsSeekResponse.prototype, "statusCode", void 0);
    return PubsubliteAdminProjectsLocationsSubscriptionsSeekResponse;
}(SpeakeasyBase));
export { PubsubliteAdminProjectsLocationsSubscriptionsSeekResponse };
