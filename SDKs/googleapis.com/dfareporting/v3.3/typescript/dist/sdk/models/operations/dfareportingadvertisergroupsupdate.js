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
var DfareportingAdvertiserGroupsUpdatePathParams = /** @class */ (function (_super) {
    __extends(DfareportingAdvertiserGroupsUpdatePathParams, _super);
    function DfareportingAdvertiserGroupsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserGroupsUpdatePathParams.prototype, "profileId", void 0);
    return DfareportingAdvertiserGroupsUpdatePathParams;
}(SpeakeasyBase));
export { DfareportingAdvertiserGroupsUpdatePathParams };
var DfareportingAdvertiserGroupsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(DfareportingAdvertiserGroupsUpdateQueryParams, _super);
    function DfareportingAdvertiserGroupsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserGroupsUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserGroupsUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserGroupsUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserGroupsUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserGroupsUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserGroupsUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserGroupsUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DfareportingAdvertiserGroupsUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserGroupsUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserGroupsUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserGroupsUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return DfareportingAdvertiserGroupsUpdateQueryParams;
}(SpeakeasyBase));
export { DfareportingAdvertiserGroupsUpdateQueryParams };
var DfareportingAdvertiserGroupsUpdateSecurity = /** @class */ (function (_super) {
    __extends(DfareportingAdvertiserGroupsUpdateSecurity, _super);
    function DfareportingAdvertiserGroupsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingAdvertiserGroupsUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingAdvertiserGroupsUpdateSecurity.prototype, "oauth2c", void 0);
    return DfareportingAdvertiserGroupsUpdateSecurity;
}(SpeakeasyBase));
export { DfareportingAdvertiserGroupsUpdateSecurity };
var DfareportingAdvertiserGroupsUpdateRequest = /** @class */ (function (_super) {
    __extends(DfareportingAdvertiserGroupsUpdateRequest, _super);
    function DfareportingAdvertiserGroupsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingAdvertiserGroupsUpdatePathParams)
    ], DfareportingAdvertiserGroupsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingAdvertiserGroupsUpdateQueryParams)
    ], DfareportingAdvertiserGroupsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AdvertiserGroup)
    ], DfareportingAdvertiserGroupsUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingAdvertiserGroupsUpdateSecurity)
    ], DfareportingAdvertiserGroupsUpdateRequest.prototype, "security", void 0);
    return DfareportingAdvertiserGroupsUpdateRequest;
}(SpeakeasyBase));
export { DfareportingAdvertiserGroupsUpdateRequest };
var DfareportingAdvertiserGroupsUpdateResponse = /** @class */ (function (_super) {
    __extends(DfareportingAdvertiserGroupsUpdateResponse, _super);
    function DfareportingAdvertiserGroupsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AdvertiserGroup)
    ], DfareportingAdvertiserGroupsUpdateResponse.prototype, "advertiserGroup", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DfareportingAdvertiserGroupsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DfareportingAdvertiserGroupsUpdateResponse.prototype, "statusCode", void 0);
    return DfareportingAdvertiserGroupsUpdateResponse;
}(SpeakeasyBase));
export { DfareportingAdvertiserGroupsUpdateResponse };
