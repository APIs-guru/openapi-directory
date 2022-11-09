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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var MybusinessverificationsLocationsVerificationsListPathParams = /** @class */ (function (_super) {
    __extends(MybusinessverificationsLocationsVerificationsListPathParams, _super);
    function MybusinessverificationsLocationsVerificationsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], MybusinessverificationsLocationsVerificationsListPathParams.prototype, "parent", void 0);
    return MybusinessverificationsLocationsVerificationsListPathParams;
}(SpeakeasyBase));
export { MybusinessverificationsLocationsVerificationsListPathParams };
var MybusinessverificationsLocationsVerificationsListQueryParams = /** @class */ (function (_super) {
    __extends(MybusinessverificationsLocationsVerificationsListQueryParams, _super);
    function MybusinessverificationsLocationsVerificationsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MybusinessverificationsLocationsVerificationsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MybusinessverificationsLocationsVerificationsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MybusinessverificationsLocationsVerificationsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MybusinessverificationsLocationsVerificationsListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MybusinessverificationsLocationsVerificationsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MybusinessverificationsLocationsVerificationsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MybusinessverificationsLocationsVerificationsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], MybusinessverificationsLocationsVerificationsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], MybusinessverificationsLocationsVerificationsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MybusinessverificationsLocationsVerificationsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MybusinessverificationsLocationsVerificationsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MybusinessverificationsLocationsVerificationsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MybusinessverificationsLocationsVerificationsListQueryParams.prototype, "uploadProtocol", void 0);
    return MybusinessverificationsLocationsVerificationsListQueryParams;
}(SpeakeasyBase));
export { MybusinessverificationsLocationsVerificationsListQueryParams };
var MybusinessverificationsLocationsVerificationsListRequest = /** @class */ (function (_super) {
    __extends(MybusinessverificationsLocationsVerificationsListRequest, _super);
    function MybusinessverificationsLocationsVerificationsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", MybusinessverificationsLocationsVerificationsListPathParams)
    ], MybusinessverificationsLocationsVerificationsListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", MybusinessverificationsLocationsVerificationsListQueryParams)
    ], MybusinessverificationsLocationsVerificationsListRequest.prototype, "queryParams", void 0);
    return MybusinessverificationsLocationsVerificationsListRequest;
}(SpeakeasyBase));
export { MybusinessverificationsLocationsVerificationsListRequest };
var MybusinessverificationsLocationsVerificationsListResponse = /** @class */ (function (_super) {
    __extends(MybusinessverificationsLocationsVerificationsListResponse, _super);
    function MybusinessverificationsLocationsVerificationsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], MybusinessverificationsLocationsVerificationsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListVerificationsResponse)
    ], MybusinessverificationsLocationsVerificationsListResponse.prototype, "listVerificationsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], MybusinessverificationsLocationsVerificationsListResponse.prototype, "statusCode", void 0);
    return MybusinessverificationsLocationsVerificationsListResponse;
}(SpeakeasyBase));
export { MybusinessverificationsLocationsVerificationsListResponse };
