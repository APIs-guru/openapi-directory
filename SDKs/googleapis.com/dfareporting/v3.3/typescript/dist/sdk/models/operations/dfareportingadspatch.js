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
var DfareportingAdsPatchPathParams = /** @class */ (function (_super) {
    __extends(DfareportingAdsPatchPathParams, _super);
    function DfareportingAdsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], DfareportingAdsPatchPathParams.prototype, "profileId", void 0);
    return DfareportingAdsPatchPathParams;
}(SpeakeasyBase));
export { DfareportingAdsPatchPathParams };
var DfareportingAdsPatchQueryParams = /** @class */ (function (_super) {
    __extends(DfareportingAdsPatchQueryParams, _super);
    function DfareportingAdsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DfareportingAdsPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DfareportingAdsPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DfareportingAdsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DfareportingAdsPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DfareportingAdsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], DfareportingAdsPatchQueryParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DfareportingAdsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DfareportingAdsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DfareportingAdsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DfareportingAdsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DfareportingAdsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DfareportingAdsPatchQueryParams.prototype, "uploadProtocol", void 0);
    return DfareportingAdsPatchQueryParams;
}(SpeakeasyBase));
export { DfareportingAdsPatchQueryParams };
var DfareportingAdsPatchSecurity = /** @class */ (function (_super) {
    __extends(DfareportingAdsPatchSecurity, _super);
    function DfareportingAdsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingAdsPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingAdsPatchSecurity.prototype, "oauth2c", void 0);
    return DfareportingAdsPatchSecurity;
}(SpeakeasyBase));
export { DfareportingAdsPatchSecurity };
var DfareportingAdsPatchRequest = /** @class */ (function (_super) {
    __extends(DfareportingAdsPatchRequest, _super);
    function DfareportingAdsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingAdsPatchPathParams)
    ], DfareportingAdsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingAdsPatchQueryParams)
    ], DfareportingAdsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Ad)
    ], DfareportingAdsPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingAdsPatchSecurity)
    ], DfareportingAdsPatchRequest.prototype, "security", void 0);
    return DfareportingAdsPatchRequest;
}(SpeakeasyBase));
export { DfareportingAdsPatchRequest };
var DfareportingAdsPatchResponse = /** @class */ (function (_super) {
    __extends(DfareportingAdsPatchResponse, _super);
    function DfareportingAdsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Ad)
    ], DfareportingAdsPatchResponse.prototype, "ad", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DfareportingAdsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DfareportingAdsPatchResponse.prototype, "statusCode", void 0);
    return DfareportingAdsPatchResponse;
}(SpeakeasyBase));
export { DfareportingAdsPatchResponse };
