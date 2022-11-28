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
export var BooksVolumesMybooksListAcquireMethodEnum;
(function (BooksVolumesMybooksListAcquireMethodEnum) {
    BooksVolumesMybooksListAcquireMethodEnum["AcquireMethodUndefined"] = "ACQUIRE_METHOD_UNDEFINED";
    BooksVolumesMybooksListAcquireMethodEnum["FamilyShared"] = "FAMILY_SHARED";
    BooksVolumesMybooksListAcquireMethodEnum["Preordered"] = "PREORDERED";
    BooksVolumesMybooksListAcquireMethodEnum["PreviouslyRented"] = "PREVIOUSLY_RENTED";
    BooksVolumesMybooksListAcquireMethodEnum["PublicDomain"] = "PUBLIC_DOMAIN";
    BooksVolumesMybooksListAcquireMethodEnum["Purchased"] = "PURCHASED";
    BooksVolumesMybooksListAcquireMethodEnum["Rented"] = "RENTED";
    BooksVolumesMybooksListAcquireMethodEnum["Sample"] = "SAMPLE";
    BooksVolumesMybooksListAcquireMethodEnum["Uploaded"] = "UPLOADED";
})(BooksVolumesMybooksListAcquireMethodEnum || (BooksVolumesMybooksListAcquireMethodEnum = {}));
export var BooksVolumesMybooksListProcessingStateEnum;
(function (BooksVolumesMybooksListProcessingStateEnum) {
    BooksVolumesMybooksListProcessingStateEnum["ProcessingStateUndefined"] = "PROCESSING_STATE_UNDEFINED";
    BooksVolumesMybooksListProcessingStateEnum["CompletedFailed"] = "COMPLETED_FAILED";
    BooksVolumesMybooksListProcessingStateEnum["CompletedSuccess"] = "COMPLETED_SUCCESS";
    BooksVolumesMybooksListProcessingStateEnum["Running"] = "RUNNING";
})(BooksVolumesMybooksListProcessingStateEnum || (BooksVolumesMybooksListProcessingStateEnum = {}));
var BooksVolumesMybooksListQueryParams = /** @class */ (function (_super) {
    __extends(BooksVolumesMybooksListQueryParams, _super);
    function BooksVolumesMybooksListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BooksVolumesMybooksListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BooksVolumesMybooksListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=acquireMethod" }),
        __metadata("design:type", Array)
    ], BooksVolumesMybooksListQueryParams.prototype, "acquireMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BooksVolumesMybooksListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BooksVolumesMybooksListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" }),
        __metadata("design:type", String)
    ], BooksVolumesMybooksListQueryParams.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BooksVolumesMybooksListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BooksVolumesMybooksListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locale" }),
        __metadata("design:type", String)
    ], BooksVolumesMybooksListQueryParams.prototype, "locale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], BooksVolumesMybooksListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BooksVolumesMybooksListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BooksVolumesMybooksListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=processingState" }),
        __metadata("design:type", Array)
    ], BooksVolumesMybooksListQueryParams.prototype, "processingState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BooksVolumesMybooksListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=source" }),
        __metadata("design:type", String)
    ], BooksVolumesMybooksListQueryParams.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startIndex" }),
        __metadata("design:type", Number)
    ], BooksVolumesMybooksListQueryParams.prototype, "startIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BooksVolumesMybooksListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BooksVolumesMybooksListQueryParams.prototype, "uploadProtocol", void 0);
    return BooksVolumesMybooksListQueryParams;
}(SpeakeasyBase));
export { BooksVolumesMybooksListQueryParams };
var BooksVolumesMybooksListSecurity = /** @class */ (function (_super) {
    __extends(BooksVolumesMybooksListSecurity, _super);
    function BooksVolumesMybooksListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BooksVolumesMybooksListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BooksVolumesMybooksListSecurity.prototype, "oauth2c", void 0);
    return BooksVolumesMybooksListSecurity;
}(SpeakeasyBase));
export { BooksVolumesMybooksListSecurity };
var BooksVolumesMybooksListRequest = /** @class */ (function (_super) {
    __extends(BooksVolumesMybooksListRequest, _super);
    function BooksVolumesMybooksListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BooksVolumesMybooksListQueryParams)
    ], BooksVolumesMybooksListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BooksVolumesMybooksListSecurity)
    ], BooksVolumesMybooksListRequest.prototype, "security", void 0);
    return BooksVolumesMybooksListRequest;
}(SpeakeasyBase));
export { BooksVolumesMybooksListRequest };
var BooksVolumesMybooksListResponse = /** @class */ (function (_super) {
    __extends(BooksVolumesMybooksListResponse, _super);
    function BooksVolumesMybooksListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BooksVolumesMybooksListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BooksVolumesMybooksListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Volumes)
    ], BooksVolumesMybooksListResponse.prototype, "volumes", void 0);
    return BooksVolumesMybooksListResponse;
}(SpeakeasyBase));
export { BooksVolumesMybooksListResponse };
