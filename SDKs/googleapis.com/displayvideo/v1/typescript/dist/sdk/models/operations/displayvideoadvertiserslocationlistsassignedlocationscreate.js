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
var DisplayvideoAdvertisersLocationListsAssignedLocationsCreatePathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersLocationListsAssignedLocationsCreatePathParams, _super);
    function DisplayvideoAdvertisersLocationListsAssignedLocationsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=advertiserId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsCreatePathParams.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=locationListId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsCreatePathParams.prototype, "locationListId", void 0);
    return DisplayvideoAdvertisersLocationListsAssignedLocationsCreatePathParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersLocationListsAssignedLocationsCreatePathParams };
var DisplayvideoAdvertisersLocationListsAssignedLocationsCreateQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersLocationListsAssignedLocationsCreateQueryParams, _super);
    function DisplayvideoAdvertisersLocationListsAssignedLocationsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoAdvertisersLocationListsAssignedLocationsCreateQueryParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersLocationListsAssignedLocationsCreateQueryParams };
var DisplayvideoAdvertisersLocationListsAssignedLocationsCreateSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersLocationListsAssignedLocationsCreateSecurity, _super);
    function DisplayvideoAdvertisersLocationListsAssignedLocationsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsCreateSecurity.prototype, "oauth2c", void 0);
    return DisplayvideoAdvertisersLocationListsAssignedLocationsCreateSecurity;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersLocationListsAssignedLocationsCreateSecurity };
var DisplayvideoAdvertisersLocationListsAssignedLocationsCreateRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersLocationListsAssignedLocationsCreateRequest, _super);
    function DisplayvideoAdvertisersLocationListsAssignedLocationsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersLocationListsAssignedLocationsCreatePathParams)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersLocationListsAssignedLocationsCreateQueryParams)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AssignedLocationInput)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersLocationListsAssignedLocationsCreateSecurity)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsCreateRequest.prototype, "security", void 0);
    return DisplayvideoAdvertisersLocationListsAssignedLocationsCreateRequest;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersLocationListsAssignedLocationsCreateRequest };
var DisplayvideoAdvertisersLocationListsAssignedLocationsCreateResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersLocationListsAssignedLocationsCreateResponse, _super);
    function DisplayvideoAdvertisersLocationListsAssignedLocationsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AssignedLocation)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsCreateResponse.prototype, "assignedLocation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoAdvertisersLocationListsAssignedLocationsCreateResponse.prototype, "statusCode", void 0);
    return DisplayvideoAdvertisersLocationListsAssignedLocationsCreateResponse;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersLocationListsAssignedLocationsCreateResponse };
