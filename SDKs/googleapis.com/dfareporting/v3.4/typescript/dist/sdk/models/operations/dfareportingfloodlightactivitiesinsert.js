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
var DfareportingFloodlightActivitiesInsertPathParams = /** @class */ (function (_super) {
    __extends(DfareportingFloodlightActivitiesInsertPathParams, _super);
    function DfareportingFloodlightActivitiesInsertPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivitiesInsertPathParams.prototype, "profileId", void 0);
    return DfareportingFloodlightActivitiesInsertPathParams;
}(SpeakeasyBase));
export { DfareportingFloodlightActivitiesInsertPathParams };
var DfareportingFloodlightActivitiesInsertQueryParams = /** @class */ (function (_super) {
    __extends(DfareportingFloodlightActivitiesInsertQueryParams, _super);
    function DfareportingFloodlightActivitiesInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivitiesInsertQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivitiesInsertQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivitiesInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivitiesInsertQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivitiesInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivitiesInsertQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivitiesInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DfareportingFloodlightActivitiesInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivitiesInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivitiesInsertQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivitiesInsertQueryParams.prototype, "uploadProtocol", void 0);
    return DfareportingFloodlightActivitiesInsertQueryParams;
}(SpeakeasyBase));
export { DfareportingFloodlightActivitiesInsertQueryParams };
var DfareportingFloodlightActivitiesInsertSecurity = /** @class */ (function (_super) {
    __extends(DfareportingFloodlightActivitiesInsertSecurity, _super);
    function DfareportingFloodlightActivitiesInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingFloodlightActivitiesInsertSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingFloodlightActivitiesInsertSecurity.prototype, "oauth2c", void 0);
    return DfareportingFloodlightActivitiesInsertSecurity;
}(SpeakeasyBase));
export { DfareportingFloodlightActivitiesInsertSecurity };
var DfareportingFloodlightActivitiesInsertRequest = /** @class */ (function (_super) {
    __extends(DfareportingFloodlightActivitiesInsertRequest, _super);
    function DfareportingFloodlightActivitiesInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingFloodlightActivitiesInsertPathParams)
    ], DfareportingFloodlightActivitiesInsertRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingFloodlightActivitiesInsertQueryParams)
    ], DfareportingFloodlightActivitiesInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.FloodlightActivity)
    ], DfareportingFloodlightActivitiesInsertRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingFloodlightActivitiesInsertSecurity)
    ], DfareportingFloodlightActivitiesInsertRequest.prototype, "security", void 0);
    return DfareportingFloodlightActivitiesInsertRequest;
}(SpeakeasyBase));
export { DfareportingFloodlightActivitiesInsertRequest };
var DfareportingFloodlightActivitiesInsertResponse = /** @class */ (function (_super) {
    __extends(DfareportingFloodlightActivitiesInsertResponse, _super);
    function DfareportingFloodlightActivitiesInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivitiesInsertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FloodlightActivity)
    ], DfareportingFloodlightActivitiesInsertResponse.prototype, "floodlightActivity", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DfareportingFloodlightActivitiesInsertResponse.prototype, "statusCode", void 0);
    return DfareportingFloodlightActivitiesInsertResponse;
}(SpeakeasyBase));
export { DfareportingFloodlightActivitiesInsertResponse };
