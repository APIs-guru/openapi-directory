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
var DfareportingFloodlightActivityGroupsPatchPathParams = /** @class */ (function (_super) {
    __extends(DfareportingFloodlightActivityGroupsPatchPathParams, _super);
    function DfareportingFloodlightActivityGroupsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivityGroupsPatchPathParams.prototype, "profileId", void 0);
    return DfareportingFloodlightActivityGroupsPatchPathParams;
}(SpeakeasyBase));
export { DfareportingFloodlightActivityGroupsPatchPathParams };
var DfareportingFloodlightActivityGroupsPatchQueryParams = /** @class */ (function (_super) {
    __extends(DfareportingFloodlightActivityGroupsPatchQueryParams, _super);
    function DfareportingFloodlightActivityGroupsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivityGroupsPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivityGroupsPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivityGroupsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivityGroupsPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivityGroupsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivityGroupsPatchQueryParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivityGroupsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivityGroupsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DfareportingFloodlightActivityGroupsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivityGroupsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivityGroupsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivityGroupsPatchQueryParams.prototype, "uploadProtocol", void 0);
    return DfareportingFloodlightActivityGroupsPatchQueryParams;
}(SpeakeasyBase));
export { DfareportingFloodlightActivityGroupsPatchQueryParams };
var DfareportingFloodlightActivityGroupsPatchSecurity = /** @class */ (function (_super) {
    __extends(DfareportingFloodlightActivityGroupsPatchSecurity, _super);
    function DfareportingFloodlightActivityGroupsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingFloodlightActivityGroupsPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingFloodlightActivityGroupsPatchSecurity.prototype, "oauth2c", void 0);
    return DfareportingFloodlightActivityGroupsPatchSecurity;
}(SpeakeasyBase));
export { DfareportingFloodlightActivityGroupsPatchSecurity };
var DfareportingFloodlightActivityGroupsPatchRequest = /** @class */ (function (_super) {
    __extends(DfareportingFloodlightActivityGroupsPatchRequest, _super);
    function DfareportingFloodlightActivityGroupsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingFloodlightActivityGroupsPatchPathParams)
    ], DfareportingFloodlightActivityGroupsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingFloodlightActivityGroupsPatchQueryParams)
    ], DfareportingFloodlightActivityGroupsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.FloodlightActivityGroup)
    ], DfareportingFloodlightActivityGroupsPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingFloodlightActivityGroupsPatchSecurity)
    ], DfareportingFloodlightActivityGroupsPatchRequest.prototype, "security", void 0);
    return DfareportingFloodlightActivityGroupsPatchRequest;
}(SpeakeasyBase));
export { DfareportingFloodlightActivityGroupsPatchRequest };
var DfareportingFloodlightActivityGroupsPatchResponse = /** @class */ (function (_super) {
    __extends(DfareportingFloodlightActivityGroupsPatchResponse, _super);
    function DfareportingFloodlightActivityGroupsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivityGroupsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FloodlightActivityGroup)
    ], DfareportingFloodlightActivityGroupsPatchResponse.prototype, "floodlightActivityGroup", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DfareportingFloodlightActivityGroupsPatchResponse.prototype, "statusCode", void 0);
    return DfareportingFloodlightActivityGroupsPatchResponse;
}(SpeakeasyBase));
export { DfareportingFloodlightActivityGroupsPatchResponse };
