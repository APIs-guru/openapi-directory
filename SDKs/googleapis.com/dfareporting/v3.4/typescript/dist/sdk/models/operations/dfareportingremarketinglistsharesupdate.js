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
var DfareportingRemarketingListSharesUpdatePathParams = /** @class */ (function (_super) {
    __extends(DfareportingRemarketingListSharesUpdatePathParams, _super);
    function DfareportingRemarketingListSharesUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], DfareportingRemarketingListSharesUpdatePathParams.prototype, "profileId", void 0);
    return DfareportingRemarketingListSharesUpdatePathParams;
}(SpeakeasyBase));
export { DfareportingRemarketingListSharesUpdatePathParams };
var DfareportingRemarketingListSharesUpdateQueryParams = /** @class */ (function (_super) {
    __extends(DfareportingRemarketingListSharesUpdateQueryParams, _super);
    function DfareportingRemarketingListSharesUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DfareportingRemarketingListSharesUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DfareportingRemarketingListSharesUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DfareportingRemarketingListSharesUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DfareportingRemarketingListSharesUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DfareportingRemarketingListSharesUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DfareportingRemarketingListSharesUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DfareportingRemarketingListSharesUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DfareportingRemarketingListSharesUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DfareportingRemarketingListSharesUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DfareportingRemarketingListSharesUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DfareportingRemarketingListSharesUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return DfareportingRemarketingListSharesUpdateQueryParams;
}(SpeakeasyBase));
export { DfareportingRemarketingListSharesUpdateQueryParams };
var DfareportingRemarketingListSharesUpdateSecurity = /** @class */ (function (_super) {
    __extends(DfareportingRemarketingListSharesUpdateSecurity, _super);
    function DfareportingRemarketingListSharesUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingRemarketingListSharesUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingRemarketingListSharesUpdateSecurity.prototype, "oauth2c", void 0);
    return DfareportingRemarketingListSharesUpdateSecurity;
}(SpeakeasyBase));
export { DfareportingRemarketingListSharesUpdateSecurity };
var DfareportingRemarketingListSharesUpdateRequest = /** @class */ (function (_super) {
    __extends(DfareportingRemarketingListSharesUpdateRequest, _super);
    function DfareportingRemarketingListSharesUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingRemarketingListSharesUpdatePathParams)
    ], DfareportingRemarketingListSharesUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingRemarketingListSharesUpdateQueryParams)
    ], DfareportingRemarketingListSharesUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RemarketingListShare)
    ], DfareportingRemarketingListSharesUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingRemarketingListSharesUpdateSecurity)
    ], DfareportingRemarketingListSharesUpdateRequest.prototype, "security", void 0);
    return DfareportingRemarketingListSharesUpdateRequest;
}(SpeakeasyBase));
export { DfareportingRemarketingListSharesUpdateRequest };
var DfareportingRemarketingListSharesUpdateResponse = /** @class */ (function (_super) {
    __extends(DfareportingRemarketingListSharesUpdateResponse, _super);
    function DfareportingRemarketingListSharesUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DfareportingRemarketingListSharesUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RemarketingListShare)
    ], DfareportingRemarketingListSharesUpdateResponse.prototype, "remarketingListShare", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DfareportingRemarketingListSharesUpdateResponse.prototype, "statusCode", void 0);
    return DfareportingRemarketingListSharesUpdateResponse;
}(SpeakeasyBase));
export { DfareportingRemarketingListSharesUpdateResponse };
