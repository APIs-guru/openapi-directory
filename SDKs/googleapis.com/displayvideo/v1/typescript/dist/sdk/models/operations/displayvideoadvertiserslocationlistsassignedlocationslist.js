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
var DisplayvideoAdvertisersLocationListsAssignedLocationsListPathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersLocationListsAssignedLocationsListPathParams, _super);
    function DisplayvideoAdvertisersLocationListsAssignedLocationsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=advertiserId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsListPathParams.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=locationListId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsListPathParams.prototype, "locationListId", void 0);
    return DisplayvideoAdvertisersLocationListsAssignedLocationsListPathParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersLocationListsAssignedLocationsListPathParams };
var DisplayvideoAdvertisersLocationListsAssignedLocationsListQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersLocationListsAssignedLocationsListQueryParams, _super);
    function DisplayvideoAdvertisersLocationListsAssignedLocationsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsListQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoAdvertisersLocationListsAssignedLocationsListQueryParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersLocationListsAssignedLocationsListQueryParams };
var DisplayvideoAdvertisersLocationListsAssignedLocationsListSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersLocationListsAssignedLocationsListSecurity, _super);
    function DisplayvideoAdvertisersLocationListsAssignedLocationsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsListSecurity.prototype, "oauth2c", void 0);
    return DisplayvideoAdvertisersLocationListsAssignedLocationsListSecurity;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersLocationListsAssignedLocationsListSecurity };
var DisplayvideoAdvertisersLocationListsAssignedLocationsListRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersLocationListsAssignedLocationsListRequest, _super);
    function DisplayvideoAdvertisersLocationListsAssignedLocationsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersLocationListsAssignedLocationsListPathParams)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersLocationListsAssignedLocationsListQueryParams)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersLocationListsAssignedLocationsListSecurity)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsListRequest.prototype, "security", void 0);
    return DisplayvideoAdvertisersLocationListsAssignedLocationsListRequest;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersLocationListsAssignedLocationsListRequest };
var DisplayvideoAdvertisersLocationListsAssignedLocationsListResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersLocationListsAssignedLocationsListResponse, _super);
    function DisplayvideoAdvertisersLocationListsAssignedLocationsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListAssignedLocationsResponse)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsListResponse.prototype, "listAssignedLocationsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsListResponse.prototype, "statusCode", void 0);
    return DisplayvideoAdvertisersLocationListsAssignedLocationsListResponse;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersLocationListsAssignedLocationsListResponse };
