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
var DfareportingPlacementStrategiesListPathParams = /** @class */ (function (_super) {
    __extends(DfareportingPlacementStrategiesListPathParams, _super);
    function DfareportingPlacementStrategiesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], DfareportingPlacementStrategiesListPathParams.prototype, "profileId", void 0);
    return DfareportingPlacementStrategiesListPathParams;
}(SpeakeasyBase));
export { DfareportingPlacementStrategiesListPathParams };
export var DfareportingPlacementStrategiesListSortFieldEnum;
(function (DfareportingPlacementStrategiesListSortFieldEnum) {
    DfareportingPlacementStrategiesListSortFieldEnum["Id"] = "ID";
    DfareportingPlacementStrategiesListSortFieldEnum["Name"] = "NAME";
})(DfareportingPlacementStrategiesListSortFieldEnum || (DfareportingPlacementStrategiesListSortFieldEnum = {}));
export var DfareportingPlacementStrategiesListSortOrderEnum;
(function (DfareportingPlacementStrategiesListSortOrderEnum) {
    DfareportingPlacementStrategiesListSortOrderEnum["Ascending"] = "ASCENDING";
    DfareportingPlacementStrategiesListSortOrderEnum["Descending"] = "DESCENDING";
})(DfareportingPlacementStrategiesListSortOrderEnum || (DfareportingPlacementStrategiesListSortOrderEnum = {}));
var DfareportingPlacementStrategiesListQueryParams = /** @class */ (function (_super) {
    __extends(DfareportingPlacementStrategiesListQueryParams, _super);
    function DfareportingPlacementStrategiesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DfareportingPlacementStrategiesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DfareportingPlacementStrategiesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DfareportingPlacementStrategiesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DfareportingPlacementStrategiesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DfareportingPlacementStrategiesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", Array)
    ], DfareportingPlacementStrategiesListQueryParams.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DfareportingPlacementStrategiesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DfareportingPlacementStrategiesListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DfareportingPlacementStrategiesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DfareportingPlacementStrategiesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DfareportingPlacementStrategiesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DfareportingPlacementStrategiesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchString" }),
        __metadata("design:type", String)
    ], DfareportingPlacementStrategiesListQueryParams.prototype, "searchString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortField" }),
        __metadata("design:type", String)
    ], DfareportingPlacementStrategiesListQueryParams.prototype, "sortField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" }),
        __metadata("design:type", String)
    ], DfareportingPlacementStrategiesListQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DfareportingPlacementStrategiesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DfareportingPlacementStrategiesListQueryParams.prototype, "uploadProtocol", void 0);
    return DfareportingPlacementStrategiesListQueryParams;
}(SpeakeasyBase));
export { DfareportingPlacementStrategiesListQueryParams };
var DfareportingPlacementStrategiesListSecurity = /** @class */ (function (_super) {
    __extends(DfareportingPlacementStrategiesListSecurity, _super);
    function DfareportingPlacementStrategiesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingPlacementStrategiesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingPlacementStrategiesListSecurity.prototype, "oauth2c", void 0);
    return DfareportingPlacementStrategiesListSecurity;
}(SpeakeasyBase));
export { DfareportingPlacementStrategiesListSecurity };
var DfareportingPlacementStrategiesListRequest = /** @class */ (function (_super) {
    __extends(DfareportingPlacementStrategiesListRequest, _super);
    function DfareportingPlacementStrategiesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingPlacementStrategiesListPathParams)
    ], DfareportingPlacementStrategiesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingPlacementStrategiesListQueryParams)
    ], DfareportingPlacementStrategiesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingPlacementStrategiesListSecurity)
    ], DfareportingPlacementStrategiesListRequest.prototype, "security", void 0);
    return DfareportingPlacementStrategiesListRequest;
}(SpeakeasyBase));
export { DfareportingPlacementStrategiesListRequest };
var DfareportingPlacementStrategiesListResponse = /** @class */ (function (_super) {
    __extends(DfareportingPlacementStrategiesListResponse, _super);
    function DfareportingPlacementStrategiesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DfareportingPlacementStrategiesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PlacementStrategiesListResponse)
    ], DfareportingPlacementStrategiesListResponse.prototype, "placementStrategiesListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DfareportingPlacementStrategiesListResponse.prototype, "statusCode", void 0);
    return DfareportingPlacementStrategiesListResponse;
}(SpeakeasyBase));
export { DfareportingPlacementStrategiesListResponse };
