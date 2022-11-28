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
var GetInstancesIdRenderedPathParams = /** @class */ (function (_super) {
    __extends(GetInstancesIdRenderedPathParams, _super);
    function GetInstancesIdRenderedPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetInstancesIdRenderedPathParams.prototype, "id", void 0);
    return GetInstancesIdRenderedPathParams;
}(SpeakeasyBase));
export { GetInstancesIdRenderedPathParams };
var GetInstancesIdRenderedQueryParams = /** @class */ (function (_super) {
    __extends(GetInstancesIdRenderedQueryParams, _super);
    function GetInstancesIdRenderedQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=height" }),
        __metadata("design:type", Number)
    ], GetInstancesIdRenderedQueryParams.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quality" }),
        __metadata("design:type", Number)
    ], GetInstancesIdRenderedQueryParams.prototype, "quality", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=smooth" }),
        __metadata("design:type", Boolean)
    ], GetInstancesIdRenderedQueryParams.prototype, "smooth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=width" }),
        __metadata("design:type", Number)
    ], GetInstancesIdRenderedQueryParams.prototype, "width", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=window-center" }),
        __metadata("design:type", Number)
    ], GetInstancesIdRenderedQueryParams.prototype, "windowCenter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=window-width" }),
        __metadata("design:type", Number)
    ], GetInstancesIdRenderedQueryParams.prototype, "windowWidth", void 0);
    return GetInstancesIdRenderedQueryParams;
}(SpeakeasyBase));
export { GetInstancesIdRenderedQueryParams };
var GetInstancesIdRenderedHeaders = /** @class */ (function (_super) {
    __extends(GetInstancesIdRenderedHeaders, _super);
    function GetInstancesIdRenderedHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" }),
        __metadata("design:type", String)
    ], GetInstancesIdRenderedHeaders.prototype, "accept", void 0);
    return GetInstancesIdRenderedHeaders;
}(SpeakeasyBase));
export { GetInstancesIdRenderedHeaders };
var GetInstancesIdRenderedRequest = /** @class */ (function (_super) {
    __extends(GetInstancesIdRenderedRequest, _super);
    function GetInstancesIdRenderedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInstancesIdRenderedPathParams)
    ], GetInstancesIdRenderedRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInstancesIdRenderedQueryParams)
    ], GetInstancesIdRenderedRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInstancesIdRenderedHeaders)
    ], GetInstancesIdRenderedRequest.prototype, "headers", void 0);
    return GetInstancesIdRenderedRequest;
}(SpeakeasyBase));
export { GetInstancesIdRenderedRequest };
var GetInstancesIdRenderedResponse = /** @class */ (function (_super) {
    __extends(GetInstancesIdRenderedResponse, _super);
    function GetInstancesIdRenderedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetInstancesIdRenderedResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetInstancesIdRenderedResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetInstancesIdRenderedResponse.prototype, "statusCode", void 0);
    return GetInstancesIdRenderedResponse;
}(SpeakeasyBase));
export { GetInstancesIdRenderedResponse };
