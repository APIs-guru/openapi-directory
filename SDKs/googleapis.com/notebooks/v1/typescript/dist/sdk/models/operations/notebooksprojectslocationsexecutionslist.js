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
var NotebooksProjectsLocationsExecutionsListPathParams = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsExecutionsListPathParams, _super);
    function NotebooksProjectsLocationsExecutionsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsExecutionsListPathParams.prototype, "parent", void 0);
    return NotebooksProjectsLocationsExecutionsListPathParams;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsExecutionsListPathParams };
var NotebooksProjectsLocationsExecutionsListQueryParams = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsExecutionsListQueryParams, _super);
    function NotebooksProjectsLocationsExecutionsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsExecutionsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsExecutionsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsExecutionsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsExecutionsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsExecutionsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsExecutionsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsExecutionsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsExecutionsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsExecutionsListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], NotebooksProjectsLocationsExecutionsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsExecutionsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], NotebooksProjectsLocationsExecutionsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsExecutionsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsExecutionsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsExecutionsListQueryParams.prototype, "uploadProtocol", void 0);
    return NotebooksProjectsLocationsExecutionsListQueryParams;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsExecutionsListQueryParams };
var NotebooksProjectsLocationsExecutionsListSecurity = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsExecutionsListSecurity, _super);
    function NotebooksProjectsLocationsExecutionsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], NotebooksProjectsLocationsExecutionsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], NotebooksProjectsLocationsExecutionsListSecurity.prototype, "oauth2c", void 0);
    return NotebooksProjectsLocationsExecutionsListSecurity;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsExecutionsListSecurity };
var NotebooksProjectsLocationsExecutionsListRequest = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsExecutionsListRequest, _super);
    function NotebooksProjectsLocationsExecutionsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NotebooksProjectsLocationsExecutionsListPathParams)
    ], NotebooksProjectsLocationsExecutionsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NotebooksProjectsLocationsExecutionsListQueryParams)
    ], NotebooksProjectsLocationsExecutionsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NotebooksProjectsLocationsExecutionsListSecurity)
    ], NotebooksProjectsLocationsExecutionsListRequest.prototype, "security", void 0);
    return NotebooksProjectsLocationsExecutionsListRequest;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsExecutionsListRequest };
var NotebooksProjectsLocationsExecutionsListResponse = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsExecutionsListResponse, _super);
    function NotebooksProjectsLocationsExecutionsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsExecutionsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListExecutionsResponse)
    ], NotebooksProjectsLocationsExecutionsListResponse.prototype, "listExecutionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], NotebooksProjectsLocationsExecutionsListResponse.prototype, "statusCode", void 0);
    return NotebooksProjectsLocationsExecutionsListResponse;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsExecutionsListResponse };
