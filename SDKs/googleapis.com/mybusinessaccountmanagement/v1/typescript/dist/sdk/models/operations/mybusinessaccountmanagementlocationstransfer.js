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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var MybusinessaccountmanagementLocationsTransferPathParams = /** @class */ (function (_super) {
    __extends(MybusinessaccountmanagementLocationsTransferPathParams, _super);
    function MybusinessaccountmanagementLocationsTransferPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementLocationsTransferPathParams.prototype, "name", void 0);
    return MybusinessaccountmanagementLocationsTransferPathParams;
}(SpeakeasyBase));
export { MybusinessaccountmanagementLocationsTransferPathParams };
var MybusinessaccountmanagementLocationsTransferQueryParams = /** @class */ (function (_super) {
    __extends(MybusinessaccountmanagementLocationsTransferQueryParams, _super);
    function MybusinessaccountmanagementLocationsTransferQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementLocationsTransferQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementLocationsTransferQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementLocationsTransferQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementLocationsTransferQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementLocationsTransferQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementLocationsTransferQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementLocationsTransferQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MybusinessaccountmanagementLocationsTransferQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementLocationsTransferQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementLocationsTransferQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementLocationsTransferQueryParams.prototype, "uploadProtocol", void 0);
    return MybusinessaccountmanagementLocationsTransferQueryParams;
}(SpeakeasyBase));
export { MybusinessaccountmanagementLocationsTransferQueryParams };
var MybusinessaccountmanagementLocationsTransferRequest = /** @class */ (function (_super) {
    __extends(MybusinessaccountmanagementLocationsTransferRequest, _super);
    function MybusinessaccountmanagementLocationsTransferRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", MybusinessaccountmanagementLocationsTransferPathParams)
    ], MybusinessaccountmanagementLocationsTransferRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", MybusinessaccountmanagementLocationsTransferQueryParams)
    ], MybusinessaccountmanagementLocationsTransferRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TransferLocationRequest)
    ], MybusinessaccountmanagementLocationsTransferRequest.prototype, "request", void 0);
    return MybusinessaccountmanagementLocationsTransferRequest;
}(SpeakeasyBase));
export { MybusinessaccountmanagementLocationsTransferRequest };
var MybusinessaccountmanagementLocationsTransferResponse = /** @class */ (function (_super) {
    __extends(MybusinessaccountmanagementLocationsTransferResponse, _super);
    function MybusinessaccountmanagementLocationsTransferResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementLocationsTransferResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], MybusinessaccountmanagementLocationsTransferResponse.prototype, "empty", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], MybusinessaccountmanagementLocationsTransferResponse.prototype, "statusCode", void 0);
    return MybusinessaccountmanagementLocationsTransferResponse;
}(SpeakeasyBase));
export { MybusinessaccountmanagementLocationsTransferResponse };
