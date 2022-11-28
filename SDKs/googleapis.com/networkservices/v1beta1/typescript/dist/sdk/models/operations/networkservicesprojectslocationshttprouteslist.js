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
var NetworkservicesProjectsLocationsHttpRoutesListPathParams = /** @class */ (function (_super) {
    __extends(NetworkservicesProjectsLocationsHttpRoutesListPathParams, _super);
    function NetworkservicesProjectsLocationsHttpRoutesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsHttpRoutesListPathParams.prototype, "parent", void 0);
    return NetworkservicesProjectsLocationsHttpRoutesListPathParams;
}(SpeakeasyBase));
export { NetworkservicesProjectsLocationsHttpRoutesListPathParams };
var NetworkservicesProjectsLocationsHttpRoutesListQueryParams = /** @class */ (function (_super) {
    __extends(NetworkservicesProjectsLocationsHttpRoutesListQueryParams, _super);
    function NetworkservicesProjectsLocationsHttpRoutesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsHttpRoutesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsHttpRoutesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsHttpRoutesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsHttpRoutesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsHttpRoutesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsHttpRoutesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsHttpRoutesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], NetworkservicesProjectsLocationsHttpRoutesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsHttpRoutesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], NetworkservicesProjectsLocationsHttpRoutesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsHttpRoutesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsHttpRoutesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsHttpRoutesListQueryParams.prototype, "uploadProtocol", void 0);
    return NetworkservicesProjectsLocationsHttpRoutesListQueryParams;
}(SpeakeasyBase));
export { NetworkservicesProjectsLocationsHttpRoutesListQueryParams };
var NetworkservicesProjectsLocationsHttpRoutesListSecurity = /** @class */ (function (_super) {
    __extends(NetworkservicesProjectsLocationsHttpRoutesListSecurity, _super);
    function NetworkservicesProjectsLocationsHttpRoutesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], NetworkservicesProjectsLocationsHttpRoutesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], NetworkservicesProjectsLocationsHttpRoutesListSecurity.prototype, "oauth2c", void 0);
    return NetworkservicesProjectsLocationsHttpRoutesListSecurity;
}(SpeakeasyBase));
export { NetworkservicesProjectsLocationsHttpRoutesListSecurity };
var NetworkservicesProjectsLocationsHttpRoutesListRequest = /** @class */ (function (_super) {
    __extends(NetworkservicesProjectsLocationsHttpRoutesListRequest, _super);
    function NetworkservicesProjectsLocationsHttpRoutesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NetworkservicesProjectsLocationsHttpRoutesListPathParams)
    ], NetworkservicesProjectsLocationsHttpRoutesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NetworkservicesProjectsLocationsHttpRoutesListQueryParams)
    ], NetworkservicesProjectsLocationsHttpRoutesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NetworkservicesProjectsLocationsHttpRoutesListSecurity)
    ], NetworkservicesProjectsLocationsHttpRoutesListRequest.prototype, "security", void 0);
    return NetworkservicesProjectsLocationsHttpRoutesListRequest;
}(SpeakeasyBase));
export { NetworkservicesProjectsLocationsHttpRoutesListRequest };
var NetworkservicesProjectsLocationsHttpRoutesListResponse = /** @class */ (function (_super) {
    __extends(NetworkservicesProjectsLocationsHttpRoutesListResponse, _super);
    function NetworkservicesProjectsLocationsHttpRoutesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsHttpRoutesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListHttpRoutesResponse)
    ], NetworkservicesProjectsLocationsHttpRoutesListResponse.prototype, "listHttpRoutesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], NetworkservicesProjectsLocationsHttpRoutesListResponse.prototype, "statusCode", void 0);
    return NetworkservicesProjectsLocationsHttpRoutesListResponse;
}(SpeakeasyBase));
export { NetworkservicesProjectsLocationsHttpRoutesListResponse };
