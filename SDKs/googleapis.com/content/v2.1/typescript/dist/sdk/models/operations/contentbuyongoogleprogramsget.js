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
var ContentBuyongoogleprogramsGetPathParams = /** @class */ (function (_super) {
    __extends(ContentBuyongoogleprogramsGetPathParams, _super);
    function ContentBuyongoogleprogramsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=merchantId" }),
        __metadata("design:type", String)
    ], ContentBuyongoogleprogramsGetPathParams.prototype, "merchantId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=regionCode" }),
        __metadata("design:type", String)
    ], ContentBuyongoogleprogramsGetPathParams.prototype, "regionCode", void 0);
    return ContentBuyongoogleprogramsGetPathParams;
}(SpeakeasyBase));
export { ContentBuyongoogleprogramsGetPathParams };
var ContentBuyongoogleprogramsGetQueryParams = /** @class */ (function (_super) {
    __extends(ContentBuyongoogleprogramsGetQueryParams, _super);
    function ContentBuyongoogleprogramsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContentBuyongoogleprogramsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContentBuyongoogleprogramsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContentBuyongoogleprogramsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContentBuyongoogleprogramsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContentBuyongoogleprogramsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContentBuyongoogleprogramsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContentBuyongoogleprogramsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContentBuyongoogleprogramsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContentBuyongoogleprogramsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContentBuyongoogleprogramsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContentBuyongoogleprogramsGetQueryParams.prototype, "uploadProtocol", void 0);
    return ContentBuyongoogleprogramsGetQueryParams;
}(SpeakeasyBase));
export { ContentBuyongoogleprogramsGetQueryParams };
var ContentBuyongoogleprogramsGetSecurity = /** @class */ (function (_super) {
    __extends(ContentBuyongoogleprogramsGetSecurity, _super);
    function ContentBuyongoogleprogramsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContentBuyongoogleprogramsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContentBuyongoogleprogramsGetSecurity.prototype, "oauth2c", void 0);
    return ContentBuyongoogleprogramsGetSecurity;
}(SpeakeasyBase));
export { ContentBuyongoogleprogramsGetSecurity };
var ContentBuyongoogleprogramsGetRequest = /** @class */ (function (_super) {
    __extends(ContentBuyongoogleprogramsGetRequest, _super);
    function ContentBuyongoogleprogramsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentBuyongoogleprogramsGetPathParams)
    ], ContentBuyongoogleprogramsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentBuyongoogleprogramsGetQueryParams)
    ], ContentBuyongoogleprogramsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentBuyongoogleprogramsGetSecurity)
    ], ContentBuyongoogleprogramsGetRequest.prototype, "security", void 0);
    return ContentBuyongoogleprogramsGetRequest;
}(SpeakeasyBase));
export { ContentBuyongoogleprogramsGetRequest };
var ContentBuyongoogleprogramsGetResponse = /** @class */ (function (_super) {
    __extends(ContentBuyongoogleprogramsGetResponse, _super);
    function ContentBuyongoogleprogramsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BuyOnGoogleProgramStatus)
    ], ContentBuyongoogleprogramsGetResponse.prototype, "buyOnGoogleProgramStatus", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentBuyongoogleprogramsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentBuyongoogleprogramsGetResponse.prototype, "statusCode", void 0);
    return ContentBuyongoogleprogramsGetResponse;
}(SpeakeasyBase));
export { ContentBuyongoogleprogramsGetResponse };
