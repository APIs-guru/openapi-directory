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
var DisplayvideoAdvertisersLocationListsCreatePathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersLocationListsCreatePathParams, _super);
    function DisplayvideoAdvertisersLocationListsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=advertiserId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLocationListsCreatePathParams.prototype, "advertiserId", void 0);
    return DisplayvideoAdvertisersLocationListsCreatePathParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersLocationListsCreatePathParams };
var DisplayvideoAdvertisersLocationListsCreateQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersLocationListsCreateQueryParams, _super);
    function DisplayvideoAdvertisersLocationListsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLocationListsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLocationListsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLocationListsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLocationListsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLocationListsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLocationListsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLocationListsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoAdvertisersLocationListsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLocationListsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLocationListsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLocationListsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoAdvertisersLocationListsCreateQueryParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersLocationListsCreateQueryParams };
var DisplayvideoAdvertisersLocationListsCreateSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersLocationListsCreateSecurity, _super);
    function DisplayvideoAdvertisersLocationListsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoAdvertisersLocationListsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoAdvertisersLocationListsCreateSecurity.prototype, "oauth2c", void 0);
    return DisplayvideoAdvertisersLocationListsCreateSecurity;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersLocationListsCreateSecurity };
var DisplayvideoAdvertisersLocationListsCreateRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersLocationListsCreateRequest, _super);
    function DisplayvideoAdvertisersLocationListsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersLocationListsCreatePathParams)
    ], DisplayvideoAdvertisersLocationListsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersLocationListsCreateQueryParams)
    ], DisplayvideoAdvertisersLocationListsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.LocationListInput)
    ], DisplayvideoAdvertisersLocationListsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersLocationListsCreateSecurity)
    ], DisplayvideoAdvertisersLocationListsCreateRequest.prototype, "security", void 0);
    return DisplayvideoAdvertisersLocationListsCreateRequest;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersLocationListsCreateRequest };
var DisplayvideoAdvertisersLocationListsCreateResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersLocationListsCreateResponse, _super);
    function DisplayvideoAdvertisersLocationListsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLocationListsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LocationList)
    ], DisplayvideoAdvertisersLocationListsCreateResponse.prototype, "locationList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoAdvertisersLocationListsCreateResponse.prototype, "statusCode", void 0);
    return DisplayvideoAdvertisersLocationListsCreateResponse;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersLocationListsCreateResponse };
