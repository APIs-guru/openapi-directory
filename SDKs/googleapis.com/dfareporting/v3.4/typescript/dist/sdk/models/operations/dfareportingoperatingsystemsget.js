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
var DfareportingOperatingSystemsGetPathParams = /** @class */ (function (_super) {
    __extends(DfareportingOperatingSystemsGetPathParams, _super);
    function DfareportingOperatingSystemsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dartId" }),
        __metadata("design:type", String)
    ], DfareportingOperatingSystemsGetPathParams.prototype, "dartId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], DfareportingOperatingSystemsGetPathParams.prototype, "profileId", void 0);
    return DfareportingOperatingSystemsGetPathParams;
}(SpeakeasyBase));
export { DfareportingOperatingSystemsGetPathParams };
var DfareportingOperatingSystemsGetQueryParams = /** @class */ (function (_super) {
    __extends(DfareportingOperatingSystemsGetQueryParams, _super);
    function DfareportingOperatingSystemsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DfareportingOperatingSystemsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DfareportingOperatingSystemsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DfareportingOperatingSystemsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DfareportingOperatingSystemsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DfareportingOperatingSystemsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DfareportingOperatingSystemsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DfareportingOperatingSystemsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DfareportingOperatingSystemsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DfareportingOperatingSystemsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DfareportingOperatingSystemsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DfareportingOperatingSystemsGetQueryParams.prototype, "uploadProtocol", void 0);
    return DfareportingOperatingSystemsGetQueryParams;
}(SpeakeasyBase));
export { DfareportingOperatingSystemsGetQueryParams };
var DfareportingOperatingSystemsGetSecurity = /** @class */ (function (_super) {
    __extends(DfareportingOperatingSystemsGetSecurity, _super);
    function DfareportingOperatingSystemsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingOperatingSystemsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingOperatingSystemsGetSecurity.prototype, "oauth2c", void 0);
    return DfareportingOperatingSystemsGetSecurity;
}(SpeakeasyBase));
export { DfareportingOperatingSystemsGetSecurity };
var DfareportingOperatingSystemsGetRequest = /** @class */ (function (_super) {
    __extends(DfareportingOperatingSystemsGetRequest, _super);
    function DfareportingOperatingSystemsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingOperatingSystemsGetPathParams)
    ], DfareportingOperatingSystemsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingOperatingSystemsGetQueryParams)
    ], DfareportingOperatingSystemsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingOperatingSystemsGetSecurity)
    ], DfareportingOperatingSystemsGetRequest.prototype, "security", void 0);
    return DfareportingOperatingSystemsGetRequest;
}(SpeakeasyBase));
export { DfareportingOperatingSystemsGetRequest };
var DfareportingOperatingSystemsGetResponse = /** @class */ (function (_super) {
    __extends(DfareportingOperatingSystemsGetResponse, _super);
    function DfareportingOperatingSystemsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DfareportingOperatingSystemsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.OperatingSystem)
    ], DfareportingOperatingSystemsGetResponse.prototype, "operatingSystem", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DfareportingOperatingSystemsGetResponse.prototype, "statusCode", void 0);
    return DfareportingOperatingSystemsGetResponse;
}(SpeakeasyBase));
export { DfareportingOperatingSystemsGetResponse };
