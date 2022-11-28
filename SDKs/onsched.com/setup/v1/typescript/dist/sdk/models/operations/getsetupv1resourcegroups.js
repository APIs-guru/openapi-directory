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
var GetSetupV1ResourcegroupsQueryParams = /** @class */ (function (_super) {
    __extends(GetSetupV1ResourcegroupsQueryParams, _super);
    function GetSetupV1ResourcegroupsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deleted" }),
        __metadata("design:type", Boolean)
    ], GetSetupV1ResourcegroupsQueryParams.prototype, "deleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetSetupV1ResourcegroupsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locationId" }),
        __metadata("design:type", String)
    ], GetSetupV1ResourcegroupsQueryParams.prototype, "locationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], GetSetupV1ResourcegroupsQueryParams.prototype, "offset", void 0);
    return GetSetupV1ResourcegroupsQueryParams;
}(SpeakeasyBase));
export { GetSetupV1ResourcegroupsQueryParams };
var GetSetupV1ResourcegroupsRequest = /** @class */ (function (_super) {
    __extends(GetSetupV1ResourcegroupsRequest, _super);
    function GetSetupV1ResourcegroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSetupV1ResourcegroupsQueryParams)
    ], GetSetupV1ResourcegroupsRequest.prototype, "queryParams", void 0);
    return GetSetupV1ResourcegroupsRequest;
}(SpeakeasyBase));
export { GetSetupV1ResourcegroupsRequest };
var GetSetupV1ResourcegroupsResponse = /** @class */ (function (_super) {
    __extends(GetSetupV1ResourcegroupsResponse, _super);
    function GetSetupV1ResourcegroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSetupV1ResourcegroupsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetSetupV1ResourcegroupsResponse.prototype, "resourceGroupListViewModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSetupV1ResourcegroupsResponse.prototype, "statusCode", void 0);
    return GetSetupV1ResourcegroupsResponse;
}(SpeakeasyBase));
export { GetSetupV1ResourcegroupsResponse };
