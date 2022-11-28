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
var DfareportingCreativeFieldValuesUpdatePathParams = /** @class */ (function (_super) {
    __extends(DfareportingCreativeFieldValuesUpdatePathParams, _super);
    function DfareportingCreativeFieldValuesUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=creativeFieldId" }),
        __metadata("design:type", String)
    ], DfareportingCreativeFieldValuesUpdatePathParams.prototype, "creativeFieldId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], DfareportingCreativeFieldValuesUpdatePathParams.prototype, "profileId", void 0);
    return DfareportingCreativeFieldValuesUpdatePathParams;
}(SpeakeasyBase));
export { DfareportingCreativeFieldValuesUpdatePathParams };
var DfareportingCreativeFieldValuesUpdateQueryParams = /** @class */ (function (_super) {
    __extends(DfareportingCreativeFieldValuesUpdateQueryParams, _super);
    function DfareportingCreativeFieldValuesUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DfareportingCreativeFieldValuesUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DfareportingCreativeFieldValuesUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DfareportingCreativeFieldValuesUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DfareportingCreativeFieldValuesUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DfareportingCreativeFieldValuesUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DfareportingCreativeFieldValuesUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DfareportingCreativeFieldValuesUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DfareportingCreativeFieldValuesUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DfareportingCreativeFieldValuesUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DfareportingCreativeFieldValuesUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DfareportingCreativeFieldValuesUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return DfareportingCreativeFieldValuesUpdateQueryParams;
}(SpeakeasyBase));
export { DfareportingCreativeFieldValuesUpdateQueryParams };
var DfareportingCreativeFieldValuesUpdateSecurity = /** @class */ (function (_super) {
    __extends(DfareportingCreativeFieldValuesUpdateSecurity, _super);
    function DfareportingCreativeFieldValuesUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingCreativeFieldValuesUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingCreativeFieldValuesUpdateSecurity.prototype, "oauth2c", void 0);
    return DfareportingCreativeFieldValuesUpdateSecurity;
}(SpeakeasyBase));
export { DfareportingCreativeFieldValuesUpdateSecurity };
var DfareportingCreativeFieldValuesUpdateRequest = /** @class */ (function (_super) {
    __extends(DfareportingCreativeFieldValuesUpdateRequest, _super);
    function DfareportingCreativeFieldValuesUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingCreativeFieldValuesUpdatePathParams)
    ], DfareportingCreativeFieldValuesUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingCreativeFieldValuesUpdateQueryParams)
    ], DfareportingCreativeFieldValuesUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreativeFieldValue)
    ], DfareportingCreativeFieldValuesUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingCreativeFieldValuesUpdateSecurity)
    ], DfareportingCreativeFieldValuesUpdateRequest.prototype, "security", void 0);
    return DfareportingCreativeFieldValuesUpdateRequest;
}(SpeakeasyBase));
export { DfareportingCreativeFieldValuesUpdateRequest };
var DfareportingCreativeFieldValuesUpdateResponse = /** @class */ (function (_super) {
    __extends(DfareportingCreativeFieldValuesUpdateResponse, _super);
    function DfareportingCreativeFieldValuesUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DfareportingCreativeFieldValuesUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreativeFieldValue)
    ], DfareportingCreativeFieldValuesUpdateResponse.prototype, "creativeFieldValue", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DfareportingCreativeFieldValuesUpdateResponse.prototype, "statusCode", void 0);
    return DfareportingCreativeFieldValuesUpdateResponse;
}(SpeakeasyBase));
export { DfareportingCreativeFieldValuesUpdateResponse };
