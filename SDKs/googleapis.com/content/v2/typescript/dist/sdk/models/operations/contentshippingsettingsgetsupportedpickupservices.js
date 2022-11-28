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
var ContentShippingsettingsGetsupportedpickupservicesPathParams = /** @class */ (function (_super) {
    __extends(ContentShippingsettingsGetsupportedpickupservicesPathParams, _super);
    function ContentShippingsettingsGetsupportedpickupservicesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=merchantId" }),
        __metadata("design:type", String)
    ], ContentShippingsettingsGetsupportedpickupservicesPathParams.prototype, "merchantId", void 0);
    return ContentShippingsettingsGetsupportedpickupservicesPathParams;
}(SpeakeasyBase));
export { ContentShippingsettingsGetsupportedpickupservicesPathParams };
var ContentShippingsettingsGetsupportedpickupservicesQueryParams = /** @class */ (function (_super) {
    __extends(ContentShippingsettingsGetsupportedpickupservicesQueryParams, _super);
    function ContentShippingsettingsGetsupportedpickupservicesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContentShippingsettingsGetsupportedpickupservicesQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContentShippingsettingsGetsupportedpickupservicesQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContentShippingsettingsGetsupportedpickupservicesQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContentShippingsettingsGetsupportedpickupservicesQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContentShippingsettingsGetsupportedpickupservicesQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContentShippingsettingsGetsupportedpickupservicesQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContentShippingsettingsGetsupportedpickupservicesQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContentShippingsettingsGetsupportedpickupservicesQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContentShippingsettingsGetsupportedpickupservicesQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContentShippingsettingsGetsupportedpickupservicesQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContentShippingsettingsGetsupportedpickupservicesQueryParams.prototype, "uploadProtocol", void 0);
    return ContentShippingsettingsGetsupportedpickupservicesQueryParams;
}(SpeakeasyBase));
export { ContentShippingsettingsGetsupportedpickupservicesQueryParams };
var ContentShippingsettingsGetsupportedpickupservicesSecurity = /** @class */ (function (_super) {
    __extends(ContentShippingsettingsGetsupportedpickupservicesSecurity, _super);
    function ContentShippingsettingsGetsupportedpickupservicesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContentShippingsettingsGetsupportedpickupservicesSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContentShippingsettingsGetsupportedpickupservicesSecurity.prototype, "oauth2c", void 0);
    return ContentShippingsettingsGetsupportedpickupservicesSecurity;
}(SpeakeasyBase));
export { ContentShippingsettingsGetsupportedpickupservicesSecurity };
var ContentShippingsettingsGetsupportedpickupservicesRequest = /** @class */ (function (_super) {
    __extends(ContentShippingsettingsGetsupportedpickupservicesRequest, _super);
    function ContentShippingsettingsGetsupportedpickupservicesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentShippingsettingsGetsupportedpickupservicesPathParams)
    ], ContentShippingsettingsGetsupportedpickupservicesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentShippingsettingsGetsupportedpickupservicesQueryParams)
    ], ContentShippingsettingsGetsupportedpickupservicesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentShippingsettingsGetsupportedpickupservicesSecurity)
    ], ContentShippingsettingsGetsupportedpickupservicesRequest.prototype, "security", void 0);
    return ContentShippingsettingsGetsupportedpickupservicesRequest;
}(SpeakeasyBase));
export { ContentShippingsettingsGetsupportedpickupservicesRequest };
var ContentShippingsettingsGetsupportedpickupservicesResponse = /** @class */ (function (_super) {
    __extends(ContentShippingsettingsGetsupportedpickupservicesResponse, _super);
    function ContentShippingsettingsGetsupportedpickupservicesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentShippingsettingsGetsupportedpickupservicesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ShippingsettingsGetSupportedPickupServicesResponse)
    ], ContentShippingsettingsGetsupportedpickupservicesResponse.prototype, "shippingsettingsGetSupportedPickupServicesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentShippingsettingsGetsupportedpickupservicesResponse.prototype, "statusCode", void 0);
    return ContentShippingsettingsGetsupportedpickupservicesResponse;
}(SpeakeasyBase));
export { ContentShippingsettingsGetsupportedpickupservicesResponse };
