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
var MybusinessbusinessinformationLocationsGetAttributesPathParams = /** @class */ (function (_super) {
    __extends(MybusinessbusinessinformationLocationsGetAttributesPathParams, _super);
    function MybusinessbusinessinformationLocationsGetAttributesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationLocationsGetAttributesPathParams.prototype, "name", void 0);
    return MybusinessbusinessinformationLocationsGetAttributesPathParams;
}(SpeakeasyBase));
export { MybusinessbusinessinformationLocationsGetAttributesPathParams };
var MybusinessbusinessinformationLocationsGetAttributesQueryParams = /** @class */ (function (_super) {
    __extends(MybusinessbusinessinformationLocationsGetAttributesQueryParams, _super);
    function MybusinessbusinessinformationLocationsGetAttributesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationLocationsGetAttributesQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationLocationsGetAttributesQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationLocationsGetAttributesQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationLocationsGetAttributesQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationLocationsGetAttributesQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationLocationsGetAttributesQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationLocationsGetAttributesQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MybusinessbusinessinformationLocationsGetAttributesQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationLocationsGetAttributesQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationLocationsGetAttributesQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationLocationsGetAttributesQueryParams.prototype, "uploadProtocol", void 0);
    return MybusinessbusinessinformationLocationsGetAttributesQueryParams;
}(SpeakeasyBase));
export { MybusinessbusinessinformationLocationsGetAttributesQueryParams };
var MybusinessbusinessinformationLocationsGetAttributesRequest = /** @class */ (function (_super) {
    __extends(MybusinessbusinessinformationLocationsGetAttributesRequest, _super);
    function MybusinessbusinessinformationLocationsGetAttributesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MybusinessbusinessinformationLocationsGetAttributesPathParams)
    ], MybusinessbusinessinformationLocationsGetAttributesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MybusinessbusinessinformationLocationsGetAttributesQueryParams)
    ], MybusinessbusinessinformationLocationsGetAttributesRequest.prototype, "queryParams", void 0);
    return MybusinessbusinessinformationLocationsGetAttributesRequest;
}(SpeakeasyBase));
export { MybusinessbusinessinformationLocationsGetAttributesRequest };
var MybusinessbusinessinformationLocationsGetAttributesResponse = /** @class */ (function (_super) {
    __extends(MybusinessbusinessinformationLocationsGetAttributesResponse, _super);
    function MybusinessbusinessinformationLocationsGetAttributesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Attributes)
    ], MybusinessbusinessinformationLocationsGetAttributesResponse.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationLocationsGetAttributesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MybusinessbusinessinformationLocationsGetAttributesResponse.prototype, "statusCode", void 0);
    return MybusinessbusinessinformationLocationsGetAttributesResponse;
}(SpeakeasyBase));
export { MybusinessbusinessinformationLocationsGetAttributesResponse };
