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
var TranscoderProjectsLocationsJobsCreatePathParams = /** @class */ (function (_super) {
    __extends(TranscoderProjectsLocationsJobsCreatePathParams, _super);
    function TranscoderProjectsLocationsJobsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], TranscoderProjectsLocationsJobsCreatePathParams.prototype, "parent", void 0);
    return TranscoderProjectsLocationsJobsCreatePathParams;
}(SpeakeasyBase));
export { TranscoderProjectsLocationsJobsCreatePathParams };
var TranscoderProjectsLocationsJobsCreateQueryParams = /** @class */ (function (_super) {
    __extends(TranscoderProjectsLocationsJobsCreateQueryParams, _super);
    function TranscoderProjectsLocationsJobsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TranscoderProjectsLocationsJobsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TranscoderProjectsLocationsJobsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TranscoderProjectsLocationsJobsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TranscoderProjectsLocationsJobsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TranscoderProjectsLocationsJobsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TranscoderProjectsLocationsJobsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TranscoderProjectsLocationsJobsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TranscoderProjectsLocationsJobsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TranscoderProjectsLocationsJobsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TranscoderProjectsLocationsJobsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TranscoderProjectsLocationsJobsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return TranscoderProjectsLocationsJobsCreateQueryParams;
}(SpeakeasyBase));
export { TranscoderProjectsLocationsJobsCreateQueryParams };
var TranscoderProjectsLocationsJobsCreateSecurity = /** @class */ (function (_super) {
    __extends(TranscoderProjectsLocationsJobsCreateSecurity, _super);
    function TranscoderProjectsLocationsJobsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TranscoderProjectsLocationsJobsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TranscoderProjectsLocationsJobsCreateSecurity.prototype, "oauth2c", void 0);
    return TranscoderProjectsLocationsJobsCreateSecurity;
}(SpeakeasyBase));
export { TranscoderProjectsLocationsJobsCreateSecurity };
var TranscoderProjectsLocationsJobsCreateRequest = /** @class */ (function (_super) {
    __extends(TranscoderProjectsLocationsJobsCreateRequest, _super);
    function TranscoderProjectsLocationsJobsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TranscoderProjectsLocationsJobsCreatePathParams)
    ], TranscoderProjectsLocationsJobsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TranscoderProjectsLocationsJobsCreateQueryParams)
    ], TranscoderProjectsLocationsJobsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.JobInput)
    ], TranscoderProjectsLocationsJobsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TranscoderProjectsLocationsJobsCreateSecurity)
    ], TranscoderProjectsLocationsJobsCreateRequest.prototype, "security", void 0);
    return TranscoderProjectsLocationsJobsCreateRequest;
}(SpeakeasyBase));
export { TranscoderProjectsLocationsJobsCreateRequest };
var TranscoderProjectsLocationsJobsCreateResponse = /** @class */ (function (_super) {
    __extends(TranscoderProjectsLocationsJobsCreateResponse, _super);
    function TranscoderProjectsLocationsJobsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TranscoderProjectsLocationsJobsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Job)
    ], TranscoderProjectsLocationsJobsCreateResponse.prototype, "job", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TranscoderProjectsLocationsJobsCreateResponse.prototype, "statusCode", void 0);
    return TranscoderProjectsLocationsJobsCreateResponse;
}(SpeakeasyBase));
export { TranscoderProjectsLocationsJobsCreateResponse };
