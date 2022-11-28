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
var OsconfigProjectsPatchJobsExecutePathParams = /** @class */ (function (_super) {
    __extends(OsconfigProjectsPatchJobsExecutePathParams, _super);
    function OsconfigProjectsPatchJobsExecutePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchJobsExecutePathParams.prototype, "parent", void 0);
    return OsconfigProjectsPatchJobsExecutePathParams;
}(SpeakeasyBase));
export { OsconfigProjectsPatchJobsExecutePathParams };
var OsconfigProjectsPatchJobsExecuteQueryParams = /** @class */ (function (_super) {
    __extends(OsconfigProjectsPatchJobsExecuteQueryParams, _super);
    function OsconfigProjectsPatchJobsExecuteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchJobsExecuteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchJobsExecuteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchJobsExecuteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchJobsExecuteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchJobsExecuteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchJobsExecuteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchJobsExecuteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], OsconfigProjectsPatchJobsExecuteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchJobsExecuteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchJobsExecuteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchJobsExecuteQueryParams.prototype, "uploadProtocol", void 0);
    return OsconfigProjectsPatchJobsExecuteQueryParams;
}(SpeakeasyBase));
export { OsconfigProjectsPatchJobsExecuteQueryParams };
var OsconfigProjectsPatchJobsExecuteSecurity = /** @class */ (function (_super) {
    __extends(OsconfigProjectsPatchJobsExecuteSecurity, _super);
    function OsconfigProjectsPatchJobsExecuteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], OsconfigProjectsPatchJobsExecuteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], OsconfigProjectsPatchJobsExecuteSecurity.prototype, "oauth2c", void 0);
    return OsconfigProjectsPatchJobsExecuteSecurity;
}(SpeakeasyBase));
export { OsconfigProjectsPatchJobsExecuteSecurity };
var OsconfigProjectsPatchJobsExecuteRequest = /** @class */ (function (_super) {
    __extends(OsconfigProjectsPatchJobsExecuteRequest, _super);
    function OsconfigProjectsPatchJobsExecuteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OsconfigProjectsPatchJobsExecutePathParams)
    ], OsconfigProjectsPatchJobsExecuteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OsconfigProjectsPatchJobsExecuteQueryParams)
    ], OsconfigProjectsPatchJobsExecuteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ExecutePatchJobRequest)
    ], OsconfigProjectsPatchJobsExecuteRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OsconfigProjectsPatchJobsExecuteSecurity)
    ], OsconfigProjectsPatchJobsExecuteRequest.prototype, "security", void 0);
    return OsconfigProjectsPatchJobsExecuteRequest;
}(SpeakeasyBase));
export { OsconfigProjectsPatchJobsExecuteRequest };
var OsconfigProjectsPatchJobsExecuteResponse = /** @class */ (function (_super) {
    __extends(OsconfigProjectsPatchJobsExecuteResponse, _super);
    function OsconfigProjectsPatchJobsExecuteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchJobsExecuteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PatchJob)
    ], OsconfigProjectsPatchJobsExecuteResponse.prototype, "patchJob", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], OsconfigProjectsPatchJobsExecuteResponse.prototype, "statusCode", void 0);
    return OsconfigProjectsPatchJobsExecuteResponse;
}(SpeakeasyBase));
export { OsconfigProjectsPatchJobsExecuteResponse };
