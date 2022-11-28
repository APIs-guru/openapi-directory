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
var DataplexProjectsLocationsLakesTasksCreatePathParams = /** @class */ (function (_super) {
    __extends(DataplexProjectsLocationsLakesTasksCreatePathParams, _super);
    function DataplexProjectsLocationsLakesTasksCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesTasksCreatePathParams.prototype, "parent", void 0);
    return DataplexProjectsLocationsLakesTasksCreatePathParams;
}(SpeakeasyBase));
export { DataplexProjectsLocationsLakesTasksCreatePathParams };
var DataplexProjectsLocationsLakesTasksCreateQueryParams = /** @class */ (function (_super) {
    __extends(DataplexProjectsLocationsLakesTasksCreateQueryParams, _super);
    function DataplexProjectsLocationsLakesTasksCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesTasksCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesTasksCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesTasksCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesTasksCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesTasksCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesTasksCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesTasksCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataplexProjectsLocationsLakesTasksCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesTasksCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=taskId" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesTasksCreateQueryParams.prototype, "taskId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesTasksCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesTasksCreateQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=validateOnly" }),
        __metadata("design:type", Boolean)
    ], DataplexProjectsLocationsLakesTasksCreateQueryParams.prototype, "validateOnly", void 0);
    return DataplexProjectsLocationsLakesTasksCreateQueryParams;
}(SpeakeasyBase));
export { DataplexProjectsLocationsLakesTasksCreateQueryParams };
var DataplexProjectsLocationsLakesTasksCreateSecurity = /** @class */ (function (_super) {
    __extends(DataplexProjectsLocationsLakesTasksCreateSecurity, _super);
    function DataplexProjectsLocationsLakesTasksCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataplexProjectsLocationsLakesTasksCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataplexProjectsLocationsLakesTasksCreateSecurity.prototype, "oauth2c", void 0);
    return DataplexProjectsLocationsLakesTasksCreateSecurity;
}(SpeakeasyBase));
export { DataplexProjectsLocationsLakesTasksCreateSecurity };
var DataplexProjectsLocationsLakesTasksCreateRequest = /** @class */ (function (_super) {
    __extends(DataplexProjectsLocationsLakesTasksCreateRequest, _super);
    function DataplexProjectsLocationsLakesTasksCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataplexProjectsLocationsLakesTasksCreatePathParams)
    ], DataplexProjectsLocationsLakesTasksCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataplexProjectsLocationsLakesTasksCreateQueryParams)
    ], DataplexProjectsLocationsLakesTasksCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDataplexV1TaskInput)
    ], DataplexProjectsLocationsLakesTasksCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataplexProjectsLocationsLakesTasksCreateSecurity)
    ], DataplexProjectsLocationsLakesTasksCreateRequest.prototype, "security", void 0);
    return DataplexProjectsLocationsLakesTasksCreateRequest;
}(SpeakeasyBase));
export { DataplexProjectsLocationsLakesTasksCreateRequest };
var DataplexProjectsLocationsLakesTasksCreateResponse = /** @class */ (function (_super) {
    __extends(DataplexProjectsLocationsLakesTasksCreateResponse, _super);
    function DataplexProjectsLocationsLakesTasksCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesTasksCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], DataplexProjectsLocationsLakesTasksCreateResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataplexProjectsLocationsLakesTasksCreateResponse.prototype, "statusCode", void 0);
    return DataplexProjectsLocationsLakesTasksCreateResponse;
}(SpeakeasyBase));
export { DataplexProjectsLocationsLakesTasksCreateResponse };
