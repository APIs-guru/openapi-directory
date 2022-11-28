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
var GetTileV2LocationsTilesZXYPbfGetPathParams = /** @class */ (function (_super) {
    __extends(GetTileV2LocationsTilesZXYPbfGetPathParams, _super);
    function GetTileV2LocationsTilesZXYPbfGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=x" }),
        __metadata("design:type", Number)
    ], GetTileV2LocationsTilesZXYPbfGetPathParams.prototype, "x", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=y" }),
        __metadata("design:type", Number)
    ], GetTileV2LocationsTilesZXYPbfGetPathParams.prototype, "y", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=z" }),
        __metadata("design:type", Number)
    ], GetTileV2LocationsTilesZXYPbfGetPathParams.prototype, "z", void 0);
    return GetTileV2LocationsTilesZXYPbfGetPathParams;
}(SpeakeasyBase));
export { GetTileV2LocationsTilesZXYPbfGetPathParams };
var GetTileV2LocationsTilesZXYPbfGetQueryParams = /** @class */ (function (_super) {
    __extends(GetTileV2LocationsTilesZXYPbfGetQueryParams, _super);
    function GetTileV2LocationsTilesZXYPbfGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isAnalysis" }),
        __metadata("design:type", Boolean)
    ], GetTileV2LocationsTilesZXYPbfGetQueryParams.prototype, "isAnalysis", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isMobile" }),
        __metadata("design:type", Boolean)
    ], GetTileV2LocationsTilesZXYPbfGetQueryParams.prototype, "isMobile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lastUpdatedFrom" }),
        __metadata("design:type", Object)
    ], GetTileV2LocationsTilesZXYPbfGetQueryParams.prototype, "lastUpdatedFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lastUpdatedTo" }),
        __metadata("design:type", Object)
    ], GetTileV2LocationsTilesZXYPbfGetQueryParams.prototype, "lastUpdatedTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=location" }),
        __metadata("design:type", Array)
    ], GetTileV2LocationsTilesZXYPbfGetQueryParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameter" }),
        __metadata("design:type", Object)
    ], GetTileV2LocationsTilesZXYPbfGetQueryParams.prototype, "parameter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=project" }),
        __metadata("design:type", Number)
    ], GetTileV2LocationsTilesZXYPbfGetQueryParams.prototype, "project", void 0);
    return GetTileV2LocationsTilesZXYPbfGetQueryParams;
}(SpeakeasyBase));
export { GetTileV2LocationsTilesZXYPbfGetQueryParams };
var GetTileV2LocationsTilesZXYPbfGetRequest = /** @class */ (function (_super) {
    __extends(GetTileV2LocationsTilesZXYPbfGetRequest, _super);
    function GetTileV2LocationsTilesZXYPbfGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTileV2LocationsTilesZXYPbfGetPathParams)
    ], GetTileV2LocationsTilesZXYPbfGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTileV2LocationsTilesZXYPbfGetQueryParams)
    ], GetTileV2LocationsTilesZXYPbfGetRequest.prototype, "queryParams", void 0);
    return GetTileV2LocationsTilesZXYPbfGetRequest;
}(SpeakeasyBase));
export { GetTileV2LocationsTilesZXYPbfGetRequest };
var GetTileV2LocationsTilesZXYPbfGetResponse = /** @class */ (function (_super) {
    __extends(GetTileV2LocationsTilesZXYPbfGetResponse, _super);
    function GetTileV2LocationsTilesZXYPbfGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTileV2LocationsTilesZXYPbfGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.HttpValidationError)
    ], GetTileV2LocationsTilesZXYPbfGetResponse.prototype, "httpValidationError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTileV2LocationsTilesZXYPbfGetResponse.prototype, "statusCode", void 0);
    return GetTileV2LocationsTilesZXYPbfGetResponse;
}(SpeakeasyBase));
export { GetTileV2LocationsTilesZXYPbfGetResponse };
