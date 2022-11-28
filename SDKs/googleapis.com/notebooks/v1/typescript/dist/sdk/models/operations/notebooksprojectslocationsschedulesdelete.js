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
var NotebooksProjectsLocationsSchedulesDeletePathParams = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsSchedulesDeletePathParams, _super);
    function NotebooksProjectsLocationsSchedulesDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsSchedulesDeletePathParams.prototype, "name", void 0);
    return NotebooksProjectsLocationsSchedulesDeletePathParams;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsSchedulesDeletePathParams };
var NotebooksProjectsLocationsSchedulesDeleteQueryParams = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsSchedulesDeleteQueryParams, _super);
    function NotebooksProjectsLocationsSchedulesDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsSchedulesDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsSchedulesDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsSchedulesDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsSchedulesDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsSchedulesDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsSchedulesDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsSchedulesDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], NotebooksProjectsLocationsSchedulesDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsSchedulesDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requestId" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsSchedulesDeleteQueryParams.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsSchedulesDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsSchedulesDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return NotebooksProjectsLocationsSchedulesDeleteQueryParams;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsSchedulesDeleteQueryParams };
var NotebooksProjectsLocationsSchedulesDeleteSecurity = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsSchedulesDeleteSecurity, _super);
    function NotebooksProjectsLocationsSchedulesDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], NotebooksProjectsLocationsSchedulesDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], NotebooksProjectsLocationsSchedulesDeleteSecurity.prototype, "oauth2c", void 0);
    return NotebooksProjectsLocationsSchedulesDeleteSecurity;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsSchedulesDeleteSecurity };
var NotebooksProjectsLocationsSchedulesDeleteRequest = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsSchedulesDeleteRequest, _super);
    function NotebooksProjectsLocationsSchedulesDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NotebooksProjectsLocationsSchedulesDeletePathParams)
    ], NotebooksProjectsLocationsSchedulesDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NotebooksProjectsLocationsSchedulesDeleteQueryParams)
    ], NotebooksProjectsLocationsSchedulesDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NotebooksProjectsLocationsSchedulesDeleteSecurity)
    ], NotebooksProjectsLocationsSchedulesDeleteRequest.prototype, "security", void 0);
    return NotebooksProjectsLocationsSchedulesDeleteRequest;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsSchedulesDeleteRequest };
var NotebooksProjectsLocationsSchedulesDeleteResponse = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsSchedulesDeleteResponse, _super);
    function NotebooksProjectsLocationsSchedulesDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsSchedulesDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], NotebooksProjectsLocationsSchedulesDeleteResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], NotebooksProjectsLocationsSchedulesDeleteResponse.prototype, "statusCode", void 0);
    return NotebooksProjectsLocationsSchedulesDeleteResponse;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsSchedulesDeleteResponse };
