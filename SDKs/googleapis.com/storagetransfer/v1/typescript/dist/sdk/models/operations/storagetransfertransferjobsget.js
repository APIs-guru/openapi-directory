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
var StoragetransferTransferJobsGetPathParams = /** @class */ (function (_super) {
    __extends(StoragetransferTransferJobsGetPathParams, _super);
    function StoragetransferTransferJobsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobName" }),
        __metadata("design:type", String)
    ], StoragetransferTransferJobsGetPathParams.prototype, "jobName", void 0);
    return StoragetransferTransferJobsGetPathParams;
}(SpeakeasyBase));
export { StoragetransferTransferJobsGetPathParams };
var StoragetransferTransferJobsGetQueryParams = /** @class */ (function (_super) {
    __extends(StoragetransferTransferJobsGetQueryParams, _super);
    function StoragetransferTransferJobsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], StoragetransferTransferJobsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], StoragetransferTransferJobsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StoragetransferTransferJobsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], StoragetransferTransferJobsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StoragetransferTransferJobsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StoragetransferTransferJobsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StoragetransferTransferJobsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StoragetransferTransferJobsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=projectId" }),
        __metadata("design:type", String)
    ], StoragetransferTransferJobsGetQueryParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StoragetransferTransferJobsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], StoragetransferTransferJobsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], StoragetransferTransferJobsGetQueryParams.prototype, "uploadProtocol", void 0);
    return StoragetransferTransferJobsGetQueryParams;
}(SpeakeasyBase));
export { StoragetransferTransferJobsGetQueryParams };
var StoragetransferTransferJobsGetSecurity = /** @class */ (function (_super) {
    __extends(StoragetransferTransferJobsGetSecurity, _super);
    function StoragetransferTransferJobsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StoragetransferTransferJobsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StoragetransferTransferJobsGetSecurity.prototype, "oauth2c", void 0);
    return StoragetransferTransferJobsGetSecurity;
}(SpeakeasyBase));
export { StoragetransferTransferJobsGetSecurity };
var StoragetransferTransferJobsGetRequest = /** @class */ (function (_super) {
    __extends(StoragetransferTransferJobsGetRequest, _super);
    function StoragetransferTransferJobsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StoragetransferTransferJobsGetPathParams)
    ], StoragetransferTransferJobsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StoragetransferTransferJobsGetQueryParams)
    ], StoragetransferTransferJobsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StoragetransferTransferJobsGetSecurity)
    ], StoragetransferTransferJobsGetRequest.prototype, "security", void 0);
    return StoragetransferTransferJobsGetRequest;
}(SpeakeasyBase));
export { StoragetransferTransferJobsGetRequest };
var StoragetransferTransferJobsGetResponse = /** @class */ (function (_super) {
    __extends(StoragetransferTransferJobsGetResponse, _super);
    function StoragetransferTransferJobsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StoragetransferTransferJobsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StoragetransferTransferJobsGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TransferJob)
    ], StoragetransferTransferJobsGetResponse.prototype, "transferJob", void 0);
    return StoragetransferTransferJobsGetResponse;
}(SpeakeasyBase));
export { StoragetransferTransferJobsGetResponse };
