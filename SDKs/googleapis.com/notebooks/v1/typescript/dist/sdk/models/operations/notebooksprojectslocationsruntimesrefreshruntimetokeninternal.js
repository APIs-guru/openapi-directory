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
var NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalPathParams = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalPathParams, _super);
    function NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalPathParams.prototype, "name", void 0);
    return NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalPathParams;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalPathParams };
var NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalQueryParams = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalQueryParams, _super);
    function NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalQueryParams.prototype, "uploadProtocol", void 0);
    return NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalQueryParams;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalQueryParams };
var NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalSecurity = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalSecurity, _super);
    function NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalSecurity.prototype, "oauth2c", void 0);
    return NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalSecurity;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalSecurity };
var NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalRequest = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalRequest, _super);
    function NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalPathParams)
    ], NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalQueryParams)
    ], NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RefreshRuntimeTokenInternalRequest)
    ], NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalSecurity)
    ], NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalRequest.prototype, "security", void 0);
    return NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalRequest;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalRequest };
var NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalResponse = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalResponse, _super);
    function NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RefreshRuntimeTokenInternalResponse)
    ], NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalResponse.prototype, "refreshRuntimeTokenInternalResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalResponse.prototype, "statusCode", void 0);
    return NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalResponse;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalResponse };
