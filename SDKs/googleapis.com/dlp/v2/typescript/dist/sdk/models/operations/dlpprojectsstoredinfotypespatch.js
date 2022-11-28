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
var DlpProjectsStoredInfoTypesPatchPathParams = /** @class */ (function (_super) {
    __extends(DlpProjectsStoredInfoTypesPatchPathParams, _super);
    function DlpProjectsStoredInfoTypesPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], DlpProjectsStoredInfoTypesPatchPathParams.prototype, "name", void 0);
    return DlpProjectsStoredInfoTypesPatchPathParams;
}(SpeakeasyBase));
export { DlpProjectsStoredInfoTypesPatchPathParams };
var DlpProjectsStoredInfoTypesPatchQueryParams = /** @class */ (function (_super) {
    __extends(DlpProjectsStoredInfoTypesPatchQueryParams, _super);
    function DlpProjectsStoredInfoTypesPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DlpProjectsStoredInfoTypesPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DlpProjectsStoredInfoTypesPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DlpProjectsStoredInfoTypesPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DlpProjectsStoredInfoTypesPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DlpProjectsStoredInfoTypesPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DlpProjectsStoredInfoTypesPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DlpProjectsStoredInfoTypesPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DlpProjectsStoredInfoTypesPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DlpProjectsStoredInfoTypesPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DlpProjectsStoredInfoTypesPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DlpProjectsStoredInfoTypesPatchQueryParams.prototype, "uploadProtocol", void 0);
    return DlpProjectsStoredInfoTypesPatchQueryParams;
}(SpeakeasyBase));
export { DlpProjectsStoredInfoTypesPatchQueryParams };
var DlpProjectsStoredInfoTypesPatchSecurity = /** @class */ (function (_super) {
    __extends(DlpProjectsStoredInfoTypesPatchSecurity, _super);
    function DlpProjectsStoredInfoTypesPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DlpProjectsStoredInfoTypesPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DlpProjectsStoredInfoTypesPatchSecurity.prototype, "oauth2c", void 0);
    return DlpProjectsStoredInfoTypesPatchSecurity;
}(SpeakeasyBase));
export { DlpProjectsStoredInfoTypesPatchSecurity };
var DlpProjectsStoredInfoTypesPatchRequest = /** @class */ (function (_super) {
    __extends(DlpProjectsStoredInfoTypesPatchRequest, _super);
    function DlpProjectsStoredInfoTypesPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DlpProjectsStoredInfoTypesPatchPathParams)
    ], DlpProjectsStoredInfoTypesPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DlpProjectsStoredInfoTypesPatchQueryParams)
    ], DlpProjectsStoredInfoTypesPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GooglePrivacyDlpV2UpdateStoredInfoTypeRequest)
    ], DlpProjectsStoredInfoTypesPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DlpProjectsStoredInfoTypesPatchSecurity)
    ], DlpProjectsStoredInfoTypesPatchRequest.prototype, "security", void 0);
    return DlpProjectsStoredInfoTypesPatchRequest;
}(SpeakeasyBase));
export { DlpProjectsStoredInfoTypesPatchRequest };
var DlpProjectsStoredInfoTypesPatchResponse = /** @class */ (function (_super) {
    __extends(DlpProjectsStoredInfoTypesPatchResponse, _super);
    function DlpProjectsStoredInfoTypesPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DlpProjectsStoredInfoTypesPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GooglePrivacyDlpV2StoredInfoType)
    ], DlpProjectsStoredInfoTypesPatchResponse.prototype, "googlePrivacyDlpV2StoredInfoType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DlpProjectsStoredInfoTypesPatchResponse.prototype, "statusCode", void 0);
    return DlpProjectsStoredInfoTypesPatchResponse;
}(SpeakeasyBase));
export { DlpProjectsStoredInfoTypesPatchResponse };
