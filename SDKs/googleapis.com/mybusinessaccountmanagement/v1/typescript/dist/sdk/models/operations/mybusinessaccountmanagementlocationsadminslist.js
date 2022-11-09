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
var MybusinessaccountmanagementLocationsAdminsListPathParams = /** @class */ (function (_super) {
    __extends(MybusinessaccountmanagementLocationsAdminsListPathParams, _super);
    function MybusinessaccountmanagementLocationsAdminsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementLocationsAdminsListPathParams.prototype, "parent", void 0);
    return MybusinessaccountmanagementLocationsAdminsListPathParams;
}(SpeakeasyBase));
export { MybusinessaccountmanagementLocationsAdminsListPathParams };
var MybusinessaccountmanagementLocationsAdminsListQueryParams = /** @class */ (function (_super) {
    __extends(MybusinessaccountmanagementLocationsAdminsListQueryParams, _super);
    function MybusinessaccountmanagementLocationsAdminsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementLocationsAdminsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementLocationsAdminsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementLocationsAdminsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementLocationsAdminsListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementLocationsAdminsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementLocationsAdminsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementLocationsAdminsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MybusinessaccountmanagementLocationsAdminsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementLocationsAdminsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementLocationsAdminsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementLocationsAdminsListQueryParams.prototype, "uploadProtocol", void 0);
    return MybusinessaccountmanagementLocationsAdminsListQueryParams;
}(SpeakeasyBase));
export { MybusinessaccountmanagementLocationsAdminsListQueryParams };
var MybusinessaccountmanagementLocationsAdminsListRequest = /** @class */ (function (_super) {
    __extends(MybusinessaccountmanagementLocationsAdminsListRequest, _super);
    function MybusinessaccountmanagementLocationsAdminsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", MybusinessaccountmanagementLocationsAdminsListPathParams)
    ], MybusinessaccountmanagementLocationsAdminsListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", MybusinessaccountmanagementLocationsAdminsListQueryParams)
    ], MybusinessaccountmanagementLocationsAdminsListRequest.prototype, "queryParams", void 0);
    return MybusinessaccountmanagementLocationsAdminsListRequest;
}(SpeakeasyBase));
export { MybusinessaccountmanagementLocationsAdminsListRequest };
var MybusinessaccountmanagementLocationsAdminsListResponse = /** @class */ (function (_super) {
    __extends(MybusinessaccountmanagementLocationsAdminsListResponse, _super);
    function MybusinessaccountmanagementLocationsAdminsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementLocationsAdminsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListLocationAdminsResponse)
    ], MybusinessaccountmanagementLocationsAdminsListResponse.prototype, "listLocationAdminsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], MybusinessaccountmanagementLocationsAdminsListResponse.prototype, "statusCode", void 0);
    return MybusinessaccountmanagementLocationsAdminsListResponse;
}(SpeakeasyBase));
export { MybusinessaccountmanagementLocationsAdminsListResponse };
