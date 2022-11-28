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
var GetSetupV1ResourcesQueryParams = /** @class */ (function (_super) {
    __extends(GetSetupV1ResourcesQueryParams, _super);
    function GetSetupV1ResourcesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deleted" }),
        __metadata("design:type", Boolean)
    ], GetSetupV1ResourcesQueryParams.prototype, "deleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email" }),
        __metadata("design:type", String)
    ], GetSetupV1ResourcesQueryParams.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=googleAuthReturnUrl" }),
        __metadata("design:type", String)
    ], GetSetupV1ResourcesQueryParams.prototype, "googleAuthReturnUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetSetupV1ResourcesQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locationId" }),
        __metadata("design:type", String)
    ], GetSetupV1ResourcesQueryParams.prototype, "locationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], GetSetupV1ResourcesQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], GetSetupV1ResourcesQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outlookAuthReturnUrl" }),
        __metadata("design:type", String)
    ], GetSetupV1ResourcesQueryParams.prototype, "outlookAuthReturnUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resourceGroupId" }),
        __metadata("design:type", String)
    ], GetSetupV1ResourcesQueryParams.prototype, "resourceGroupId", void 0);
    return GetSetupV1ResourcesQueryParams;
}(SpeakeasyBase));
export { GetSetupV1ResourcesQueryParams };
var GetSetupV1ResourcesRequest = /** @class */ (function (_super) {
    __extends(GetSetupV1ResourcesRequest, _super);
    function GetSetupV1ResourcesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSetupV1ResourcesQueryParams)
    ], GetSetupV1ResourcesRequest.prototype, "queryParams", void 0);
    return GetSetupV1ResourcesRequest;
}(SpeakeasyBase));
export { GetSetupV1ResourcesRequest };
var GetSetupV1ResourcesResponse = /** @class */ (function (_super) {
    __extends(GetSetupV1ResourcesResponse, _super);
    function GetSetupV1ResourcesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSetupV1ResourcesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetSetupV1ResourcesResponse.prototype, "resourceListViewModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSetupV1ResourcesResponse.prototype, "statusCode", void 0);
    return GetSetupV1ResourcesResponse;
}(SpeakeasyBase));
export { GetSetupV1ResourcesResponse };
