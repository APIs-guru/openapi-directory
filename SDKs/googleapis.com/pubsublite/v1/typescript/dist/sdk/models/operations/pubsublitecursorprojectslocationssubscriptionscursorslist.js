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
var PubsubliteCursorProjectsLocationsSubscriptionsCursorsListPathParams = /** @class */ (function (_super) {
    __extends(PubsubliteCursorProjectsLocationsSubscriptionsCursorsListPathParams, _super);
    function PubsubliteCursorProjectsLocationsSubscriptionsCursorsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], PubsubliteCursorProjectsLocationsSubscriptionsCursorsListPathParams.prototype, "parent", void 0);
    return PubsubliteCursorProjectsLocationsSubscriptionsCursorsListPathParams;
}(SpeakeasyBase));
export { PubsubliteCursorProjectsLocationsSubscriptionsCursorsListPathParams };
var PubsubliteCursorProjectsLocationsSubscriptionsCursorsListQueryParams = /** @class */ (function (_super) {
    __extends(PubsubliteCursorProjectsLocationsSubscriptionsCursorsListQueryParams, _super);
    function PubsubliteCursorProjectsLocationsSubscriptionsCursorsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PubsubliteCursorProjectsLocationsSubscriptionsCursorsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PubsubliteCursorProjectsLocationsSubscriptionsCursorsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PubsubliteCursorProjectsLocationsSubscriptionsCursorsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PubsubliteCursorProjectsLocationsSubscriptionsCursorsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PubsubliteCursorProjectsLocationsSubscriptionsCursorsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PubsubliteCursorProjectsLocationsSubscriptionsCursorsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PubsubliteCursorProjectsLocationsSubscriptionsCursorsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], PubsubliteCursorProjectsLocationsSubscriptionsCursorsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], PubsubliteCursorProjectsLocationsSubscriptionsCursorsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PubsubliteCursorProjectsLocationsSubscriptionsCursorsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PubsubliteCursorProjectsLocationsSubscriptionsCursorsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PubsubliteCursorProjectsLocationsSubscriptionsCursorsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PubsubliteCursorProjectsLocationsSubscriptionsCursorsListQueryParams.prototype, "uploadProtocol", void 0);
    return PubsubliteCursorProjectsLocationsSubscriptionsCursorsListQueryParams;
}(SpeakeasyBase));
export { PubsubliteCursorProjectsLocationsSubscriptionsCursorsListQueryParams };
var PubsubliteCursorProjectsLocationsSubscriptionsCursorsListSecurity = /** @class */ (function (_super) {
    __extends(PubsubliteCursorProjectsLocationsSubscriptionsCursorsListSecurity, _super);
    function PubsubliteCursorProjectsLocationsSubscriptionsCursorsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubliteCursorProjectsLocationsSubscriptionsCursorsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubliteCursorProjectsLocationsSubscriptionsCursorsListSecurity.prototype, "oauth2c", void 0);
    return PubsubliteCursorProjectsLocationsSubscriptionsCursorsListSecurity;
}(SpeakeasyBase));
export { PubsubliteCursorProjectsLocationsSubscriptionsCursorsListSecurity };
var PubsubliteCursorProjectsLocationsSubscriptionsCursorsListRequest = /** @class */ (function (_super) {
    __extends(PubsubliteCursorProjectsLocationsSubscriptionsCursorsListRequest, _super);
    function PubsubliteCursorProjectsLocationsSubscriptionsCursorsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubliteCursorProjectsLocationsSubscriptionsCursorsListPathParams)
    ], PubsubliteCursorProjectsLocationsSubscriptionsCursorsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubliteCursorProjectsLocationsSubscriptionsCursorsListQueryParams)
    ], PubsubliteCursorProjectsLocationsSubscriptionsCursorsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubliteCursorProjectsLocationsSubscriptionsCursorsListSecurity)
    ], PubsubliteCursorProjectsLocationsSubscriptionsCursorsListRequest.prototype, "security", void 0);
    return PubsubliteCursorProjectsLocationsSubscriptionsCursorsListRequest;
}(SpeakeasyBase));
export { PubsubliteCursorProjectsLocationsSubscriptionsCursorsListRequest };
var PubsubliteCursorProjectsLocationsSubscriptionsCursorsListResponse = /** @class */ (function (_super) {
    __extends(PubsubliteCursorProjectsLocationsSubscriptionsCursorsListResponse, _super);
    function PubsubliteCursorProjectsLocationsSubscriptionsCursorsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PubsubliteCursorProjectsLocationsSubscriptionsCursorsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListPartitionCursorsResponse)
    ], PubsubliteCursorProjectsLocationsSubscriptionsCursorsListResponse.prototype, "listPartitionCursorsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PubsubliteCursorProjectsLocationsSubscriptionsCursorsListResponse.prototype, "statusCode", void 0);
    return PubsubliteCursorProjectsLocationsSubscriptionsCursorsListResponse;
}(SpeakeasyBase));
export { PubsubliteCursorProjectsLocationsSubscriptionsCursorsListResponse };
