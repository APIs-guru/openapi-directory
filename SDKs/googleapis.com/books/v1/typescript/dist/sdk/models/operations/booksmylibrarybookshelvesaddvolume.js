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
var BooksMylibraryBookshelvesAddVolumePathParams = /** @class */ (function (_super) {
    __extends(BooksMylibraryBookshelvesAddVolumePathParams, _super);
    function BooksMylibraryBookshelvesAddVolumePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=shelf" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesAddVolumePathParams.prototype, "shelf", void 0);
    return BooksMylibraryBookshelvesAddVolumePathParams;
}(SpeakeasyBase));
export { BooksMylibraryBookshelvesAddVolumePathParams };
export var BooksMylibraryBookshelvesAddVolumeReasonEnum;
(function (BooksMylibraryBookshelvesAddVolumeReasonEnum) {
    BooksMylibraryBookshelvesAddVolumeReasonEnum["ReasonUndefined"] = "REASON_UNDEFINED";
    BooksMylibraryBookshelvesAddVolumeReasonEnum["IosPrex"] = "IOS_PREX";
    BooksMylibraryBookshelvesAddVolumeReasonEnum["IosSearch"] = "IOS_SEARCH";
    BooksMylibraryBookshelvesAddVolumeReasonEnum["Onboarding"] = "ONBOARDING";
})(BooksMylibraryBookshelvesAddVolumeReasonEnum || (BooksMylibraryBookshelvesAddVolumeReasonEnum = {}));
var BooksMylibraryBookshelvesAddVolumeQueryParams = /** @class */ (function (_super) {
    __extends(BooksMylibraryBookshelvesAddVolumeQueryParams, _super);
    function BooksMylibraryBookshelvesAddVolumeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesAddVolumeQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesAddVolumeQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesAddVolumeQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesAddVolumeQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesAddVolumeQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesAddVolumeQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesAddVolumeQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BooksMylibraryBookshelvesAddVolumeQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesAddVolumeQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reason" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesAddVolumeQueryParams.prototype, "reason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=source" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesAddVolumeQueryParams.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesAddVolumeQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesAddVolumeQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=volumeId" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesAddVolumeQueryParams.prototype, "volumeId", void 0);
    return BooksMylibraryBookshelvesAddVolumeQueryParams;
}(SpeakeasyBase));
export { BooksMylibraryBookshelvesAddVolumeQueryParams };
var BooksMylibraryBookshelvesAddVolumeSecurity = /** @class */ (function (_super) {
    __extends(BooksMylibraryBookshelvesAddVolumeSecurity, _super);
    function BooksMylibraryBookshelvesAddVolumeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BooksMylibraryBookshelvesAddVolumeSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BooksMylibraryBookshelvesAddVolumeSecurity.prototype, "oauth2c", void 0);
    return BooksMylibraryBookshelvesAddVolumeSecurity;
}(SpeakeasyBase));
export { BooksMylibraryBookshelvesAddVolumeSecurity };
var BooksMylibraryBookshelvesAddVolumeRequest = /** @class */ (function (_super) {
    __extends(BooksMylibraryBookshelvesAddVolumeRequest, _super);
    function BooksMylibraryBookshelvesAddVolumeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BooksMylibraryBookshelvesAddVolumePathParams)
    ], BooksMylibraryBookshelvesAddVolumeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BooksMylibraryBookshelvesAddVolumeQueryParams)
    ], BooksMylibraryBookshelvesAddVolumeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BooksMylibraryBookshelvesAddVolumeSecurity)
    ], BooksMylibraryBookshelvesAddVolumeRequest.prototype, "security", void 0);
    return BooksMylibraryBookshelvesAddVolumeRequest;
}(SpeakeasyBase));
export { BooksMylibraryBookshelvesAddVolumeRequest };
var BooksMylibraryBookshelvesAddVolumeResponse = /** @class */ (function (_super) {
    __extends(BooksMylibraryBookshelvesAddVolumeResponse, _super);
    function BooksMylibraryBookshelvesAddVolumeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesAddVolumeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], BooksMylibraryBookshelvesAddVolumeResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BooksMylibraryBookshelvesAddVolumeResponse.prototype, "statusCode", void 0);
    return BooksMylibraryBookshelvesAddVolumeResponse;
}(SpeakeasyBase));
export { BooksMylibraryBookshelvesAddVolumeResponse };
