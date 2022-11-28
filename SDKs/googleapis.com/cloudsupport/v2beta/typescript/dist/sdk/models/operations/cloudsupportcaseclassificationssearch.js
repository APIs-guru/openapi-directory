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
var CloudsupportCaseClassificationsSearchQueryParams = /** @class */ (function (_super) {
    __extends(CloudsupportCaseClassificationsSearchQueryParams, _super);
    function CloudsupportCaseClassificationsSearchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudsupportCaseClassificationsSearchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudsupportCaseClassificationsSearchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudsupportCaseClassificationsSearchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudsupportCaseClassificationsSearchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudsupportCaseClassificationsSearchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudsupportCaseClassificationsSearchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudsupportCaseClassificationsSearchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], CloudsupportCaseClassificationsSearchQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CloudsupportCaseClassificationsSearchQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudsupportCaseClassificationsSearchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], CloudsupportCaseClassificationsSearchQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudsupportCaseClassificationsSearchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudsupportCaseClassificationsSearchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudsupportCaseClassificationsSearchQueryParams.prototype, "uploadProtocol", void 0);
    return CloudsupportCaseClassificationsSearchQueryParams;
}(SpeakeasyBase));
export { CloudsupportCaseClassificationsSearchQueryParams };
var CloudsupportCaseClassificationsSearchSecurity = /** @class */ (function (_super) {
    __extends(CloudsupportCaseClassificationsSearchSecurity, _super);
    function CloudsupportCaseClassificationsSearchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsupportCaseClassificationsSearchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsupportCaseClassificationsSearchSecurity.prototype, "oauth2c", void 0);
    return CloudsupportCaseClassificationsSearchSecurity;
}(SpeakeasyBase));
export { CloudsupportCaseClassificationsSearchSecurity };
var CloudsupportCaseClassificationsSearchRequest = /** @class */ (function (_super) {
    __extends(CloudsupportCaseClassificationsSearchRequest, _super);
    function CloudsupportCaseClassificationsSearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsupportCaseClassificationsSearchQueryParams)
    ], CloudsupportCaseClassificationsSearchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsupportCaseClassificationsSearchSecurity)
    ], CloudsupportCaseClassificationsSearchRequest.prototype, "security", void 0);
    return CloudsupportCaseClassificationsSearchRequest;
}(SpeakeasyBase));
export { CloudsupportCaseClassificationsSearchRequest };
var CloudsupportCaseClassificationsSearchResponse = /** @class */ (function (_super) {
    __extends(CloudsupportCaseClassificationsSearchResponse, _super);
    function CloudsupportCaseClassificationsSearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudsupportCaseClassificationsSearchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SearchCaseClassificationsResponse)
    ], CloudsupportCaseClassificationsSearchResponse.prototype, "searchCaseClassificationsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudsupportCaseClassificationsSearchResponse.prototype, "statusCode", void 0);
    return CloudsupportCaseClassificationsSearchResponse;
}(SpeakeasyBase));
export { CloudsupportCaseClassificationsSearchResponse };
