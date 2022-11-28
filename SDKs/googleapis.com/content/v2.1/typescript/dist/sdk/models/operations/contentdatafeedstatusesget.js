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
var ContentDatafeedstatusesGetPathParams = /** @class */ (function (_super) {
    __extends(ContentDatafeedstatusesGetPathParams, _super);
    function ContentDatafeedstatusesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=datafeedId" }),
        __metadata("design:type", String)
    ], ContentDatafeedstatusesGetPathParams.prototype, "datafeedId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=merchantId" }),
        __metadata("design:type", String)
    ], ContentDatafeedstatusesGetPathParams.prototype, "merchantId", void 0);
    return ContentDatafeedstatusesGetPathParams;
}(SpeakeasyBase));
export { ContentDatafeedstatusesGetPathParams };
var ContentDatafeedstatusesGetQueryParams = /** @class */ (function (_super) {
    __extends(ContentDatafeedstatusesGetQueryParams, _super);
    function ContentDatafeedstatusesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContentDatafeedstatusesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContentDatafeedstatusesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContentDatafeedstatusesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContentDatafeedstatusesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" }),
        __metadata("design:type", String)
    ], ContentDatafeedstatusesGetQueryParams.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=feedLabel" }),
        __metadata("design:type", String)
    ], ContentDatafeedstatusesGetQueryParams.prototype, "feedLabel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContentDatafeedstatusesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContentDatafeedstatusesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" }),
        __metadata("design:type", String)
    ], ContentDatafeedstatusesGetQueryParams.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContentDatafeedstatusesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContentDatafeedstatusesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContentDatafeedstatusesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContentDatafeedstatusesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContentDatafeedstatusesGetQueryParams.prototype, "uploadProtocol", void 0);
    return ContentDatafeedstatusesGetQueryParams;
}(SpeakeasyBase));
export { ContentDatafeedstatusesGetQueryParams };
var ContentDatafeedstatusesGetSecurity = /** @class */ (function (_super) {
    __extends(ContentDatafeedstatusesGetSecurity, _super);
    function ContentDatafeedstatusesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContentDatafeedstatusesGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContentDatafeedstatusesGetSecurity.prototype, "oauth2c", void 0);
    return ContentDatafeedstatusesGetSecurity;
}(SpeakeasyBase));
export { ContentDatafeedstatusesGetSecurity };
var ContentDatafeedstatusesGetRequest = /** @class */ (function (_super) {
    __extends(ContentDatafeedstatusesGetRequest, _super);
    function ContentDatafeedstatusesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentDatafeedstatusesGetPathParams)
    ], ContentDatafeedstatusesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentDatafeedstatusesGetQueryParams)
    ], ContentDatafeedstatusesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentDatafeedstatusesGetSecurity)
    ], ContentDatafeedstatusesGetRequest.prototype, "security", void 0);
    return ContentDatafeedstatusesGetRequest;
}(SpeakeasyBase));
export { ContentDatafeedstatusesGetRequest };
var ContentDatafeedstatusesGetResponse = /** @class */ (function (_super) {
    __extends(ContentDatafeedstatusesGetResponse, _super);
    function ContentDatafeedstatusesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentDatafeedstatusesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DatafeedStatus)
    ], ContentDatafeedstatusesGetResponse.prototype, "datafeedStatus", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentDatafeedstatusesGetResponse.prototype, "statusCode", void 0);
    return ContentDatafeedstatusesGetResponse;
}(SpeakeasyBase));
export { ContentDatafeedstatusesGetResponse };
