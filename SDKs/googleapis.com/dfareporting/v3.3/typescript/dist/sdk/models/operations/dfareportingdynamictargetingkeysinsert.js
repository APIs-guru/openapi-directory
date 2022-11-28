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
var DfareportingDynamicTargetingKeysInsertPathParams = /** @class */ (function (_super) {
    __extends(DfareportingDynamicTargetingKeysInsertPathParams, _super);
    function DfareportingDynamicTargetingKeysInsertPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], DfareportingDynamicTargetingKeysInsertPathParams.prototype, "profileId", void 0);
    return DfareportingDynamicTargetingKeysInsertPathParams;
}(SpeakeasyBase));
export { DfareportingDynamicTargetingKeysInsertPathParams };
var DfareportingDynamicTargetingKeysInsertQueryParams = /** @class */ (function (_super) {
    __extends(DfareportingDynamicTargetingKeysInsertQueryParams, _super);
    function DfareportingDynamicTargetingKeysInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DfareportingDynamicTargetingKeysInsertQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DfareportingDynamicTargetingKeysInsertQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DfareportingDynamicTargetingKeysInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DfareportingDynamicTargetingKeysInsertQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DfareportingDynamicTargetingKeysInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DfareportingDynamicTargetingKeysInsertQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DfareportingDynamicTargetingKeysInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DfareportingDynamicTargetingKeysInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DfareportingDynamicTargetingKeysInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DfareportingDynamicTargetingKeysInsertQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DfareportingDynamicTargetingKeysInsertQueryParams.prototype, "uploadProtocol", void 0);
    return DfareportingDynamicTargetingKeysInsertQueryParams;
}(SpeakeasyBase));
export { DfareportingDynamicTargetingKeysInsertQueryParams };
var DfareportingDynamicTargetingKeysInsertSecurity = /** @class */ (function (_super) {
    __extends(DfareportingDynamicTargetingKeysInsertSecurity, _super);
    function DfareportingDynamicTargetingKeysInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingDynamicTargetingKeysInsertSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingDynamicTargetingKeysInsertSecurity.prototype, "oauth2c", void 0);
    return DfareportingDynamicTargetingKeysInsertSecurity;
}(SpeakeasyBase));
export { DfareportingDynamicTargetingKeysInsertSecurity };
var DfareportingDynamicTargetingKeysInsertRequest = /** @class */ (function (_super) {
    __extends(DfareportingDynamicTargetingKeysInsertRequest, _super);
    function DfareportingDynamicTargetingKeysInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingDynamicTargetingKeysInsertPathParams)
    ], DfareportingDynamicTargetingKeysInsertRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingDynamicTargetingKeysInsertQueryParams)
    ], DfareportingDynamicTargetingKeysInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DynamicTargetingKey)
    ], DfareportingDynamicTargetingKeysInsertRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingDynamicTargetingKeysInsertSecurity)
    ], DfareportingDynamicTargetingKeysInsertRequest.prototype, "security", void 0);
    return DfareportingDynamicTargetingKeysInsertRequest;
}(SpeakeasyBase));
export { DfareportingDynamicTargetingKeysInsertRequest };
var DfareportingDynamicTargetingKeysInsertResponse = /** @class */ (function (_super) {
    __extends(DfareportingDynamicTargetingKeysInsertResponse, _super);
    function DfareportingDynamicTargetingKeysInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DfareportingDynamicTargetingKeysInsertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DynamicTargetingKey)
    ], DfareportingDynamicTargetingKeysInsertResponse.prototype, "dynamicTargetingKey", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DfareportingDynamicTargetingKeysInsertResponse.prototype, "statusCode", void 0);
    return DfareportingDynamicTargetingKeysInsertResponse;
}(SpeakeasyBase));
export { DfareportingDynamicTargetingKeysInsertResponse };
