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
var ContentBuyongoogleprogramsActivatePathParams = /** @class */ (function (_super) {
    __extends(ContentBuyongoogleprogramsActivatePathParams, _super);
    function ContentBuyongoogleprogramsActivatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=merchantId" }),
        __metadata("design:type", String)
    ], ContentBuyongoogleprogramsActivatePathParams.prototype, "merchantId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=regionCode" }),
        __metadata("design:type", String)
    ], ContentBuyongoogleprogramsActivatePathParams.prototype, "regionCode", void 0);
    return ContentBuyongoogleprogramsActivatePathParams;
}(SpeakeasyBase));
export { ContentBuyongoogleprogramsActivatePathParams };
var ContentBuyongoogleprogramsActivateQueryParams = /** @class */ (function (_super) {
    __extends(ContentBuyongoogleprogramsActivateQueryParams, _super);
    function ContentBuyongoogleprogramsActivateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContentBuyongoogleprogramsActivateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContentBuyongoogleprogramsActivateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContentBuyongoogleprogramsActivateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContentBuyongoogleprogramsActivateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContentBuyongoogleprogramsActivateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContentBuyongoogleprogramsActivateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContentBuyongoogleprogramsActivateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContentBuyongoogleprogramsActivateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContentBuyongoogleprogramsActivateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContentBuyongoogleprogramsActivateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContentBuyongoogleprogramsActivateQueryParams.prototype, "uploadProtocol", void 0);
    return ContentBuyongoogleprogramsActivateQueryParams;
}(SpeakeasyBase));
export { ContentBuyongoogleprogramsActivateQueryParams };
var ContentBuyongoogleprogramsActivateSecurity = /** @class */ (function (_super) {
    __extends(ContentBuyongoogleprogramsActivateSecurity, _super);
    function ContentBuyongoogleprogramsActivateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContentBuyongoogleprogramsActivateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContentBuyongoogleprogramsActivateSecurity.prototype, "oauth2c", void 0);
    return ContentBuyongoogleprogramsActivateSecurity;
}(SpeakeasyBase));
export { ContentBuyongoogleprogramsActivateSecurity };
var ContentBuyongoogleprogramsActivateRequest = /** @class */ (function (_super) {
    __extends(ContentBuyongoogleprogramsActivateRequest, _super);
    function ContentBuyongoogleprogramsActivateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentBuyongoogleprogramsActivatePathParams)
    ], ContentBuyongoogleprogramsActivateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentBuyongoogleprogramsActivateQueryParams)
    ], ContentBuyongoogleprogramsActivateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], ContentBuyongoogleprogramsActivateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentBuyongoogleprogramsActivateSecurity)
    ], ContentBuyongoogleprogramsActivateRequest.prototype, "security", void 0);
    return ContentBuyongoogleprogramsActivateRequest;
}(SpeakeasyBase));
export { ContentBuyongoogleprogramsActivateRequest };
var ContentBuyongoogleprogramsActivateResponse = /** @class */ (function (_super) {
    __extends(ContentBuyongoogleprogramsActivateResponse, _super);
    function ContentBuyongoogleprogramsActivateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentBuyongoogleprogramsActivateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentBuyongoogleprogramsActivateResponse.prototype, "statusCode", void 0);
    return ContentBuyongoogleprogramsActivateResponse;
}(SpeakeasyBase));
export { ContentBuyongoogleprogramsActivateResponse };
