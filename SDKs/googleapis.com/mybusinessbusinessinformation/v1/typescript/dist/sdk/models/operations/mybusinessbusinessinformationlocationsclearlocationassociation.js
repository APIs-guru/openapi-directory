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
var MybusinessbusinessinformationLocationsClearLocationAssociationPathParams = /** @class */ (function (_super) {
    __extends(MybusinessbusinessinformationLocationsClearLocationAssociationPathParams, _super);
    function MybusinessbusinessinformationLocationsClearLocationAssociationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationLocationsClearLocationAssociationPathParams.prototype, "name", void 0);
    return MybusinessbusinessinformationLocationsClearLocationAssociationPathParams;
}(SpeakeasyBase));
export { MybusinessbusinessinformationLocationsClearLocationAssociationPathParams };
var MybusinessbusinessinformationLocationsClearLocationAssociationQueryParams = /** @class */ (function (_super) {
    __extends(MybusinessbusinessinformationLocationsClearLocationAssociationQueryParams, _super);
    function MybusinessbusinessinformationLocationsClearLocationAssociationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationLocationsClearLocationAssociationQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationLocationsClearLocationAssociationQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationLocationsClearLocationAssociationQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationLocationsClearLocationAssociationQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationLocationsClearLocationAssociationQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationLocationsClearLocationAssociationQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationLocationsClearLocationAssociationQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MybusinessbusinessinformationLocationsClearLocationAssociationQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationLocationsClearLocationAssociationQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationLocationsClearLocationAssociationQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationLocationsClearLocationAssociationQueryParams.prototype, "uploadProtocol", void 0);
    return MybusinessbusinessinformationLocationsClearLocationAssociationQueryParams;
}(SpeakeasyBase));
export { MybusinessbusinessinformationLocationsClearLocationAssociationQueryParams };
var MybusinessbusinessinformationLocationsClearLocationAssociationRequest = /** @class */ (function (_super) {
    __extends(MybusinessbusinessinformationLocationsClearLocationAssociationRequest, _super);
    function MybusinessbusinessinformationLocationsClearLocationAssociationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MybusinessbusinessinformationLocationsClearLocationAssociationPathParams)
    ], MybusinessbusinessinformationLocationsClearLocationAssociationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MybusinessbusinessinformationLocationsClearLocationAssociationQueryParams)
    ], MybusinessbusinessinformationLocationsClearLocationAssociationRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], MybusinessbusinessinformationLocationsClearLocationAssociationRequest.prototype, "request", void 0);
    return MybusinessbusinessinformationLocationsClearLocationAssociationRequest;
}(SpeakeasyBase));
export { MybusinessbusinessinformationLocationsClearLocationAssociationRequest };
var MybusinessbusinessinformationLocationsClearLocationAssociationResponse = /** @class */ (function (_super) {
    __extends(MybusinessbusinessinformationLocationsClearLocationAssociationResponse, _super);
    function MybusinessbusinessinformationLocationsClearLocationAssociationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationLocationsClearLocationAssociationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], MybusinessbusinessinformationLocationsClearLocationAssociationResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MybusinessbusinessinformationLocationsClearLocationAssociationResponse.prototype, "statusCode", void 0);
    return MybusinessbusinessinformationLocationsClearLocationAssociationResponse;
}(SpeakeasyBase));
export { MybusinessbusinessinformationLocationsClearLocationAssociationResponse };
