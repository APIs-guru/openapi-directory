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
var MybusinessbusinessinformationLocationsAssociatePathParams = /** @class */ (function (_super) {
    __extends(MybusinessbusinessinformationLocationsAssociatePathParams, _super);
    function MybusinessbusinessinformationLocationsAssociatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationLocationsAssociatePathParams.prototype, "name", void 0);
    return MybusinessbusinessinformationLocationsAssociatePathParams;
}(SpeakeasyBase));
export { MybusinessbusinessinformationLocationsAssociatePathParams };
var MybusinessbusinessinformationLocationsAssociateQueryParams = /** @class */ (function (_super) {
    __extends(MybusinessbusinessinformationLocationsAssociateQueryParams, _super);
    function MybusinessbusinessinformationLocationsAssociateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationLocationsAssociateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationLocationsAssociateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationLocationsAssociateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationLocationsAssociateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationLocationsAssociateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationLocationsAssociateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationLocationsAssociateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MybusinessbusinessinformationLocationsAssociateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationLocationsAssociateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationLocationsAssociateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationLocationsAssociateQueryParams.prototype, "uploadProtocol", void 0);
    return MybusinessbusinessinformationLocationsAssociateQueryParams;
}(SpeakeasyBase));
export { MybusinessbusinessinformationLocationsAssociateQueryParams };
var MybusinessbusinessinformationLocationsAssociateRequest = /** @class */ (function (_super) {
    __extends(MybusinessbusinessinformationLocationsAssociateRequest, _super);
    function MybusinessbusinessinformationLocationsAssociateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MybusinessbusinessinformationLocationsAssociatePathParams)
    ], MybusinessbusinessinformationLocationsAssociateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MybusinessbusinessinformationLocationsAssociateQueryParams)
    ], MybusinessbusinessinformationLocationsAssociateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AssociateLocationRequest)
    ], MybusinessbusinessinformationLocationsAssociateRequest.prototype, "request", void 0);
    return MybusinessbusinessinformationLocationsAssociateRequest;
}(SpeakeasyBase));
export { MybusinessbusinessinformationLocationsAssociateRequest };
var MybusinessbusinessinformationLocationsAssociateResponse = /** @class */ (function (_super) {
    __extends(MybusinessbusinessinformationLocationsAssociateResponse, _super);
    function MybusinessbusinessinformationLocationsAssociateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationLocationsAssociateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], MybusinessbusinessinformationLocationsAssociateResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MybusinessbusinessinformationLocationsAssociateResponse.prototype, "statusCode", void 0);
    return MybusinessbusinessinformationLocationsAssociateResponse;
}(SpeakeasyBase));
export { MybusinessbusinessinformationLocationsAssociateResponse };
