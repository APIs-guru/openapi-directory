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
var DfareportingFloodlightActivityGroupsUpdatePathParams = /** @class */ (function (_super) {
    __extends(DfareportingFloodlightActivityGroupsUpdatePathParams, _super);
    function DfareportingFloodlightActivityGroupsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivityGroupsUpdatePathParams.prototype, "profileId", void 0);
    return DfareportingFloodlightActivityGroupsUpdatePathParams;
}(SpeakeasyBase));
export { DfareportingFloodlightActivityGroupsUpdatePathParams };
var DfareportingFloodlightActivityGroupsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(DfareportingFloodlightActivityGroupsUpdateQueryParams, _super);
    function DfareportingFloodlightActivityGroupsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivityGroupsUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivityGroupsUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivityGroupsUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivityGroupsUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivityGroupsUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivityGroupsUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivityGroupsUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DfareportingFloodlightActivityGroupsUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivityGroupsUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivityGroupsUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivityGroupsUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return DfareportingFloodlightActivityGroupsUpdateQueryParams;
}(SpeakeasyBase));
export { DfareportingFloodlightActivityGroupsUpdateQueryParams };
var DfareportingFloodlightActivityGroupsUpdateSecurity = /** @class */ (function (_super) {
    __extends(DfareportingFloodlightActivityGroupsUpdateSecurity, _super);
    function DfareportingFloodlightActivityGroupsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingFloodlightActivityGroupsUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingFloodlightActivityGroupsUpdateSecurity.prototype, "oauth2c", void 0);
    return DfareportingFloodlightActivityGroupsUpdateSecurity;
}(SpeakeasyBase));
export { DfareportingFloodlightActivityGroupsUpdateSecurity };
var DfareportingFloodlightActivityGroupsUpdateRequest = /** @class */ (function (_super) {
    __extends(DfareportingFloodlightActivityGroupsUpdateRequest, _super);
    function DfareportingFloodlightActivityGroupsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingFloodlightActivityGroupsUpdatePathParams)
    ], DfareportingFloodlightActivityGroupsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingFloodlightActivityGroupsUpdateQueryParams)
    ], DfareportingFloodlightActivityGroupsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.FloodlightActivityGroup)
    ], DfareportingFloodlightActivityGroupsUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingFloodlightActivityGroupsUpdateSecurity)
    ], DfareportingFloodlightActivityGroupsUpdateRequest.prototype, "security", void 0);
    return DfareportingFloodlightActivityGroupsUpdateRequest;
}(SpeakeasyBase));
export { DfareportingFloodlightActivityGroupsUpdateRequest };
var DfareportingFloodlightActivityGroupsUpdateResponse = /** @class */ (function (_super) {
    __extends(DfareportingFloodlightActivityGroupsUpdateResponse, _super);
    function DfareportingFloodlightActivityGroupsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivityGroupsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FloodlightActivityGroup)
    ], DfareportingFloodlightActivityGroupsUpdateResponse.prototype, "floodlightActivityGroup", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DfareportingFloodlightActivityGroupsUpdateResponse.prototype, "statusCode", void 0);
    return DfareportingFloodlightActivityGroupsUpdateResponse;
}(SpeakeasyBase));
export { DfareportingFloodlightActivityGroupsUpdateResponse };
