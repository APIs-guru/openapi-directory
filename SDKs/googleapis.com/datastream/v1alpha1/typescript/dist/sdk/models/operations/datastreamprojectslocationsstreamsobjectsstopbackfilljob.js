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
var DatastreamProjectsLocationsStreamsObjectsStopBackfillJobPathParams = /** @class */ (function (_super) {
    __extends(DatastreamProjectsLocationsStreamsObjectsStopBackfillJobPathParams, _super);
    function DatastreamProjectsLocationsStreamsObjectsStopBackfillJobPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=object" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsObjectsStopBackfillJobPathParams.prototype, "object", void 0);
    return DatastreamProjectsLocationsStreamsObjectsStopBackfillJobPathParams;
}(SpeakeasyBase));
export { DatastreamProjectsLocationsStreamsObjectsStopBackfillJobPathParams };
var DatastreamProjectsLocationsStreamsObjectsStopBackfillJobQueryParams = /** @class */ (function (_super) {
    __extends(DatastreamProjectsLocationsStreamsObjectsStopBackfillJobQueryParams, _super);
    function DatastreamProjectsLocationsStreamsObjectsStopBackfillJobQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsObjectsStopBackfillJobQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsObjectsStopBackfillJobQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsObjectsStopBackfillJobQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsObjectsStopBackfillJobQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsObjectsStopBackfillJobQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsObjectsStopBackfillJobQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsObjectsStopBackfillJobQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DatastreamProjectsLocationsStreamsObjectsStopBackfillJobQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsObjectsStopBackfillJobQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsObjectsStopBackfillJobQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsObjectsStopBackfillJobQueryParams.prototype, "uploadProtocol", void 0);
    return DatastreamProjectsLocationsStreamsObjectsStopBackfillJobQueryParams;
}(SpeakeasyBase));
export { DatastreamProjectsLocationsStreamsObjectsStopBackfillJobQueryParams };
var DatastreamProjectsLocationsStreamsObjectsStopBackfillJobSecurity = /** @class */ (function (_super) {
    __extends(DatastreamProjectsLocationsStreamsObjectsStopBackfillJobSecurity, _super);
    function DatastreamProjectsLocationsStreamsObjectsStopBackfillJobSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatastreamProjectsLocationsStreamsObjectsStopBackfillJobSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatastreamProjectsLocationsStreamsObjectsStopBackfillJobSecurity.prototype, "oauth2c", void 0);
    return DatastreamProjectsLocationsStreamsObjectsStopBackfillJobSecurity;
}(SpeakeasyBase));
export { DatastreamProjectsLocationsStreamsObjectsStopBackfillJobSecurity };
var DatastreamProjectsLocationsStreamsObjectsStopBackfillJobRequest = /** @class */ (function (_super) {
    __extends(DatastreamProjectsLocationsStreamsObjectsStopBackfillJobRequest, _super);
    function DatastreamProjectsLocationsStreamsObjectsStopBackfillJobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatastreamProjectsLocationsStreamsObjectsStopBackfillJobPathParams)
    ], DatastreamProjectsLocationsStreamsObjectsStopBackfillJobRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatastreamProjectsLocationsStreamsObjectsStopBackfillJobQueryParams)
    ], DatastreamProjectsLocationsStreamsObjectsStopBackfillJobRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatastreamProjectsLocationsStreamsObjectsStopBackfillJobSecurity)
    ], DatastreamProjectsLocationsStreamsObjectsStopBackfillJobRequest.prototype, "security", void 0);
    return DatastreamProjectsLocationsStreamsObjectsStopBackfillJobRequest;
}(SpeakeasyBase));
export { DatastreamProjectsLocationsStreamsObjectsStopBackfillJobRequest };
var DatastreamProjectsLocationsStreamsObjectsStopBackfillJobResponse = /** @class */ (function (_super) {
    __extends(DatastreamProjectsLocationsStreamsObjectsStopBackfillJobResponse, _super);
    function DatastreamProjectsLocationsStreamsObjectsStopBackfillJobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsObjectsStopBackfillJobResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DatastreamProjectsLocationsStreamsObjectsStopBackfillJobResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.StopBackfillJobResponse)
    ], DatastreamProjectsLocationsStreamsObjectsStopBackfillJobResponse.prototype, "stopBackfillJobResponse", void 0);
    return DatastreamProjectsLocationsStreamsObjectsStopBackfillJobResponse;
}(SpeakeasyBase));
export { DatastreamProjectsLocationsStreamsObjectsStopBackfillJobResponse };
