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
export var MybusinessbusinessinformationCategoriesBatchGetViewEnum;
(function (MybusinessbusinessinformationCategoriesBatchGetViewEnum) {
    MybusinessbusinessinformationCategoriesBatchGetViewEnum["CategoryViewUnspecified"] = "CATEGORY_VIEW_UNSPECIFIED";
    MybusinessbusinessinformationCategoriesBatchGetViewEnum["Basic"] = "BASIC";
    MybusinessbusinessinformationCategoriesBatchGetViewEnum["Full"] = "FULL";
})(MybusinessbusinessinformationCategoriesBatchGetViewEnum || (MybusinessbusinessinformationCategoriesBatchGetViewEnum = {}));
var MybusinessbusinessinformationCategoriesBatchGetQueryParams = /** @class */ (function (_super) {
    __extends(MybusinessbusinessinformationCategoriesBatchGetQueryParams, _super);
    function MybusinessbusinessinformationCategoriesBatchGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationCategoriesBatchGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationCategoriesBatchGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationCategoriesBatchGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationCategoriesBatchGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationCategoriesBatchGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationCategoriesBatchGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=languageCode" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationCategoriesBatchGetQueryParams.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=names" }),
        __metadata("design:type", Array)
    ], MybusinessbusinessinformationCategoriesBatchGetQueryParams.prototype, "names", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationCategoriesBatchGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MybusinessbusinessinformationCategoriesBatchGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationCategoriesBatchGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=regionCode" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationCategoriesBatchGetQueryParams.prototype, "regionCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationCategoriesBatchGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationCategoriesBatchGetQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationCategoriesBatchGetQueryParams.prototype, "view", void 0);
    return MybusinessbusinessinformationCategoriesBatchGetQueryParams;
}(SpeakeasyBase));
export { MybusinessbusinessinformationCategoriesBatchGetQueryParams };
var MybusinessbusinessinformationCategoriesBatchGetRequest = /** @class */ (function (_super) {
    __extends(MybusinessbusinessinformationCategoriesBatchGetRequest, _super);
    function MybusinessbusinessinformationCategoriesBatchGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MybusinessbusinessinformationCategoriesBatchGetQueryParams)
    ], MybusinessbusinessinformationCategoriesBatchGetRequest.prototype, "queryParams", void 0);
    return MybusinessbusinessinformationCategoriesBatchGetRequest;
}(SpeakeasyBase));
export { MybusinessbusinessinformationCategoriesBatchGetRequest };
var MybusinessbusinessinformationCategoriesBatchGetResponse = /** @class */ (function (_super) {
    __extends(MybusinessbusinessinformationCategoriesBatchGetResponse, _super);
    function MybusinessbusinessinformationCategoriesBatchGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BatchGetCategoriesResponse)
    ], MybusinessbusinessinformationCategoriesBatchGetResponse.prototype, "batchGetCategoriesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationCategoriesBatchGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MybusinessbusinessinformationCategoriesBatchGetResponse.prototype, "statusCode", void 0);
    return MybusinessbusinessinformationCategoriesBatchGetResponse;
}(SpeakeasyBase));
export { MybusinessbusinessinformationCategoriesBatchGetResponse };
