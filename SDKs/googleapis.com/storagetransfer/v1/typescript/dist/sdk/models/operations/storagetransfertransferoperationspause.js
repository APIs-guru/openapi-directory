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
var StoragetransferTransferOperationsPausePathParams = /** @class */ (function (_super) {
    __extends(StoragetransferTransferOperationsPausePathParams, _super);
    function StoragetransferTransferOperationsPausePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], StoragetransferTransferOperationsPausePathParams.prototype, "name", void 0);
    return StoragetransferTransferOperationsPausePathParams;
}(SpeakeasyBase));
export { StoragetransferTransferOperationsPausePathParams };
var StoragetransferTransferOperationsPauseQueryParams = /** @class */ (function (_super) {
    __extends(StoragetransferTransferOperationsPauseQueryParams, _super);
    function StoragetransferTransferOperationsPauseQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], StoragetransferTransferOperationsPauseQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], StoragetransferTransferOperationsPauseQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StoragetransferTransferOperationsPauseQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], StoragetransferTransferOperationsPauseQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StoragetransferTransferOperationsPauseQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StoragetransferTransferOperationsPauseQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StoragetransferTransferOperationsPauseQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StoragetransferTransferOperationsPauseQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StoragetransferTransferOperationsPauseQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], StoragetransferTransferOperationsPauseQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], StoragetransferTransferOperationsPauseQueryParams.prototype, "uploadProtocol", void 0);
    return StoragetransferTransferOperationsPauseQueryParams;
}(SpeakeasyBase));
export { StoragetransferTransferOperationsPauseQueryParams };
var StoragetransferTransferOperationsPauseSecurity = /** @class */ (function (_super) {
    __extends(StoragetransferTransferOperationsPauseSecurity, _super);
    function StoragetransferTransferOperationsPauseSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StoragetransferTransferOperationsPauseSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StoragetransferTransferOperationsPauseSecurity.prototype, "oauth2c", void 0);
    return StoragetransferTransferOperationsPauseSecurity;
}(SpeakeasyBase));
export { StoragetransferTransferOperationsPauseSecurity };
var StoragetransferTransferOperationsPauseRequest = /** @class */ (function (_super) {
    __extends(StoragetransferTransferOperationsPauseRequest, _super);
    function StoragetransferTransferOperationsPauseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StoragetransferTransferOperationsPausePathParams)
    ], StoragetransferTransferOperationsPauseRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StoragetransferTransferOperationsPauseQueryParams)
    ], StoragetransferTransferOperationsPauseRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], StoragetransferTransferOperationsPauseRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StoragetransferTransferOperationsPauseSecurity)
    ], StoragetransferTransferOperationsPauseRequest.prototype, "security", void 0);
    return StoragetransferTransferOperationsPauseRequest;
}(SpeakeasyBase));
export { StoragetransferTransferOperationsPauseRequest };
var StoragetransferTransferOperationsPauseResponse = /** @class */ (function (_super) {
    __extends(StoragetransferTransferOperationsPauseResponse, _super);
    function StoragetransferTransferOperationsPauseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StoragetransferTransferOperationsPauseResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], StoragetransferTransferOperationsPauseResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StoragetransferTransferOperationsPauseResponse.prototype, "statusCode", void 0);
    return StoragetransferTransferOperationsPauseResponse;
}(SpeakeasyBase));
export { StoragetransferTransferOperationsPauseResponse };
