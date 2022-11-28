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
export var ContentOrdersGettestordertemplateTemplateNameEnum;
(function (ContentOrdersGettestordertemplateTemplateNameEnum) {
    ContentOrdersGettestordertemplateTemplateNameEnum["Template1"] = "TEMPLATE1";
    ContentOrdersGettestordertemplateTemplateNameEnum["Template2"] = "TEMPLATE2";
    ContentOrdersGettestordertemplateTemplateNameEnum["Template1A"] = "TEMPLATE1A";
    ContentOrdersGettestordertemplateTemplateNameEnum["Template1B"] = "TEMPLATE1B";
    ContentOrdersGettestordertemplateTemplateNameEnum["Template3"] = "TEMPLATE3";
    ContentOrdersGettestordertemplateTemplateNameEnum["Template4"] = "TEMPLATE4";
})(ContentOrdersGettestordertemplateTemplateNameEnum || (ContentOrdersGettestordertemplateTemplateNameEnum = {}));
var ContentOrdersGettestordertemplatePathParams = /** @class */ (function (_super) {
    __extends(ContentOrdersGettestordertemplatePathParams, _super);
    function ContentOrdersGettestordertemplatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=merchantId" }),
        __metadata("design:type", String)
    ], ContentOrdersGettestordertemplatePathParams.prototype, "merchantId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=templateName" }),
        __metadata("design:type", String)
    ], ContentOrdersGettestordertemplatePathParams.prototype, "templateName", void 0);
    return ContentOrdersGettestordertemplatePathParams;
}(SpeakeasyBase));
export { ContentOrdersGettestordertemplatePathParams };
var ContentOrdersGettestordertemplateQueryParams = /** @class */ (function (_super) {
    __extends(ContentOrdersGettestordertemplateQueryParams, _super);
    function ContentOrdersGettestordertemplateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContentOrdersGettestordertemplateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContentOrdersGettestordertemplateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContentOrdersGettestordertemplateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContentOrdersGettestordertemplateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" }),
        __metadata("design:type", String)
    ], ContentOrdersGettestordertemplateQueryParams.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContentOrdersGettestordertemplateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContentOrdersGettestordertemplateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContentOrdersGettestordertemplateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContentOrdersGettestordertemplateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContentOrdersGettestordertemplateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContentOrdersGettestordertemplateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContentOrdersGettestordertemplateQueryParams.prototype, "uploadProtocol", void 0);
    return ContentOrdersGettestordertemplateQueryParams;
}(SpeakeasyBase));
export { ContentOrdersGettestordertemplateQueryParams };
var ContentOrdersGettestordertemplateSecurity = /** @class */ (function (_super) {
    __extends(ContentOrdersGettestordertemplateSecurity, _super);
    function ContentOrdersGettestordertemplateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContentOrdersGettestordertemplateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContentOrdersGettestordertemplateSecurity.prototype, "oauth2c", void 0);
    return ContentOrdersGettestordertemplateSecurity;
}(SpeakeasyBase));
export { ContentOrdersGettestordertemplateSecurity };
var ContentOrdersGettestordertemplateRequest = /** @class */ (function (_super) {
    __extends(ContentOrdersGettestordertemplateRequest, _super);
    function ContentOrdersGettestordertemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentOrdersGettestordertemplatePathParams)
    ], ContentOrdersGettestordertemplateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentOrdersGettestordertemplateQueryParams)
    ], ContentOrdersGettestordertemplateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentOrdersGettestordertemplateSecurity)
    ], ContentOrdersGettestordertemplateRequest.prototype, "security", void 0);
    return ContentOrdersGettestordertemplateRequest;
}(SpeakeasyBase));
export { ContentOrdersGettestordertemplateRequest };
var ContentOrdersGettestordertemplateResponse = /** @class */ (function (_super) {
    __extends(ContentOrdersGettestordertemplateResponse, _super);
    function ContentOrdersGettestordertemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentOrdersGettestordertemplateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.OrdersGetTestOrderTemplateResponse)
    ], ContentOrdersGettestordertemplateResponse.prototype, "ordersGetTestOrderTemplateResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentOrdersGettestordertemplateResponse.prototype, "statusCode", void 0);
    return ContentOrdersGettestordertemplateResponse;
}(SpeakeasyBase));
export { ContentOrdersGettestordertemplateResponse };
