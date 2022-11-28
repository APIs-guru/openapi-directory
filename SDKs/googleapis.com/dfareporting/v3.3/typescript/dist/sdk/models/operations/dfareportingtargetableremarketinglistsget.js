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
var DfareportingTargetableRemarketingListsGetPathParams = /** @class */ (function (_super) {
    __extends(DfareportingTargetableRemarketingListsGetPathParams, _super);
    function DfareportingTargetableRemarketingListsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], DfareportingTargetableRemarketingListsGetPathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], DfareportingTargetableRemarketingListsGetPathParams.prototype, "profileId", void 0);
    return DfareportingTargetableRemarketingListsGetPathParams;
}(SpeakeasyBase));
export { DfareportingTargetableRemarketingListsGetPathParams };
var DfareportingTargetableRemarketingListsGetQueryParams = /** @class */ (function (_super) {
    __extends(DfareportingTargetableRemarketingListsGetQueryParams, _super);
    function DfareportingTargetableRemarketingListsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DfareportingTargetableRemarketingListsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DfareportingTargetableRemarketingListsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DfareportingTargetableRemarketingListsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DfareportingTargetableRemarketingListsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DfareportingTargetableRemarketingListsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DfareportingTargetableRemarketingListsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DfareportingTargetableRemarketingListsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DfareportingTargetableRemarketingListsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DfareportingTargetableRemarketingListsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DfareportingTargetableRemarketingListsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DfareportingTargetableRemarketingListsGetQueryParams.prototype, "uploadProtocol", void 0);
    return DfareportingTargetableRemarketingListsGetQueryParams;
}(SpeakeasyBase));
export { DfareportingTargetableRemarketingListsGetQueryParams };
var DfareportingTargetableRemarketingListsGetSecurity = /** @class */ (function (_super) {
    __extends(DfareportingTargetableRemarketingListsGetSecurity, _super);
    function DfareportingTargetableRemarketingListsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingTargetableRemarketingListsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingTargetableRemarketingListsGetSecurity.prototype, "oauth2c", void 0);
    return DfareportingTargetableRemarketingListsGetSecurity;
}(SpeakeasyBase));
export { DfareportingTargetableRemarketingListsGetSecurity };
var DfareportingTargetableRemarketingListsGetRequest = /** @class */ (function (_super) {
    __extends(DfareportingTargetableRemarketingListsGetRequest, _super);
    function DfareportingTargetableRemarketingListsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingTargetableRemarketingListsGetPathParams)
    ], DfareportingTargetableRemarketingListsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingTargetableRemarketingListsGetQueryParams)
    ], DfareportingTargetableRemarketingListsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingTargetableRemarketingListsGetSecurity)
    ], DfareportingTargetableRemarketingListsGetRequest.prototype, "security", void 0);
    return DfareportingTargetableRemarketingListsGetRequest;
}(SpeakeasyBase));
export { DfareportingTargetableRemarketingListsGetRequest };
var DfareportingTargetableRemarketingListsGetResponse = /** @class */ (function (_super) {
    __extends(DfareportingTargetableRemarketingListsGetResponse, _super);
    function DfareportingTargetableRemarketingListsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DfareportingTargetableRemarketingListsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DfareportingTargetableRemarketingListsGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TargetableRemarketingList)
    ], DfareportingTargetableRemarketingListsGetResponse.prototype, "targetableRemarketingList", void 0);
    return DfareportingTargetableRemarketingListsGetResponse;
}(SpeakeasyBase));
export { DfareportingTargetableRemarketingListsGetResponse };
