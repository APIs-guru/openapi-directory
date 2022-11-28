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
var ContentCollectionstatusesGetPathParams = /** @class */ (function (_super) {
    __extends(ContentCollectionstatusesGetPathParams, _super);
    function ContentCollectionstatusesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=collectionId" }),
        __metadata("design:type", String)
    ], ContentCollectionstatusesGetPathParams.prototype, "collectionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=merchantId" }),
        __metadata("design:type", String)
    ], ContentCollectionstatusesGetPathParams.prototype, "merchantId", void 0);
    return ContentCollectionstatusesGetPathParams;
}(SpeakeasyBase));
export { ContentCollectionstatusesGetPathParams };
var ContentCollectionstatusesGetQueryParams = /** @class */ (function (_super) {
    __extends(ContentCollectionstatusesGetQueryParams, _super);
    function ContentCollectionstatusesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContentCollectionstatusesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContentCollectionstatusesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContentCollectionstatusesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContentCollectionstatusesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContentCollectionstatusesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContentCollectionstatusesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContentCollectionstatusesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContentCollectionstatusesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContentCollectionstatusesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContentCollectionstatusesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContentCollectionstatusesGetQueryParams.prototype, "uploadProtocol", void 0);
    return ContentCollectionstatusesGetQueryParams;
}(SpeakeasyBase));
export { ContentCollectionstatusesGetQueryParams };
var ContentCollectionstatusesGetSecurity = /** @class */ (function (_super) {
    __extends(ContentCollectionstatusesGetSecurity, _super);
    function ContentCollectionstatusesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContentCollectionstatusesGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContentCollectionstatusesGetSecurity.prototype, "oauth2c", void 0);
    return ContentCollectionstatusesGetSecurity;
}(SpeakeasyBase));
export { ContentCollectionstatusesGetSecurity };
var ContentCollectionstatusesGetRequest = /** @class */ (function (_super) {
    __extends(ContentCollectionstatusesGetRequest, _super);
    function ContentCollectionstatusesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentCollectionstatusesGetPathParams)
    ], ContentCollectionstatusesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentCollectionstatusesGetQueryParams)
    ], ContentCollectionstatusesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentCollectionstatusesGetSecurity)
    ], ContentCollectionstatusesGetRequest.prototype, "security", void 0);
    return ContentCollectionstatusesGetRequest;
}(SpeakeasyBase));
export { ContentCollectionstatusesGetRequest };
var ContentCollectionstatusesGetResponse = /** @class */ (function (_super) {
    __extends(ContentCollectionstatusesGetResponse, _super);
    function ContentCollectionstatusesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CollectionStatus)
    ], ContentCollectionstatusesGetResponse.prototype, "collectionStatus", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentCollectionstatusesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentCollectionstatusesGetResponse.prototype, "statusCode", void 0);
    return ContentCollectionstatusesGetResponse;
}(SpeakeasyBase));
export { ContentCollectionstatusesGetResponse };
