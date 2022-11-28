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
var DisplayvideoAdvertisersLocationListsAssignedLocationsDeletePathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersLocationListsAssignedLocationsDeletePathParams, _super);
    function DisplayvideoAdvertisersLocationListsAssignedLocationsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=advertiserId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsDeletePathParams.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=assignedLocationId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsDeletePathParams.prototype, "assignedLocationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=locationListId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsDeletePathParams.prototype, "locationListId", void 0);
    return DisplayvideoAdvertisersLocationListsAssignedLocationsDeletePathParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersLocationListsAssignedLocationsDeletePathParams };
var DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteQueryParams, _super);
    function DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteQueryParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteQueryParams };
var DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteSecurity, _super);
    function DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteSecurity.prototype, "oauth2c", void 0);
    return DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteSecurity;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteSecurity };
var DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteRequest, _super);
    function DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersLocationListsAssignedLocationsDeletePathParams)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteQueryParams)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteSecurity)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteRequest.prototype, "security", void 0);
    return DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteRequest;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteRequest };
var DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteResponse, _super);
    function DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteResponse.prototype, "statusCode", void 0);
    return DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteResponse;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteResponse };
