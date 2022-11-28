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
var TranscoderProjectsLocationsJobsListPathParams = /** @class */ (function (_super) {
    __extends(TranscoderProjectsLocationsJobsListPathParams, _super);
    function TranscoderProjectsLocationsJobsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], TranscoderProjectsLocationsJobsListPathParams.prototype, "parent", void 0);
    return TranscoderProjectsLocationsJobsListPathParams;
}(SpeakeasyBase));
export { TranscoderProjectsLocationsJobsListPathParams };
var TranscoderProjectsLocationsJobsListQueryParams = /** @class */ (function (_super) {
    __extends(TranscoderProjectsLocationsJobsListQueryParams, _super);
    function TranscoderProjectsLocationsJobsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TranscoderProjectsLocationsJobsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TranscoderProjectsLocationsJobsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TranscoderProjectsLocationsJobsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TranscoderProjectsLocationsJobsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TranscoderProjectsLocationsJobsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TranscoderProjectsLocationsJobsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TranscoderProjectsLocationsJobsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], TranscoderProjectsLocationsJobsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], TranscoderProjectsLocationsJobsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TranscoderProjectsLocationsJobsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TranscoderProjectsLocationsJobsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TranscoderProjectsLocationsJobsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TranscoderProjectsLocationsJobsListQueryParams.prototype, "uploadProtocol", void 0);
    return TranscoderProjectsLocationsJobsListQueryParams;
}(SpeakeasyBase));
export { TranscoderProjectsLocationsJobsListQueryParams };
var TranscoderProjectsLocationsJobsListSecurity = /** @class */ (function (_super) {
    __extends(TranscoderProjectsLocationsJobsListSecurity, _super);
    function TranscoderProjectsLocationsJobsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TranscoderProjectsLocationsJobsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TranscoderProjectsLocationsJobsListSecurity.prototype, "oauth2c", void 0);
    return TranscoderProjectsLocationsJobsListSecurity;
}(SpeakeasyBase));
export { TranscoderProjectsLocationsJobsListSecurity };
var TranscoderProjectsLocationsJobsListRequest = /** @class */ (function (_super) {
    __extends(TranscoderProjectsLocationsJobsListRequest, _super);
    function TranscoderProjectsLocationsJobsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TranscoderProjectsLocationsJobsListPathParams)
    ], TranscoderProjectsLocationsJobsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TranscoderProjectsLocationsJobsListQueryParams)
    ], TranscoderProjectsLocationsJobsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TranscoderProjectsLocationsJobsListSecurity)
    ], TranscoderProjectsLocationsJobsListRequest.prototype, "security", void 0);
    return TranscoderProjectsLocationsJobsListRequest;
}(SpeakeasyBase));
export { TranscoderProjectsLocationsJobsListRequest };
var TranscoderProjectsLocationsJobsListResponse = /** @class */ (function (_super) {
    __extends(TranscoderProjectsLocationsJobsListResponse, _super);
    function TranscoderProjectsLocationsJobsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TranscoderProjectsLocationsJobsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListJobsResponse)
    ], TranscoderProjectsLocationsJobsListResponse.prototype, "listJobsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TranscoderProjectsLocationsJobsListResponse.prototype, "statusCode", void 0);
    return TranscoderProjectsLocationsJobsListResponse;
}(SpeakeasyBase));
export { TranscoderProjectsLocationsJobsListResponse };
