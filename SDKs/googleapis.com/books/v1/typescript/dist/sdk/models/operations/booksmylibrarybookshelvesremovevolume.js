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
var BooksMylibraryBookshelvesRemoveVolumePathParams = /** @class */ (function (_super) {
    __extends(BooksMylibraryBookshelvesRemoveVolumePathParams, _super);
    function BooksMylibraryBookshelvesRemoveVolumePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=shelf" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesRemoveVolumePathParams.prototype, "shelf", void 0);
    return BooksMylibraryBookshelvesRemoveVolumePathParams;
}(SpeakeasyBase));
export { BooksMylibraryBookshelvesRemoveVolumePathParams };
export var BooksMylibraryBookshelvesRemoveVolumeReasonEnum;
(function (BooksMylibraryBookshelvesRemoveVolumeReasonEnum) {
    BooksMylibraryBookshelvesRemoveVolumeReasonEnum["ReasonUndefined"] = "REASON_UNDEFINED";
    BooksMylibraryBookshelvesRemoveVolumeReasonEnum["Onboarding"] = "ONBOARDING";
})(BooksMylibraryBookshelvesRemoveVolumeReasonEnum || (BooksMylibraryBookshelvesRemoveVolumeReasonEnum = {}));
var BooksMylibraryBookshelvesRemoveVolumeQueryParams = /** @class */ (function (_super) {
    __extends(BooksMylibraryBookshelvesRemoveVolumeQueryParams, _super);
    function BooksMylibraryBookshelvesRemoveVolumeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesRemoveVolumeQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesRemoveVolumeQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesRemoveVolumeQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesRemoveVolumeQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesRemoveVolumeQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesRemoveVolumeQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesRemoveVolumeQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BooksMylibraryBookshelvesRemoveVolumeQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesRemoveVolumeQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reason" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesRemoveVolumeQueryParams.prototype, "reason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=source" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesRemoveVolumeQueryParams.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesRemoveVolumeQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesRemoveVolumeQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=volumeId" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesRemoveVolumeQueryParams.prototype, "volumeId", void 0);
    return BooksMylibraryBookshelvesRemoveVolumeQueryParams;
}(SpeakeasyBase));
export { BooksMylibraryBookshelvesRemoveVolumeQueryParams };
var BooksMylibraryBookshelvesRemoveVolumeSecurity = /** @class */ (function (_super) {
    __extends(BooksMylibraryBookshelvesRemoveVolumeSecurity, _super);
    function BooksMylibraryBookshelvesRemoveVolumeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BooksMylibraryBookshelvesRemoveVolumeSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BooksMylibraryBookshelvesRemoveVolumeSecurity.prototype, "oauth2c", void 0);
    return BooksMylibraryBookshelvesRemoveVolumeSecurity;
}(SpeakeasyBase));
export { BooksMylibraryBookshelvesRemoveVolumeSecurity };
var BooksMylibraryBookshelvesRemoveVolumeRequest = /** @class */ (function (_super) {
    __extends(BooksMylibraryBookshelvesRemoveVolumeRequest, _super);
    function BooksMylibraryBookshelvesRemoveVolumeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BooksMylibraryBookshelvesRemoveVolumePathParams)
    ], BooksMylibraryBookshelvesRemoveVolumeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BooksMylibraryBookshelvesRemoveVolumeQueryParams)
    ], BooksMylibraryBookshelvesRemoveVolumeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BooksMylibraryBookshelvesRemoveVolumeSecurity)
    ], BooksMylibraryBookshelvesRemoveVolumeRequest.prototype, "security", void 0);
    return BooksMylibraryBookshelvesRemoveVolumeRequest;
}(SpeakeasyBase));
export { BooksMylibraryBookshelvesRemoveVolumeRequest };
var BooksMylibraryBookshelvesRemoveVolumeResponse = /** @class */ (function (_super) {
    __extends(BooksMylibraryBookshelvesRemoveVolumeResponse, _super);
    function BooksMylibraryBookshelvesRemoveVolumeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesRemoveVolumeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], BooksMylibraryBookshelvesRemoveVolumeResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BooksMylibraryBookshelvesRemoveVolumeResponse.prototype, "statusCode", void 0);
    return BooksMylibraryBookshelvesRemoveVolumeResponse;
}(SpeakeasyBase));
export { BooksMylibraryBookshelvesRemoveVolumeResponse };
