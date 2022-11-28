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
var DfareportingTargetingTemplatesUpdatePathParams = /** @class */ (function (_super) {
    __extends(DfareportingTargetingTemplatesUpdatePathParams, _super);
    function DfareportingTargetingTemplatesUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], DfareportingTargetingTemplatesUpdatePathParams.prototype, "profileId", void 0);
    return DfareportingTargetingTemplatesUpdatePathParams;
}(SpeakeasyBase));
export { DfareportingTargetingTemplatesUpdatePathParams };
var DfareportingTargetingTemplatesUpdateQueryParams = /** @class */ (function (_super) {
    __extends(DfareportingTargetingTemplatesUpdateQueryParams, _super);
    function DfareportingTargetingTemplatesUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DfareportingTargetingTemplatesUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DfareportingTargetingTemplatesUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DfareportingTargetingTemplatesUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DfareportingTargetingTemplatesUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DfareportingTargetingTemplatesUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DfareportingTargetingTemplatesUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DfareportingTargetingTemplatesUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DfareportingTargetingTemplatesUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DfareportingTargetingTemplatesUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DfareportingTargetingTemplatesUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DfareportingTargetingTemplatesUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return DfareportingTargetingTemplatesUpdateQueryParams;
}(SpeakeasyBase));
export { DfareportingTargetingTemplatesUpdateQueryParams };
var DfareportingTargetingTemplatesUpdateSecurity = /** @class */ (function (_super) {
    __extends(DfareportingTargetingTemplatesUpdateSecurity, _super);
    function DfareportingTargetingTemplatesUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingTargetingTemplatesUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingTargetingTemplatesUpdateSecurity.prototype, "oauth2c", void 0);
    return DfareportingTargetingTemplatesUpdateSecurity;
}(SpeakeasyBase));
export { DfareportingTargetingTemplatesUpdateSecurity };
var DfareportingTargetingTemplatesUpdateRequest = /** @class */ (function (_super) {
    __extends(DfareportingTargetingTemplatesUpdateRequest, _super);
    function DfareportingTargetingTemplatesUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingTargetingTemplatesUpdatePathParams)
    ], DfareportingTargetingTemplatesUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingTargetingTemplatesUpdateQueryParams)
    ], DfareportingTargetingTemplatesUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TargetingTemplate)
    ], DfareportingTargetingTemplatesUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingTargetingTemplatesUpdateSecurity)
    ], DfareportingTargetingTemplatesUpdateRequest.prototype, "security", void 0);
    return DfareportingTargetingTemplatesUpdateRequest;
}(SpeakeasyBase));
export { DfareportingTargetingTemplatesUpdateRequest };
var DfareportingTargetingTemplatesUpdateResponse = /** @class */ (function (_super) {
    __extends(DfareportingTargetingTemplatesUpdateResponse, _super);
    function DfareportingTargetingTemplatesUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DfareportingTargetingTemplatesUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DfareportingTargetingTemplatesUpdateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TargetingTemplate)
    ], DfareportingTargetingTemplatesUpdateResponse.prototype, "targetingTemplate", void 0);
    return DfareportingTargetingTemplatesUpdateResponse;
}(SpeakeasyBase));
export { DfareportingTargetingTemplatesUpdateResponse };
