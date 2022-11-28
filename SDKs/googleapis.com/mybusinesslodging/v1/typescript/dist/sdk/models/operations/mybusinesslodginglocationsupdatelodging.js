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
var MybusinesslodgingLocationsUpdateLodgingPathParams = /** @class */ (function (_super) {
    __extends(MybusinesslodgingLocationsUpdateLodgingPathParams, _super);
    function MybusinesslodgingLocationsUpdateLodgingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], MybusinesslodgingLocationsUpdateLodgingPathParams.prototype, "name", void 0);
    return MybusinesslodgingLocationsUpdateLodgingPathParams;
}(SpeakeasyBase));
export { MybusinesslodgingLocationsUpdateLodgingPathParams };
var MybusinesslodgingLocationsUpdateLodgingQueryParams = /** @class */ (function (_super) {
    __extends(MybusinesslodgingLocationsUpdateLodgingQueryParams, _super);
    function MybusinesslodgingLocationsUpdateLodgingQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MybusinesslodgingLocationsUpdateLodgingQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MybusinesslodgingLocationsUpdateLodgingQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MybusinesslodgingLocationsUpdateLodgingQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MybusinesslodgingLocationsUpdateLodgingQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MybusinesslodgingLocationsUpdateLodgingQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MybusinesslodgingLocationsUpdateLodgingQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MybusinesslodgingLocationsUpdateLodgingQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MybusinesslodgingLocationsUpdateLodgingQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MybusinesslodgingLocationsUpdateLodgingQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], MybusinesslodgingLocationsUpdateLodgingQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MybusinesslodgingLocationsUpdateLodgingQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MybusinesslodgingLocationsUpdateLodgingQueryParams.prototype, "uploadProtocol", void 0);
    return MybusinesslodgingLocationsUpdateLodgingQueryParams;
}(SpeakeasyBase));
export { MybusinesslodgingLocationsUpdateLodgingQueryParams };
var MybusinesslodgingLocationsUpdateLodgingRequest = /** @class */ (function (_super) {
    __extends(MybusinesslodgingLocationsUpdateLodgingRequest, _super);
    function MybusinesslodgingLocationsUpdateLodgingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MybusinesslodgingLocationsUpdateLodgingPathParams)
    ], MybusinesslodgingLocationsUpdateLodgingRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MybusinesslodgingLocationsUpdateLodgingQueryParams)
    ], MybusinesslodgingLocationsUpdateLodgingRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.LodgingInput)
    ], MybusinesslodgingLocationsUpdateLodgingRequest.prototype, "request", void 0);
    return MybusinesslodgingLocationsUpdateLodgingRequest;
}(SpeakeasyBase));
export { MybusinesslodgingLocationsUpdateLodgingRequest };
var MybusinesslodgingLocationsUpdateLodgingResponse = /** @class */ (function (_super) {
    __extends(MybusinesslodgingLocationsUpdateLodgingResponse, _super);
    function MybusinesslodgingLocationsUpdateLodgingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MybusinesslodgingLocationsUpdateLodgingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Lodging)
    ], MybusinesslodgingLocationsUpdateLodgingResponse.prototype, "lodging", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MybusinesslodgingLocationsUpdateLodgingResponse.prototype, "statusCode", void 0);
    return MybusinesslodgingLocationsUpdateLodgingResponse;
}(SpeakeasyBase));
export { MybusinesslodgingLocationsUpdateLodgingResponse };
