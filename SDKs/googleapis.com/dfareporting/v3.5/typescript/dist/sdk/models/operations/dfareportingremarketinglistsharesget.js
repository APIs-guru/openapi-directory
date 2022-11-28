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
var DfareportingRemarketingListSharesGetPathParams = /** @class */ (function (_super) {
    __extends(DfareportingRemarketingListSharesGetPathParams, _super);
    function DfareportingRemarketingListSharesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], DfareportingRemarketingListSharesGetPathParams.prototype, "profileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=remarketingListId" }),
        __metadata("design:type", String)
    ], DfareportingRemarketingListSharesGetPathParams.prototype, "remarketingListId", void 0);
    return DfareportingRemarketingListSharesGetPathParams;
}(SpeakeasyBase));
export { DfareportingRemarketingListSharesGetPathParams };
var DfareportingRemarketingListSharesGetQueryParams = /** @class */ (function (_super) {
    __extends(DfareportingRemarketingListSharesGetQueryParams, _super);
    function DfareportingRemarketingListSharesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DfareportingRemarketingListSharesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DfareportingRemarketingListSharesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DfareportingRemarketingListSharesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DfareportingRemarketingListSharesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DfareportingRemarketingListSharesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DfareportingRemarketingListSharesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DfareportingRemarketingListSharesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DfareportingRemarketingListSharesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DfareportingRemarketingListSharesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DfareportingRemarketingListSharesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DfareportingRemarketingListSharesGetQueryParams.prototype, "uploadProtocol", void 0);
    return DfareportingRemarketingListSharesGetQueryParams;
}(SpeakeasyBase));
export { DfareportingRemarketingListSharesGetQueryParams };
var DfareportingRemarketingListSharesGetSecurity = /** @class */ (function (_super) {
    __extends(DfareportingRemarketingListSharesGetSecurity, _super);
    function DfareportingRemarketingListSharesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingRemarketingListSharesGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingRemarketingListSharesGetSecurity.prototype, "oauth2c", void 0);
    return DfareportingRemarketingListSharesGetSecurity;
}(SpeakeasyBase));
export { DfareportingRemarketingListSharesGetSecurity };
var DfareportingRemarketingListSharesGetRequest = /** @class */ (function (_super) {
    __extends(DfareportingRemarketingListSharesGetRequest, _super);
    function DfareportingRemarketingListSharesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingRemarketingListSharesGetPathParams)
    ], DfareportingRemarketingListSharesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingRemarketingListSharesGetQueryParams)
    ], DfareportingRemarketingListSharesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingRemarketingListSharesGetSecurity)
    ], DfareportingRemarketingListSharesGetRequest.prototype, "security", void 0);
    return DfareportingRemarketingListSharesGetRequest;
}(SpeakeasyBase));
export { DfareportingRemarketingListSharesGetRequest };
var DfareportingRemarketingListSharesGetResponse = /** @class */ (function (_super) {
    __extends(DfareportingRemarketingListSharesGetResponse, _super);
    function DfareportingRemarketingListSharesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DfareportingRemarketingListSharesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RemarketingListShare)
    ], DfareportingRemarketingListSharesGetResponse.prototype, "remarketingListShare", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DfareportingRemarketingListSharesGetResponse.prototype, "statusCode", void 0);
    return DfareportingRemarketingListSharesGetResponse;
}(SpeakeasyBase));
export { DfareportingRemarketingListSharesGetResponse };
