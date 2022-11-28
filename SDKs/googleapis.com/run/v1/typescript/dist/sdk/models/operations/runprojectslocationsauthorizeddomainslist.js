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
var RunProjectsLocationsAuthorizeddomainsListPathParams = /** @class */ (function (_super) {
    __extends(RunProjectsLocationsAuthorizeddomainsListPathParams, _super);
    function RunProjectsLocationsAuthorizeddomainsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsAuthorizeddomainsListPathParams.prototype, "parent", void 0);
    return RunProjectsLocationsAuthorizeddomainsListPathParams;
}(SpeakeasyBase));
export { RunProjectsLocationsAuthorizeddomainsListPathParams };
var RunProjectsLocationsAuthorizeddomainsListQueryParams = /** @class */ (function (_super) {
    __extends(RunProjectsLocationsAuthorizeddomainsListQueryParams, _super);
    function RunProjectsLocationsAuthorizeddomainsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsAuthorizeddomainsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsAuthorizeddomainsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsAuthorizeddomainsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsAuthorizeddomainsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsAuthorizeddomainsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsAuthorizeddomainsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsAuthorizeddomainsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], RunProjectsLocationsAuthorizeddomainsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsAuthorizeddomainsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RunProjectsLocationsAuthorizeddomainsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsAuthorizeddomainsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsAuthorizeddomainsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsAuthorizeddomainsListQueryParams.prototype, "uploadProtocol", void 0);
    return RunProjectsLocationsAuthorizeddomainsListQueryParams;
}(SpeakeasyBase));
export { RunProjectsLocationsAuthorizeddomainsListQueryParams };
var RunProjectsLocationsAuthorizeddomainsListSecurity = /** @class */ (function (_super) {
    __extends(RunProjectsLocationsAuthorizeddomainsListSecurity, _super);
    function RunProjectsLocationsAuthorizeddomainsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RunProjectsLocationsAuthorizeddomainsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RunProjectsLocationsAuthorizeddomainsListSecurity.prototype, "oauth2c", void 0);
    return RunProjectsLocationsAuthorizeddomainsListSecurity;
}(SpeakeasyBase));
export { RunProjectsLocationsAuthorizeddomainsListSecurity };
var RunProjectsLocationsAuthorizeddomainsListRequest = /** @class */ (function (_super) {
    __extends(RunProjectsLocationsAuthorizeddomainsListRequest, _super);
    function RunProjectsLocationsAuthorizeddomainsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RunProjectsLocationsAuthorizeddomainsListPathParams)
    ], RunProjectsLocationsAuthorizeddomainsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RunProjectsLocationsAuthorizeddomainsListQueryParams)
    ], RunProjectsLocationsAuthorizeddomainsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RunProjectsLocationsAuthorizeddomainsListSecurity)
    ], RunProjectsLocationsAuthorizeddomainsListRequest.prototype, "security", void 0);
    return RunProjectsLocationsAuthorizeddomainsListRequest;
}(SpeakeasyBase));
export { RunProjectsLocationsAuthorizeddomainsListRequest };
var RunProjectsLocationsAuthorizeddomainsListResponse = /** @class */ (function (_super) {
    __extends(RunProjectsLocationsAuthorizeddomainsListResponse, _super);
    function RunProjectsLocationsAuthorizeddomainsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RunProjectsLocationsAuthorizeddomainsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListAuthorizedDomainsResponse)
    ], RunProjectsLocationsAuthorizeddomainsListResponse.prototype, "listAuthorizedDomainsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RunProjectsLocationsAuthorizeddomainsListResponse.prototype, "statusCode", void 0);
    return RunProjectsLocationsAuthorizeddomainsListResponse;
}(SpeakeasyBase));
export { RunProjectsLocationsAuthorizeddomainsListResponse };
