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
var BooksMylibraryReadingpositionsSetPositionPathParams = /** @class */ (function (_super) {
    __extends(BooksMylibraryReadingpositionsSetPositionPathParams, _super);
    function BooksMylibraryReadingpositionsSetPositionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=volumeId" }),
        __metadata("design:type", String)
    ], BooksMylibraryReadingpositionsSetPositionPathParams.prototype, "volumeId", void 0);
    return BooksMylibraryReadingpositionsSetPositionPathParams;
}(SpeakeasyBase));
export { BooksMylibraryReadingpositionsSetPositionPathParams };
export var BooksMylibraryReadingpositionsSetPositionActionEnum;
(function (BooksMylibraryReadingpositionsSetPositionActionEnum) {
    BooksMylibraryReadingpositionsSetPositionActionEnum["ActionUndefined"] = "ACTION_UNDEFINED";
    BooksMylibraryReadingpositionsSetPositionActionEnum["Bookmark"] = "bookmark";
    BooksMylibraryReadingpositionsSetPositionActionEnum["Chapter"] = "chapter";
    BooksMylibraryReadingpositionsSetPositionActionEnum["NextPage"] = "next-page";
    BooksMylibraryReadingpositionsSetPositionActionEnum["PrevPage"] = "prev-page";
    BooksMylibraryReadingpositionsSetPositionActionEnum["Scroll"] = "scroll";
    BooksMylibraryReadingpositionsSetPositionActionEnum["Search"] = "search";
})(BooksMylibraryReadingpositionsSetPositionActionEnum || (BooksMylibraryReadingpositionsSetPositionActionEnum = {}));
var BooksMylibraryReadingpositionsSetPositionQueryParams = /** @class */ (function (_super) {
    __extends(BooksMylibraryReadingpositionsSetPositionQueryParams, _super);
    function BooksMylibraryReadingpositionsSetPositionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BooksMylibraryReadingpositionsSetPositionQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BooksMylibraryReadingpositionsSetPositionQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=action" }),
        __metadata("design:type", String)
    ], BooksMylibraryReadingpositionsSetPositionQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BooksMylibraryReadingpositionsSetPositionQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BooksMylibraryReadingpositionsSetPositionQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contentVersion" }),
        __metadata("design:type", String)
    ], BooksMylibraryReadingpositionsSetPositionQueryParams.prototype, "contentVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deviceCookie" }),
        __metadata("design:type", String)
    ], BooksMylibraryReadingpositionsSetPositionQueryParams.prototype, "deviceCookie", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BooksMylibraryReadingpositionsSetPositionQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BooksMylibraryReadingpositionsSetPositionQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BooksMylibraryReadingpositionsSetPositionQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=position" }),
        __metadata("design:type", String)
    ], BooksMylibraryReadingpositionsSetPositionQueryParams.prototype, "position", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BooksMylibraryReadingpositionsSetPositionQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BooksMylibraryReadingpositionsSetPositionQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=source" }),
        __metadata("design:type", String)
    ], BooksMylibraryReadingpositionsSetPositionQueryParams.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timestamp" }),
        __metadata("design:type", String)
    ], BooksMylibraryReadingpositionsSetPositionQueryParams.prototype, "timestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BooksMylibraryReadingpositionsSetPositionQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BooksMylibraryReadingpositionsSetPositionQueryParams.prototype, "uploadProtocol", void 0);
    return BooksMylibraryReadingpositionsSetPositionQueryParams;
}(SpeakeasyBase));
export { BooksMylibraryReadingpositionsSetPositionQueryParams };
var BooksMylibraryReadingpositionsSetPositionSecurity = /** @class */ (function (_super) {
    __extends(BooksMylibraryReadingpositionsSetPositionSecurity, _super);
    function BooksMylibraryReadingpositionsSetPositionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BooksMylibraryReadingpositionsSetPositionSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BooksMylibraryReadingpositionsSetPositionSecurity.prototype, "oauth2c", void 0);
    return BooksMylibraryReadingpositionsSetPositionSecurity;
}(SpeakeasyBase));
export { BooksMylibraryReadingpositionsSetPositionSecurity };
var BooksMylibraryReadingpositionsSetPositionRequest = /** @class */ (function (_super) {
    __extends(BooksMylibraryReadingpositionsSetPositionRequest, _super);
    function BooksMylibraryReadingpositionsSetPositionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BooksMylibraryReadingpositionsSetPositionPathParams)
    ], BooksMylibraryReadingpositionsSetPositionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BooksMylibraryReadingpositionsSetPositionQueryParams)
    ], BooksMylibraryReadingpositionsSetPositionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BooksMylibraryReadingpositionsSetPositionSecurity)
    ], BooksMylibraryReadingpositionsSetPositionRequest.prototype, "security", void 0);
    return BooksMylibraryReadingpositionsSetPositionRequest;
}(SpeakeasyBase));
export { BooksMylibraryReadingpositionsSetPositionRequest };
var BooksMylibraryReadingpositionsSetPositionResponse = /** @class */ (function (_super) {
    __extends(BooksMylibraryReadingpositionsSetPositionResponse, _super);
    function BooksMylibraryReadingpositionsSetPositionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BooksMylibraryReadingpositionsSetPositionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], BooksMylibraryReadingpositionsSetPositionResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BooksMylibraryReadingpositionsSetPositionResponse.prototype, "statusCode", void 0);
    return BooksMylibraryReadingpositionsSetPositionResponse;
}(SpeakeasyBase));
export { BooksMylibraryReadingpositionsSetPositionResponse };
