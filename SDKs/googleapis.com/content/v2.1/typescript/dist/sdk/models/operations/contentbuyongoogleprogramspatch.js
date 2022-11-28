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
var ContentBuyongoogleprogramsPatchPathParams = /** @class */ (function (_super) {
    __extends(ContentBuyongoogleprogramsPatchPathParams, _super);
    function ContentBuyongoogleprogramsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=merchantId" }),
        __metadata("design:type", String)
    ], ContentBuyongoogleprogramsPatchPathParams.prototype, "merchantId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=regionCode" }),
        __metadata("design:type", String)
    ], ContentBuyongoogleprogramsPatchPathParams.prototype, "regionCode", void 0);
    return ContentBuyongoogleprogramsPatchPathParams;
}(SpeakeasyBase));
export { ContentBuyongoogleprogramsPatchPathParams };
var ContentBuyongoogleprogramsPatchQueryParams = /** @class */ (function (_super) {
    __extends(ContentBuyongoogleprogramsPatchQueryParams, _super);
    function ContentBuyongoogleprogramsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContentBuyongoogleprogramsPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContentBuyongoogleprogramsPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContentBuyongoogleprogramsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContentBuyongoogleprogramsPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContentBuyongoogleprogramsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContentBuyongoogleprogramsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContentBuyongoogleprogramsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContentBuyongoogleprogramsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContentBuyongoogleprogramsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], ContentBuyongoogleprogramsPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContentBuyongoogleprogramsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContentBuyongoogleprogramsPatchQueryParams.prototype, "uploadProtocol", void 0);
    return ContentBuyongoogleprogramsPatchQueryParams;
}(SpeakeasyBase));
export { ContentBuyongoogleprogramsPatchQueryParams };
var ContentBuyongoogleprogramsPatchSecurity = /** @class */ (function (_super) {
    __extends(ContentBuyongoogleprogramsPatchSecurity, _super);
    function ContentBuyongoogleprogramsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContentBuyongoogleprogramsPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContentBuyongoogleprogramsPatchSecurity.prototype, "oauth2c", void 0);
    return ContentBuyongoogleprogramsPatchSecurity;
}(SpeakeasyBase));
export { ContentBuyongoogleprogramsPatchSecurity };
var ContentBuyongoogleprogramsPatchRequest = /** @class */ (function (_super) {
    __extends(ContentBuyongoogleprogramsPatchRequest, _super);
    function ContentBuyongoogleprogramsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentBuyongoogleprogramsPatchPathParams)
    ], ContentBuyongoogleprogramsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentBuyongoogleprogramsPatchQueryParams)
    ], ContentBuyongoogleprogramsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BuyOnGoogleProgramStatusInput)
    ], ContentBuyongoogleprogramsPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentBuyongoogleprogramsPatchSecurity)
    ], ContentBuyongoogleprogramsPatchRequest.prototype, "security", void 0);
    return ContentBuyongoogleprogramsPatchRequest;
}(SpeakeasyBase));
export { ContentBuyongoogleprogramsPatchRequest };
var ContentBuyongoogleprogramsPatchResponse = /** @class */ (function (_super) {
    __extends(ContentBuyongoogleprogramsPatchResponse, _super);
    function ContentBuyongoogleprogramsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BuyOnGoogleProgramStatus)
    ], ContentBuyongoogleprogramsPatchResponse.prototype, "buyOnGoogleProgramStatus", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentBuyongoogleprogramsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentBuyongoogleprogramsPatchResponse.prototype, "statusCode", void 0);
    return ContentBuyongoogleprogramsPatchResponse;
}(SpeakeasyBase));
export { ContentBuyongoogleprogramsPatchResponse };
