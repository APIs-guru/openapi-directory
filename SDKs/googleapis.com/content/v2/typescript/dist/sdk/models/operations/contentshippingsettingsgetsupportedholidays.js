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
var ContentShippingsettingsGetsupportedholidaysPathParams = /** @class */ (function (_super) {
    __extends(ContentShippingsettingsGetsupportedholidaysPathParams, _super);
    function ContentShippingsettingsGetsupportedholidaysPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=merchantId" }),
        __metadata("design:type", String)
    ], ContentShippingsettingsGetsupportedholidaysPathParams.prototype, "merchantId", void 0);
    return ContentShippingsettingsGetsupportedholidaysPathParams;
}(SpeakeasyBase));
export { ContentShippingsettingsGetsupportedholidaysPathParams };
var ContentShippingsettingsGetsupportedholidaysQueryParams = /** @class */ (function (_super) {
    __extends(ContentShippingsettingsGetsupportedholidaysQueryParams, _super);
    function ContentShippingsettingsGetsupportedholidaysQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContentShippingsettingsGetsupportedholidaysQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContentShippingsettingsGetsupportedholidaysQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContentShippingsettingsGetsupportedholidaysQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContentShippingsettingsGetsupportedholidaysQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContentShippingsettingsGetsupportedholidaysQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContentShippingsettingsGetsupportedholidaysQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContentShippingsettingsGetsupportedholidaysQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContentShippingsettingsGetsupportedholidaysQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContentShippingsettingsGetsupportedholidaysQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContentShippingsettingsGetsupportedholidaysQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContentShippingsettingsGetsupportedholidaysQueryParams.prototype, "uploadProtocol", void 0);
    return ContentShippingsettingsGetsupportedholidaysQueryParams;
}(SpeakeasyBase));
export { ContentShippingsettingsGetsupportedholidaysQueryParams };
var ContentShippingsettingsGetsupportedholidaysSecurity = /** @class */ (function (_super) {
    __extends(ContentShippingsettingsGetsupportedholidaysSecurity, _super);
    function ContentShippingsettingsGetsupportedholidaysSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContentShippingsettingsGetsupportedholidaysSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContentShippingsettingsGetsupportedholidaysSecurity.prototype, "oauth2c", void 0);
    return ContentShippingsettingsGetsupportedholidaysSecurity;
}(SpeakeasyBase));
export { ContentShippingsettingsGetsupportedholidaysSecurity };
var ContentShippingsettingsGetsupportedholidaysRequest = /** @class */ (function (_super) {
    __extends(ContentShippingsettingsGetsupportedholidaysRequest, _super);
    function ContentShippingsettingsGetsupportedholidaysRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentShippingsettingsGetsupportedholidaysPathParams)
    ], ContentShippingsettingsGetsupportedholidaysRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentShippingsettingsGetsupportedholidaysQueryParams)
    ], ContentShippingsettingsGetsupportedholidaysRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentShippingsettingsGetsupportedholidaysSecurity)
    ], ContentShippingsettingsGetsupportedholidaysRequest.prototype, "security", void 0);
    return ContentShippingsettingsGetsupportedholidaysRequest;
}(SpeakeasyBase));
export { ContentShippingsettingsGetsupportedholidaysRequest };
var ContentShippingsettingsGetsupportedholidaysResponse = /** @class */ (function (_super) {
    __extends(ContentShippingsettingsGetsupportedholidaysResponse, _super);
    function ContentShippingsettingsGetsupportedholidaysResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentShippingsettingsGetsupportedholidaysResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ShippingsettingsGetSupportedHolidaysResponse)
    ], ContentShippingsettingsGetsupportedholidaysResponse.prototype, "shippingsettingsGetSupportedHolidaysResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentShippingsettingsGetsupportedholidaysResponse.prototype, "statusCode", void 0);
    return ContentShippingsettingsGetsupportedholidaysResponse;
}(SpeakeasyBase));
export { ContentShippingsettingsGetsupportedholidaysResponse };
