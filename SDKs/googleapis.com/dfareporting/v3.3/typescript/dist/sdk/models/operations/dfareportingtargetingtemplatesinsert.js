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
var DfareportingTargetingTemplatesInsertPathParams = /** @class */ (function (_super) {
    __extends(DfareportingTargetingTemplatesInsertPathParams, _super);
    function DfareportingTargetingTemplatesInsertPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], DfareportingTargetingTemplatesInsertPathParams.prototype, "profileId", void 0);
    return DfareportingTargetingTemplatesInsertPathParams;
}(SpeakeasyBase));
export { DfareportingTargetingTemplatesInsertPathParams };
var DfareportingTargetingTemplatesInsertQueryParams = /** @class */ (function (_super) {
    __extends(DfareportingTargetingTemplatesInsertQueryParams, _super);
    function DfareportingTargetingTemplatesInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DfareportingTargetingTemplatesInsertQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DfareportingTargetingTemplatesInsertQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DfareportingTargetingTemplatesInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DfareportingTargetingTemplatesInsertQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DfareportingTargetingTemplatesInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DfareportingTargetingTemplatesInsertQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DfareportingTargetingTemplatesInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DfareportingTargetingTemplatesInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DfareportingTargetingTemplatesInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DfareportingTargetingTemplatesInsertQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DfareportingTargetingTemplatesInsertQueryParams.prototype, "uploadProtocol", void 0);
    return DfareportingTargetingTemplatesInsertQueryParams;
}(SpeakeasyBase));
export { DfareportingTargetingTemplatesInsertQueryParams };
var DfareportingTargetingTemplatesInsertSecurity = /** @class */ (function (_super) {
    __extends(DfareportingTargetingTemplatesInsertSecurity, _super);
    function DfareportingTargetingTemplatesInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingTargetingTemplatesInsertSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingTargetingTemplatesInsertSecurity.prototype, "oauth2c", void 0);
    return DfareportingTargetingTemplatesInsertSecurity;
}(SpeakeasyBase));
export { DfareportingTargetingTemplatesInsertSecurity };
var DfareportingTargetingTemplatesInsertRequest = /** @class */ (function (_super) {
    __extends(DfareportingTargetingTemplatesInsertRequest, _super);
    function DfareportingTargetingTemplatesInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingTargetingTemplatesInsertPathParams)
    ], DfareportingTargetingTemplatesInsertRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingTargetingTemplatesInsertQueryParams)
    ], DfareportingTargetingTemplatesInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TargetingTemplate)
    ], DfareportingTargetingTemplatesInsertRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingTargetingTemplatesInsertSecurity)
    ], DfareportingTargetingTemplatesInsertRequest.prototype, "security", void 0);
    return DfareportingTargetingTemplatesInsertRequest;
}(SpeakeasyBase));
export { DfareportingTargetingTemplatesInsertRequest };
var DfareportingTargetingTemplatesInsertResponse = /** @class */ (function (_super) {
    __extends(DfareportingTargetingTemplatesInsertResponse, _super);
    function DfareportingTargetingTemplatesInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DfareportingTargetingTemplatesInsertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DfareportingTargetingTemplatesInsertResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TargetingTemplate)
    ], DfareportingTargetingTemplatesInsertResponse.prototype, "targetingTemplate", void 0);
    return DfareportingTargetingTemplatesInsertResponse;
}(SpeakeasyBase));
export { DfareportingTargetingTemplatesInsertResponse };
