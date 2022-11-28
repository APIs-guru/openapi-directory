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
var CloudsupportMediaUploadPathParams = /** @class */ (function (_super) {
    __extends(CloudsupportMediaUploadPathParams, _super);
    function CloudsupportMediaUploadPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudsupportMediaUploadPathParams.prototype, "parent", void 0);
    return CloudsupportMediaUploadPathParams;
}(SpeakeasyBase));
export { CloudsupportMediaUploadPathParams };
var CloudsupportMediaUploadQueryParams = /** @class */ (function (_super) {
    __extends(CloudsupportMediaUploadQueryParams, _super);
    function CloudsupportMediaUploadQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudsupportMediaUploadQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudsupportMediaUploadQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudsupportMediaUploadQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudsupportMediaUploadQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudsupportMediaUploadQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudsupportMediaUploadQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudsupportMediaUploadQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudsupportMediaUploadQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudsupportMediaUploadQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudsupportMediaUploadQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudsupportMediaUploadQueryParams.prototype, "uploadProtocol", void 0);
    return CloudsupportMediaUploadQueryParams;
}(SpeakeasyBase));
export { CloudsupportMediaUploadQueryParams };
var CloudsupportMediaUploadRequestsInput = /** @class */ (function (_super) {
    __extends(CloudsupportMediaUploadRequestsInput, _super);
    function CloudsupportMediaUploadRequestsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/octet-stream" }),
        __metadata("design:type", Uint8Array)
    ], CloudsupportMediaUploadRequestsInput.prototype, "applicationOctetStream", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateAttachmentRequestInput)
    ], CloudsupportMediaUploadRequestsInput.prototype, "createAttachmentRequest", void 0);
    return CloudsupportMediaUploadRequestsInput;
}(SpeakeasyBase));
export { CloudsupportMediaUploadRequestsInput };
var CloudsupportMediaUploadSecurity = /** @class */ (function (_super) {
    __extends(CloudsupportMediaUploadSecurity, _super);
    function CloudsupportMediaUploadSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsupportMediaUploadSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsupportMediaUploadSecurity.prototype, "oauth2c", void 0);
    return CloudsupportMediaUploadSecurity;
}(SpeakeasyBase));
export { CloudsupportMediaUploadSecurity };
var CloudsupportMediaUploadRequest = /** @class */ (function (_super) {
    __extends(CloudsupportMediaUploadRequest, _super);
    function CloudsupportMediaUploadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsupportMediaUploadPathParams)
    ], CloudsupportMediaUploadRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsupportMediaUploadQueryParams)
    ], CloudsupportMediaUploadRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsupportMediaUploadRequestsInput)
    ], CloudsupportMediaUploadRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsupportMediaUploadSecurity)
    ], CloudsupportMediaUploadRequest.prototype, "security", void 0);
    return CloudsupportMediaUploadRequest;
}(SpeakeasyBase));
export { CloudsupportMediaUploadRequest };
var CloudsupportMediaUploadResponse = /** @class */ (function (_super) {
    __extends(CloudsupportMediaUploadResponse, _super);
    function CloudsupportMediaUploadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Attachment)
    ], CloudsupportMediaUploadResponse.prototype, "attachment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudsupportMediaUploadResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudsupportMediaUploadResponse.prototype, "statusCode", void 0);
    return CloudsupportMediaUploadResponse;
}(SpeakeasyBase));
export { CloudsupportMediaUploadResponse };
