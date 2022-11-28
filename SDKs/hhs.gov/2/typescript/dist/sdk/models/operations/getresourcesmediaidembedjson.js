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
var GetResourcesMediaIdEmbedJsonPathParams = /** @class */ (function (_super) {
    __extends(GetResourcesMediaIdEmbedJsonPathParams, _super);
    function GetResourcesMediaIdEmbedJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetResourcesMediaIdEmbedJsonPathParams.prototype, "id", void 0);
    return GetResourcesMediaIdEmbedJsonPathParams;
}(SpeakeasyBase));
export { GetResourcesMediaIdEmbedJsonPathParams };
var GetResourcesMediaIdEmbedJsonQueryParams = /** @class */ (function (_super) {
    __extends(GetResourcesMediaIdEmbedJsonQueryParams, _super);
    function GetResourcesMediaIdEmbedJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=displayMethod" }),
        __metadata("design:type", String)
    ], GetResourcesMediaIdEmbedJsonQueryParams.prototype, "displayMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=divId" }),
        __metadata("design:type", String)
    ], GetResourcesMediaIdEmbedJsonQueryParams.prototype, "divId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=excludeDiv" }),
        __metadata("design:type", Boolean)
    ], GetResourcesMediaIdEmbedJsonQueryParams.prototype, "excludeDiv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=excludeJquery" }),
        __metadata("design:type", Boolean)
    ], GetResourcesMediaIdEmbedJsonQueryParams.prototype, "excludeJquery", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=flavor" }),
        __metadata("design:type", String)
    ], GetResourcesMediaIdEmbedJsonQueryParams.prototype, "flavor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=height" }),
        __metadata("design:type", Number)
    ], GetResourcesMediaIdEmbedJsonQueryParams.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=iframeName" }),
        __metadata("design:type", String)
    ], GetResourcesMediaIdEmbedJsonQueryParams.prototype, "iframeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=width" }),
        __metadata("design:type", Number)
    ], GetResourcesMediaIdEmbedJsonQueryParams.prototype, "width", void 0);
    return GetResourcesMediaIdEmbedJsonQueryParams;
}(SpeakeasyBase));
export { GetResourcesMediaIdEmbedJsonQueryParams };
var GetResourcesMediaIdEmbedJsonRequest = /** @class */ (function (_super) {
    __extends(GetResourcesMediaIdEmbedJsonRequest, _super);
    function GetResourcesMediaIdEmbedJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetResourcesMediaIdEmbedJsonPathParams)
    ], GetResourcesMediaIdEmbedJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetResourcesMediaIdEmbedJsonQueryParams)
    ], GetResourcesMediaIdEmbedJsonRequest.prototype, "queryParams", void 0);
    return GetResourcesMediaIdEmbedJsonRequest;
}(SpeakeasyBase));
export { GetResourcesMediaIdEmbedJsonRequest };
var GetResourcesMediaIdEmbedJsonResponse = /** @class */ (function (_super) {
    __extends(GetResourcesMediaIdEmbedJsonResponse, _super);
    function GetResourcesMediaIdEmbedJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetResourcesMediaIdEmbedJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetResourcesMediaIdEmbedJsonResponse.prototype, "getResourcesMediaIdEmbedJson200ApplicationJsonString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetResourcesMediaIdEmbedJsonResponse.prototype, "statusCode", void 0);
    return GetResourcesMediaIdEmbedJsonResponse;
}(SpeakeasyBase));
export { GetResourcesMediaIdEmbedJsonResponse };
