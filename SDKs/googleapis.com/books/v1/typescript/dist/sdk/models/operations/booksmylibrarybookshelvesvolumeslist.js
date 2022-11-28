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
var BooksMylibraryBookshelvesVolumesListPathParams = /** @class */ (function (_super) {
    __extends(BooksMylibraryBookshelvesVolumesListPathParams, _super);
    function BooksMylibraryBookshelvesVolumesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=shelf" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesVolumesListPathParams.prototype, "shelf", void 0);
    return BooksMylibraryBookshelvesVolumesListPathParams;
}(SpeakeasyBase));
export { BooksMylibraryBookshelvesVolumesListPathParams };
export var BooksMylibraryBookshelvesVolumesListProjectionEnum;
(function (BooksMylibraryBookshelvesVolumesListProjectionEnum) {
    BooksMylibraryBookshelvesVolumesListProjectionEnum["ProjectionUndefined"] = "PROJECTION_UNDEFINED";
    BooksMylibraryBookshelvesVolumesListProjectionEnum["Full"] = "FULL";
    BooksMylibraryBookshelvesVolumesListProjectionEnum["Lite"] = "LITE";
})(BooksMylibraryBookshelvesVolumesListProjectionEnum || (BooksMylibraryBookshelvesVolumesListProjectionEnum = {}));
var BooksMylibraryBookshelvesVolumesListQueryParams = /** @class */ (function (_super) {
    __extends(BooksMylibraryBookshelvesVolumesListQueryParams, _super);
    function BooksMylibraryBookshelvesVolumesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesVolumesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesVolumesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesVolumesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesVolumesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesVolumesListQueryParams.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesVolumesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesVolumesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], BooksMylibraryBookshelvesVolumesListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesVolumesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BooksMylibraryBookshelvesVolumesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=projection" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesVolumesListQueryParams.prototype, "projection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesVolumesListQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesVolumesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=showPreorders" }),
        __metadata("design:type", Boolean)
    ], BooksMylibraryBookshelvesVolumesListQueryParams.prototype, "showPreorders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=source" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesVolumesListQueryParams.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startIndex" }),
        __metadata("design:type", Number)
    ], BooksMylibraryBookshelvesVolumesListQueryParams.prototype, "startIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesVolumesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesVolumesListQueryParams.prototype, "uploadProtocol", void 0);
    return BooksMylibraryBookshelvesVolumesListQueryParams;
}(SpeakeasyBase));
export { BooksMylibraryBookshelvesVolumesListQueryParams };
var BooksMylibraryBookshelvesVolumesListSecurity = /** @class */ (function (_super) {
    __extends(BooksMylibraryBookshelvesVolumesListSecurity, _super);
    function BooksMylibraryBookshelvesVolumesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BooksMylibraryBookshelvesVolumesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BooksMylibraryBookshelvesVolumesListSecurity.prototype, "oauth2c", void 0);
    return BooksMylibraryBookshelvesVolumesListSecurity;
}(SpeakeasyBase));
export { BooksMylibraryBookshelvesVolumesListSecurity };
var BooksMylibraryBookshelvesVolumesListRequest = /** @class */ (function (_super) {
    __extends(BooksMylibraryBookshelvesVolumesListRequest, _super);
    function BooksMylibraryBookshelvesVolumesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BooksMylibraryBookshelvesVolumesListPathParams)
    ], BooksMylibraryBookshelvesVolumesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BooksMylibraryBookshelvesVolumesListQueryParams)
    ], BooksMylibraryBookshelvesVolumesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BooksMylibraryBookshelvesVolumesListSecurity)
    ], BooksMylibraryBookshelvesVolumesListRequest.prototype, "security", void 0);
    return BooksMylibraryBookshelvesVolumesListRequest;
}(SpeakeasyBase));
export { BooksMylibraryBookshelvesVolumesListRequest };
var BooksMylibraryBookshelvesVolumesListResponse = /** @class */ (function (_super) {
    __extends(BooksMylibraryBookshelvesVolumesListResponse, _super);
    function BooksMylibraryBookshelvesVolumesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesVolumesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BooksMylibraryBookshelvesVolumesListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Volumes)
    ], BooksMylibraryBookshelvesVolumesListResponse.prototype, "volumes", void 0);
    return BooksMylibraryBookshelvesVolumesListResponse;
}(SpeakeasyBase));
export { BooksMylibraryBookshelvesVolumesListResponse };
