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
var MybusinessbusinessinformationLocationsUpdateAttributesPathParams = /** @class */ (function (_super) {
    __extends(MybusinessbusinessinformationLocationsUpdateAttributesPathParams, _super);
    function MybusinessbusinessinformationLocationsUpdateAttributesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationLocationsUpdateAttributesPathParams.prototype, "name", void 0);
    return MybusinessbusinessinformationLocationsUpdateAttributesPathParams;
}(SpeakeasyBase));
export { MybusinessbusinessinformationLocationsUpdateAttributesPathParams };
var MybusinessbusinessinformationLocationsUpdateAttributesQueryParams = /** @class */ (function (_super) {
    __extends(MybusinessbusinessinformationLocationsUpdateAttributesQueryParams, _super);
    function MybusinessbusinessinformationLocationsUpdateAttributesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationLocationsUpdateAttributesQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationLocationsUpdateAttributesQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationLocationsUpdateAttributesQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=attributeMask" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationLocationsUpdateAttributesQueryParams.prototype, "attributeMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationLocationsUpdateAttributesQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationLocationsUpdateAttributesQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationLocationsUpdateAttributesQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationLocationsUpdateAttributesQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MybusinessbusinessinformationLocationsUpdateAttributesQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationLocationsUpdateAttributesQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationLocationsUpdateAttributesQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationLocationsUpdateAttributesQueryParams.prototype, "uploadProtocol", void 0);
    return MybusinessbusinessinformationLocationsUpdateAttributesQueryParams;
}(SpeakeasyBase));
export { MybusinessbusinessinformationLocationsUpdateAttributesQueryParams };
var MybusinessbusinessinformationLocationsUpdateAttributesRequest = /** @class */ (function (_super) {
    __extends(MybusinessbusinessinformationLocationsUpdateAttributesRequest, _super);
    function MybusinessbusinessinformationLocationsUpdateAttributesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MybusinessbusinessinformationLocationsUpdateAttributesPathParams)
    ], MybusinessbusinessinformationLocationsUpdateAttributesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MybusinessbusinessinformationLocationsUpdateAttributesQueryParams)
    ], MybusinessbusinessinformationLocationsUpdateAttributesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AttributesInput)
    ], MybusinessbusinessinformationLocationsUpdateAttributesRequest.prototype, "request", void 0);
    return MybusinessbusinessinformationLocationsUpdateAttributesRequest;
}(SpeakeasyBase));
export { MybusinessbusinessinformationLocationsUpdateAttributesRequest };
var MybusinessbusinessinformationLocationsUpdateAttributesResponse = /** @class */ (function (_super) {
    __extends(MybusinessbusinessinformationLocationsUpdateAttributesResponse, _super);
    function MybusinessbusinessinformationLocationsUpdateAttributesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Attributes)
    ], MybusinessbusinessinformationLocationsUpdateAttributesResponse.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationLocationsUpdateAttributesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MybusinessbusinessinformationLocationsUpdateAttributesResponse.prototype, "statusCode", void 0);
    return MybusinessbusinessinformationLocationsUpdateAttributesResponse;
}(SpeakeasyBase));
export { MybusinessbusinessinformationLocationsUpdateAttributesResponse };
