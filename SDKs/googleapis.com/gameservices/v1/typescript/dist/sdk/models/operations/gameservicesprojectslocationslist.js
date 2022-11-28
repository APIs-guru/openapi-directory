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
var GameservicesProjectsLocationsListPathParams = /** @class */ (function (_super) {
    __extends(GameservicesProjectsLocationsListPathParams, _super);
    function GameservicesProjectsLocationsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsListPathParams.prototype, "name", void 0);
    return GameservicesProjectsLocationsListPathParams;
}(SpeakeasyBase));
export { GameservicesProjectsLocationsListPathParams };
var GameservicesProjectsLocationsListQueryParams = /** @class */ (function (_super) {
    __extends(GameservicesProjectsLocationsListQueryParams, _super);
    function GameservicesProjectsLocationsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeUnrevealedLocations" }),
        __metadata("design:type", Boolean)
    ], GameservicesProjectsLocationsListQueryParams.prototype, "includeUnrevealedLocations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], GameservicesProjectsLocationsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GameservicesProjectsLocationsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsListQueryParams.prototype, "uploadProtocol", void 0);
    return GameservicesProjectsLocationsListQueryParams;
}(SpeakeasyBase));
export { GameservicesProjectsLocationsListQueryParams };
var GameservicesProjectsLocationsListSecurity = /** @class */ (function (_super) {
    __extends(GameservicesProjectsLocationsListSecurity, _super);
    function GameservicesProjectsLocationsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GameservicesProjectsLocationsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GameservicesProjectsLocationsListSecurity.prototype, "oauth2c", void 0);
    return GameservicesProjectsLocationsListSecurity;
}(SpeakeasyBase));
export { GameservicesProjectsLocationsListSecurity };
var GameservicesProjectsLocationsListRequest = /** @class */ (function (_super) {
    __extends(GameservicesProjectsLocationsListRequest, _super);
    function GameservicesProjectsLocationsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GameservicesProjectsLocationsListPathParams)
    ], GameservicesProjectsLocationsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GameservicesProjectsLocationsListQueryParams)
    ], GameservicesProjectsLocationsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GameservicesProjectsLocationsListSecurity)
    ], GameservicesProjectsLocationsListRequest.prototype, "security", void 0);
    return GameservicesProjectsLocationsListRequest;
}(SpeakeasyBase));
export { GameservicesProjectsLocationsListRequest };
var GameservicesProjectsLocationsListResponse = /** @class */ (function (_super) {
    __extends(GameservicesProjectsLocationsListResponse, _super);
    function GameservicesProjectsLocationsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListLocationsResponse)
    ], GameservicesProjectsLocationsListResponse.prototype, "listLocationsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GameservicesProjectsLocationsListResponse.prototype, "statusCode", void 0);
    return GameservicesProjectsLocationsListResponse;
}(SpeakeasyBase));
export { GameservicesProjectsLocationsListResponse };
