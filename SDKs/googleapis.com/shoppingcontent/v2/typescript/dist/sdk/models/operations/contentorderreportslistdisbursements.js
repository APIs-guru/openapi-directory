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
var ContentOrderreportsListdisbursementsPathParams = /** @class */ (function (_super) {
    __extends(ContentOrderreportsListdisbursementsPathParams, _super);
    function ContentOrderreportsListdisbursementsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=merchantId" }),
        __metadata("design:type", String)
    ], ContentOrderreportsListdisbursementsPathParams.prototype, "merchantId", void 0);
    return ContentOrderreportsListdisbursementsPathParams;
}(SpeakeasyBase));
export { ContentOrderreportsListdisbursementsPathParams };
var ContentOrderreportsListdisbursementsQueryParams = /** @class */ (function (_super) {
    __extends(ContentOrderreportsListdisbursementsQueryParams, _super);
    function ContentOrderreportsListdisbursementsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContentOrderreportsListdisbursementsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContentOrderreportsListdisbursementsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContentOrderreportsListdisbursementsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContentOrderreportsListdisbursementsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=disbursementEndDate" }),
        __metadata("design:type", String)
    ], ContentOrderreportsListdisbursementsQueryParams.prototype, "disbursementEndDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=disbursementStartDate" }),
        __metadata("design:type", String)
    ], ContentOrderreportsListdisbursementsQueryParams.prototype, "disbursementStartDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContentOrderreportsListdisbursementsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContentOrderreportsListdisbursementsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], ContentOrderreportsListdisbursementsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContentOrderreportsListdisbursementsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ContentOrderreportsListdisbursementsQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContentOrderreportsListdisbursementsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContentOrderreportsListdisbursementsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContentOrderreportsListdisbursementsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContentOrderreportsListdisbursementsQueryParams.prototype, "uploadProtocol", void 0);
    return ContentOrderreportsListdisbursementsQueryParams;
}(SpeakeasyBase));
export { ContentOrderreportsListdisbursementsQueryParams };
var ContentOrderreportsListdisbursementsSecurity = /** @class */ (function (_super) {
    __extends(ContentOrderreportsListdisbursementsSecurity, _super);
    function ContentOrderreportsListdisbursementsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContentOrderreportsListdisbursementsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContentOrderreportsListdisbursementsSecurity.prototype, "oauth2c", void 0);
    return ContentOrderreportsListdisbursementsSecurity;
}(SpeakeasyBase));
export { ContentOrderreportsListdisbursementsSecurity };
var ContentOrderreportsListdisbursementsRequest = /** @class */ (function (_super) {
    __extends(ContentOrderreportsListdisbursementsRequest, _super);
    function ContentOrderreportsListdisbursementsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentOrderreportsListdisbursementsPathParams)
    ], ContentOrderreportsListdisbursementsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentOrderreportsListdisbursementsQueryParams)
    ], ContentOrderreportsListdisbursementsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentOrderreportsListdisbursementsSecurity)
    ], ContentOrderreportsListdisbursementsRequest.prototype, "security", void 0);
    return ContentOrderreportsListdisbursementsRequest;
}(SpeakeasyBase));
export { ContentOrderreportsListdisbursementsRequest };
var ContentOrderreportsListdisbursementsResponse = /** @class */ (function (_super) {
    __extends(ContentOrderreportsListdisbursementsResponse, _super);
    function ContentOrderreportsListdisbursementsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentOrderreportsListdisbursementsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.OrderreportsListDisbursementsResponse)
    ], ContentOrderreportsListdisbursementsResponse.prototype, "orderreportsListDisbursementsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentOrderreportsListdisbursementsResponse.prototype, "statusCode", void 0);
    return ContentOrderreportsListdisbursementsResponse;
}(SpeakeasyBase));
export { ContentOrderreportsListdisbursementsResponse };
