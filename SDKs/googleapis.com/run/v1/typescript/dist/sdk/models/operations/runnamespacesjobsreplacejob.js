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
var RunNamespacesJobsReplaceJobPathParams = /** @class */ (function (_super) {
    __extends(RunNamespacesJobsReplaceJobPathParams, _super);
    function RunNamespacesJobsReplaceJobPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], RunNamespacesJobsReplaceJobPathParams.prototype, "name", void 0);
    return RunNamespacesJobsReplaceJobPathParams;
}(SpeakeasyBase));
export { RunNamespacesJobsReplaceJobPathParams };
var RunNamespacesJobsReplaceJobQueryParams = /** @class */ (function (_super) {
    __extends(RunNamespacesJobsReplaceJobQueryParams, _super);
    function RunNamespacesJobsReplaceJobQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RunNamespacesJobsReplaceJobQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RunNamespacesJobsReplaceJobQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RunNamespacesJobsReplaceJobQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RunNamespacesJobsReplaceJobQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RunNamespacesJobsReplaceJobQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RunNamespacesJobsReplaceJobQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RunNamespacesJobsReplaceJobQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RunNamespacesJobsReplaceJobQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RunNamespacesJobsReplaceJobQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RunNamespacesJobsReplaceJobQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RunNamespacesJobsReplaceJobQueryParams.prototype, "uploadProtocol", void 0);
    return RunNamespacesJobsReplaceJobQueryParams;
}(SpeakeasyBase));
export { RunNamespacesJobsReplaceJobQueryParams };
var RunNamespacesJobsReplaceJobSecurity = /** @class */ (function (_super) {
    __extends(RunNamespacesJobsReplaceJobSecurity, _super);
    function RunNamespacesJobsReplaceJobSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RunNamespacesJobsReplaceJobSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RunNamespacesJobsReplaceJobSecurity.prototype, "oauth2c", void 0);
    return RunNamespacesJobsReplaceJobSecurity;
}(SpeakeasyBase));
export { RunNamespacesJobsReplaceJobSecurity };
var RunNamespacesJobsReplaceJobRequest = /** @class */ (function (_super) {
    __extends(RunNamespacesJobsReplaceJobRequest, _super);
    function RunNamespacesJobsReplaceJobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RunNamespacesJobsReplaceJobPathParams)
    ], RunNamespacesJobsReplaceJobRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RunNamespacesJobsReplaceJobQueryParams)
    ], RunNamespacesJobsReplaceJobRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Job)
    ], RunNamespacesJobsReplaceJobRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RunNamespacesJobsReplaceJobSecurity)
    ], RunNamespacesJobsReplaceJobRequest.prototype, "security", void 0);
    return RunNamespacesJobsReplaceJobRequest;
}(SpeakeasyBase));
export { RunNamespacesJobsReplaceJobRequest };
var RunNamespacesJobsReplaceJobResponse = /** @class */ (function (_super) {
    __extends(RunNamespacesJobsReplaceJobResponse, _super);
    function RunNamespacesJobsReplaceJobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RunNamespacesJobsReplaceJobResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Job)
    ], RunNamespacesJobsReplaceJobResponse.prototype, "job", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RunNamespacesJobsReplaceJobResponse.prototype, "statusCode", void 0);
    return RunNamespacesJobsReplaceJobResponse;
}(SpeakeasyBase));
export { RunNamespacesJobsReplaceJobResponse };
