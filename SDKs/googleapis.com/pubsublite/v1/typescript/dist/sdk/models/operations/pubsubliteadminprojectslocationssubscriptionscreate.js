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
var PubsubliteAdminProjectsLocationsSubscriptionsCreatePathParams = /** @class */ (function (_super) {
    __extends(PubsubliteAdminProjectsLocationsSubscriptionsCreatePathParams, _super);
    function PubsubliteAdminProjectsLocationsSubscriptionsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsSubscriptionsCreatePathParams.prototype, "parent", void 0);
    return PubsubliteAdminProjectsLocationsSubscriptionsCreatePathParams;
}(SpeakeasyBase));
export { PubsubliteAdminProjectsLocationsSubscriptionsCreatePathParams };
var PubsubliteAdminProjectsLocationsSubscriptionsCreateQueryParams = /** @class */ (function (_super) {
    __extends(PubsubliteAdminProjectsLocationsSubscriptionsCreateQueryParams, _super);
    function PubsubliteAdminProjectsLocationsSubscriptionsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsSubscriptionsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsSubscriptionsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsSubscriptionsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsSubscriptionsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsSubscriptionsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsSubscriptionsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsSubscriptionsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PubsubliteAdminProjectsLocationsSubscriptionsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsSubscriptionsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skipBacklog" }),
        __metadata("design:type", Boolean)
    ], PubsubliteAdminProjectsLocationsSubscriptionsCreateQueryParams.prototype, "skipBacklog", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subscriptionId" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsSubscriptionsCreateQueryParams.prototype, "subscriptionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsSubscriptionsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsSubscriptionsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return PubsubliteAdminProjectsLocationsSubscriptionsCreateQueryParams;
}(SpeakeasyBase));
export { PubsubliteAdminProjectsLocationsSubscriptionsCreateQueryParams };
var PubsubliteAdminProjectsLocationsSubscriptionsCreateSecurity = /** @class */ (function (_super) {
    __extends(PubsubliteAdminProjectsLocationsSubscriptionsCreateSecurity, _super);
    function PubsubliteAdminProjectsLocationsSubscriptionsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubliteAdminProjectsLocationsSubscriptionsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubliteAdminProjectsLocationsSubscriptionsCreateSecurity.prototype, "oauth2c", void 0);
    return PubsubliteAdminProjectsLocationsSubscriptionsCreateSecurity;
}(SpeakeasyBase));
export { PubsubliteAdminProjectsLocationsSubscriptionsCreateSecurity };
var PubsubliteAdminProjectsLocationsSubscriptionsCreateRequest = /** @class */ (function (_super) {
    __extends(PubsubliteAdminProjectsLocationsSubscriptionsCreateRequest, _super);
    function PubsubliteAdminProjectsLocationsSubscriptionsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubliteAdminProjectsLocationsSubscriptionsCreatePathParams)
    ], PubsubliteAdminProjectsLocationsSubscriptionsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubliteAdminProjectsLocationsSubscriptionsCreateQueryParams)
    ], PubsubliteAdminProjectsLocationsSubscriptionsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Subscription)
    ], PubsubliteAdminProjectsLocationsSubscriptionsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubliteAdminProjectsLocationsSubscriptionsCreateSecurity)
    ], PubsubliteAdminProjectsLocationsSubscriptionsCreateRequest.prototype, "security", void 0);
    return PubsubliteAdminProjectsLocationsSubscriptionsCreateRequest;
}(SpeakeasyBase));
export { PubsubliteAdminProjectsLocationsSubscriptionsCreateRequest };
var PubsubliteAdminProjectsLocationsSubscriptionsCreateResponse = /** @class */ (function (_super) {
    __extends(PubsubliteAdminProjectsLocationsSubscriptionsCreateResponse, _super);
    function PubsubliteAdminProjectsLocationsSubscriptionsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsSubscriptionsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PubsubliteAdminProjectsLocationsSubscriptionsCreateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Subscription)
    ], PubsubliteAdminProjectsLocationsSubscriptionsCreateResponse.prototype, "subscription", void 0);
    return PubsubliteAdminProjectsLocationsSubscriptionsCreateResponse;
}(SpeakeasyBase));
export { PubsubliteAdminProjectsLocationsSubscriptionsCreateResponse };
