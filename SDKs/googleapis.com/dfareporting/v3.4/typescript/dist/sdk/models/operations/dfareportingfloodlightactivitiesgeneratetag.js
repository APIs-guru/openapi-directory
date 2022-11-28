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
var DfareportingFloodlightActivitiesGeneratetagPathParams = /** @class */ (function (_super) {
    __extends(DfareportingFloodlightActivitiesGeneratetagPathParams, _super);
    function DfareportingFloodlightActivitiesGeneratetagPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivitiesGeneratetagPathParams.prototype, "profileId", void 0);
    return DfareportingFloodlightActivitiesGeneratetagPathParams;
}(SpeakeasyBase));
export { DfareportingFloodlightActivitiesGeneratetagPathParams };
var DfareportingFloodlightActivitiesGeneratetagQueryParams = /** @class */ (function (_super) {
    __extends(DfareportingFloodlightActivitiesGeneratetagQueryParams, _super);
    function DfareportingFloodlightActivitiesGeneratetagQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivitiesGeneratetagQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivitiesGeneratetagQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivitiesGeneratetagQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivitiesGeneratetagQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivitiesGeneratetagQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=floodlightActivityId" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivitiesGeneratetagQueryParams.prototype, "floodlightActivityId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivitiesGeneratetagQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivitiesGeneratetagQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DfareportingFloodlightActivitiesGeneratetagQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivitiesGeneratetagQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivitiesGeneratetagQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivitiesGeneratetagQueryParams.prototype, "uploadProtocol", void 0);
    return DfareportingFloodlightActivitiesGeneratetagQueryParams;
}(SpeakeasyBase));
export { DfareportingFloodlightActivitiesGeneratetagQueryParams };
var DfareportingFloodlightActivitiesGeneratetagSecurity = /** @class */ (function (_super) {
    __extends(DfareportingFloodlightActivitiesGeneratetagSecurity, _super);
    function DfareportingFloodlightActivitiesGeneratetagSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingFloodlightActivitiesGeneratetagSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingFloodlightActivitiesGeneratetagSecurity.prototype, "oauth2c", void 0);
    return DfareportingFloodlightActivitiesGeneratetagSecurity;
}(SpeakeasyBase));
export { DfareportingFloodlightActivitiesGeneratetagSecurity };
var DfareportingFloodlightActivitiesGeneratetagRequest = /** @class */ (function (_super) {
    __extends(DfareportingFloodlightActivitiesGeneratetagRequest, _super);
    function DfareportingFloodlightActivitiesGeneratetagRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingFloodlightActivitiesGeneratetagPathParams)
    ], DfareportingFloodlightActivitiesGeneratetagRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingFloodlightActivitiesGeneratetagQueryParams)
    ], DfareportingFloodlightActivitiesGeneratetagRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingFloodlightActivitiesGeneratetagSecurity)
    ], DfareportingFloodlightActivitiesGeneratetagRequest.prototype, "security", void 0);
    return DfareportingFloodlightActivitiesGeneratetagRequest;
}(SpeakeasyBase));
export { DfareportingFloodlightActivitiesGeneratetagRequest };
var DfareportingFloodlightActivitiesGeneratetagResponse = /** @class */ (function (_super) {
    __extends(DfareportingFloodlightActivitiesGeneratetagResponse, _super);
    function DfareportingFloodlightActivitiesGeneratetagResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivitiesGeneratetagResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FloodlightActivitiesGenerateTagResponse)
    ], DfareportingFloodlightActivitiesGeneratetagResponse.prototype, "floodlightActivitiesGenerateTagResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DfareportingFloodlightActivitiesGeneratetagResponse.prototype, "statusCode", void 0);
    return DfareportingFloodlightActivitiesGeneratetagResponse;
}(SpeakeasyBase));
export { DfareportingFloodlightActivitiesGeneratetagResponse };
