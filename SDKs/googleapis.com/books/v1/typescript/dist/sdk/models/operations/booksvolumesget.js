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
var BooksVolumesGetPathParams = /** @class */ (function (_super) {
    __extends(BooksVolumesGetPathParams, _super);
    function BooksVolumesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=volumeId" }),
        __metadata("design:type", String)
    ], BooksVolumesGetPathParams.prototype, "volumeId", void 0);
    return BooksVolumesGetPathParams;
}(SpeakeasyBase));
export { BooksVolumesGetPathParams };
export var BooksVolumesGetProjectionEnum;
(function (BooksVolumesGetProjectionEnum) {
    BooksVolumesGetProjectionEnum["ProjectionUndefined"] = "PROJECTION_UNDEFINED";
    BooksVolumesGetProjectionEnum["Full"] = "FULL";
    BooksVolumesGetProjectionEnum["Lite"] = "LITE";
})(BooksVolumesGetProjectionEnum || (BooksVolumesGetProjectionEnum = {}));
var BooksVolumesGetQueryParams = /** @class */ (function (_super) {
    __extends(BooksVolumesGetQueryParams, _super);
    function BooksVolumesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BooksVolumesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BooksVolumesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BooksVolumesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BooksVolumesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" }),
        __metadata("design:type", String)
    ], BooksVolumesGetQueryParams.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BooksVolumesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeNonComicsSeries" }),
        __metadata("design:type", Boolean)
    ], BooksVolumesGetQueryParams.prototype, "includeNonComicsSeries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BooksVolumesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BooksVolumesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=partner" }),
        __metadata("design:type", String)
    ], BooksVolumesGetQueryParams.prototype, "partner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BooksVolumesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=projection" }),
        __metadata("design:type", String)
    ], BooksVolumesGetQueryParams.prototype, "projection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BooksVolumesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=source" }),
        __metadata("design:type", String)
    ], BooksVolumesGetQueryParams.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BooksVolumesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BooksVolumesGetQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_library_consistent_read" }),
        __metadata("design:type", Boolean)
    ], BooksVolumesGetQueryParams.prototype, "userLibraryConsistentRead", void 0);
    return BooksVolumesGetQueryParams;
}(SpeakeasyBase));
export { BooksVolumesGetQueryParams };
var BooksVolumesGetSecurity = /** @class */ (function (_super) {
    __extends(BooksVolumesGetSecurity, _super);
    function BooksVolumesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BooksVolumesGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BooksVolumesGetSecurity.prototype, "oauth2c", void 0);
    return BooksVolumesGetSecurity;
}(SpeakeasyBase));
export { BooksVolumesGetSecurity };
var BooksVolumesGetRequest = /** @class */ (function (_super) {
    __extends(BooksVolumesGetRequest, _super);
    function BooksVolumesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BooksVolumesGetPathParams)
    ], BooksVolumesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BooksVolumesGetQueryParams)
    ], BooksVolumesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BooksVolumesGetSecurity)
    ], BooksVolumesGetRequest.prototype, "security", void 0);
    return BooksVolumesGetRequest;
}(SpeakeasyBase));
export { BooksVolumesGetRequest };
var BooksVolumesGetResponse = /** @class */ (function (_super) {
    __extends(BooksVolumesGetResponse, _super);
    function BooksVolumesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BooksVolumesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BooksVolumesGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Volume)
    ], BooksVolumesGetResponse.prototype, "volume", void 0);
    return BooksVolumesGetResponse;
}(SpeakeasyBase));
export { BooksVolumesGetResponse };
