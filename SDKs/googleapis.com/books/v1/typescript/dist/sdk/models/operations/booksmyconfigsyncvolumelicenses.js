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
export var BooksMyconfigSyncVolumeLicensesFeaturesEnum;
(function (BooksMyconfigSyncVolumeLicensesFeaturesEnum) {
    BooksMyconfigSyncVolumeLicensesFeaturesEnum["FeaturesUndefined"] = "FEATURES_UNDEFINED";
    BooksMyconfigSyncVolumeLicensesFeaturesEnum["Rentals"] = "RENTALS";
})(BooksMyconfigSyncVolumeLicensesFeaturesEnum || (BooksMyconfigSyncVolumeLicensesFeaturesEnum = {}));
var BooksMyconfigSyncVolumeLicensesQueryParams = /** @class */ (function (_super) {
    __extends(BooksMyconfigSyncVolumeLicensesQueryParams, _super);
    function BooksMyconfigSyncVolumeLicensesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BooksMyconfigSyncVolumeLicensesQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BooksMyconfigSyncVolumeLicensesQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BooksMyconfigSyncVolumeLicensesQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BooksMyconfigSyncVolumeLicensesQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cpksver" }),
        __metadata("design:type", String)
    ], BooksMyconfigSyncVolumeLicensesQueryParams.prototype, "cpksver", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=features" }),
        __metadata("design:type", Array)
    ], BooksMyconfigSyncVolumeLicensesQueryParams.prototype, "features", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BooksMyconfigSyncVolumeLicensesQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeNonComicsSeries" }),
        __metadata("design:type", Boolean)
    ], BooksMyconfigSyncVolumeLicensesQueryParams.prototype, "includeNonComicsSeries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BooksMyconfigSyncVolumeLicensesQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locale" }),
        __metadata("design:type", String)
    ], BooksMyconfigSyncVolumeLicensesQueryParams.prototype, "locale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nonce" }),
        __metadata("design:type", String)
    ], BooksMyconfigSyncVolumeLicensesQueryParams.prototype, "nonce", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BooksMyconfigSyncVolumeLicensesQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BooksMyconfigSyncVolumeLicensesQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BooksMyconfigSyncVolumeLicensesQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=showPreorders" }),
        __metadata("design:type", Boolean)
    ], BooksMyconfigSyncVolumeLicensesQueryParams.prototype, "showPreorders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=source" }),
        __metadata("design:type", String)
    ], BooksMyconfigSyncVolumeLicensesQueryParams.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BooksMyconfigSyncVolumeLicensesQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BooksMyconfigSyncVolumeLicensesQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=volumeIds" }),
        __metadata("design:type", Array)
    ], BooksMyconfigSyncVolumeLicensesQueryParams.prototype, "volumeIds", void 0);
    return BooksMyconfigSyncVolumeLicensesQueryParams;
}(SpeakeasyBase));
export { BooksMyconfigSyncVolumeLicensesQueryParams };
var BooksMyconfigSyncVolumeLicensesSecurity = /** @class */ (function (_super) {
    __extends(BooksMyconfigSyncVolumeLicensesSecurity, _super);
    function BooksMyconfigSyncVolumeLicensesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BooksMyconfigSyncVolumeLicensesSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BooksMyconfigSyncVolumeLicensesSecurity.prototype, "oauth2c", void 0);
    return BooksMyconfigSyncVolumeLicensesSecurity;
}(SpeakeasyBase));
export { BooksMyconfigSyncVolumeLicensesSecurity };
var BooksMyconfigSyncVolumeLicensesRequest = /** @class */ (function (_super) {
    __extends(BooksMyconfigSyncVolumeLicensesRequest, _super);
    function BooksMyconfigSyncVolumeLicensesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BooksMyconfigSyncVolumeLicensesQueryParams)
    ], BooksMyconfigSyncVolumeLicensesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BooksMyconfigSyncVolumeLicensesSecurity)
    ], BooksMyconfigSyncVolumeLicensesRequest.prototype, "security", void 0);
    return BooksMyconfigSyncVolumeLicensesRequest;
}(SpeakeasyBase));
export { BooksMyconfigSyncVolumeLicensesRequest };
var BooksMyconfigSyncVolumeLicensesResponse = /** @class */ (function (_super) {
    __extends(BooksMyconfigSyncVolumeLicensesResponse, _super);
    function BooksMyconfigSyncVolumeLicensesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BooksMyconfigSyncVolumeLicensesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BooksMyconfigSyncVolumeLicensesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Volumes)
    ], BooksMyconfigSyncVolumeLicensesResponse.prototype, "volumes", void 0);
    return BooksMyconfigSyncVolumeLicensesResponse;
}(SpeakeasyBase));
export { BooksMyconfigSyncVolumeLicensesResponse };
