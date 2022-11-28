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
var NotebooksProjectsLocationsExecutionsCreatePathParams = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsExecutionsCreatePathParams, _super);
    function NotebooksProjectsLocationsExecutionsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsExecutionsCreatePathParams.prototype, "parent", void 0);
    return NotebooksProjectsLocationsExecutionsCreatePathParams;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsExecutionsCreatePathParams };
var NotebooksProjectsLocationsExecutionsCreateQueryParams = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsExecutionsCreateQueryParams, _super);
    function NotebooksProjectsLocationsExecutionsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsExecutionsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsExecutionsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsExecutionsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsExecutionsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=executionId" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsExecutionsCreateQueryParams.prototype, "executionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsExecutionsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsExecutionsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsExecutionsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], NotebooksProjectsLocationsExecutionsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsExecutionsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsExecutionsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsExecutionsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return NotebooksProjectsLocationsExecutionsCreateQueryParams;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsExecutionsCreateQueryParams };
var NotebooksProjectsLocationsExecutionsCreateSecurity = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsExecutionsCreateSecurity, _super);
    function NotebooksProjectsLocationsExecutionsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], NotebooksProjectsLocationsExecutionsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], NotebooksProjectsLocationsExecutionsCreateSecurity.prototype, "oauth2c", void 0);
    return NotebooksProjectsLocationsExecutionsCreateSecurity;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsExecutionsCreateSecurity };
var NotebooksProjectsLocationsExecutionsCreateRequest = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsExecutionsCreateRequest, _super);
    function NotebooksProjectsLocationsExecutionsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NotebooksProjectsLocationsExecutionsCreatePathParams)
    ], NotebooksProjectsLocationsExecutionsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NotebooksProjectsLocationsExecutionsCreateQueryParams)
    ], NotebooksProjectsLocationsExecutionsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ExecutionInput)
    ], NotebooksProjectsLocationsExecutionsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NotebooksProjectsLocationsExecutionsCreateSecurity)
    ], NotebooksProjectsLocationsExecutionsCreateRequest.prototype, "security", void 0);
    return NotebooksProjectsLocationsExecutionsCreateRequest;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsExecutionsCreateRequest };
var NotebooksProjectsLocationsExecutionsCreateResponse = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsExecutionsCreateResponse, _super);
    function NotebooksProjectsLocationsExecutionsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsExecutionsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], NotebooksProjectsLocationsExecutionsCreateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], NotebooksProjectsLocationsExecutionsCreateResponse.prototype, "statusCode", void 0);
    return NotebooksProjectsLocationsExecutionsCreateResponse;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsExecutionsCreateResponse };
