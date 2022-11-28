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
var GetInstancesIdFramesFrameRenderedPathParams = /** @class */ (function (_super) {
    __extends(GetInstancesIdFramesFrameRenderedPathParams, _super);
    function GetInstancesIdFramesFrameRenderedPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=frame" }),
        __metadata("design:type", Number)
    ], GetInstancesIdFramesFrameRenderedPathParams.prototype, "frame", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetInstancesIdFramesFrameRenderedPathParams.prototype, "id", void 0);
    return GetInstancesIdFramesFrameRenderedPathParams;
}(SpeakeasyBase));
export { GetInstancesIdFramesFrameRenderedPathParams };
var GetInstancesIdFramesFrameRenderedQueryParams = /** @class */ (function (_super) {
    __extends(GetInstancesIdFramesFrameRenderedQueryParams, _super);
    function GetInstancesIdFramesFrameRenderedQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=height" }),
        __metadata("design:type", Number)
    ], GetInstancesIdFramesFrameRenderedQueryParams.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quality" }),
        __metadata("design:type", Number)
    ], GetInstancesIdFramesFrameRenderedQueryParams.prototype, "quality", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=smooth" }),
        __metadata("design:type", Boolean)
    ], GetInstancesIdFramesFrameRenderedQueryParams.prototype, "smooth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=width" }),
        __metadata("design:type", Number)
    ], GetInstancesIdFramesFrameRenderedQueryParams.prototype, "width", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=window-center" }),
        __metadata("design:type", Number)
    ], GetInstancesIdFramesFrameRenderedQueryParams.prototype, "windowCenter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=window-width" }),
        __metadata("design:type", Number)
    ], GetInstancesIdFramesFrameRenderedQueryParams.prototype, "windowWidth", void 0);
    return GetInstancesIdFramesFrameRenderedQueryParams;
}(SpeakeasyBase));
export { GetInstancesIdFramesFrameRenderedQueryParams };
var GetInstancesIdFramesFrameRenderedHeaders = /** @class */ (function (_super) {
    __extends(GetInstancesIdFramesFrameRenderedHeaders, _super);
    function GetInstancesIdFramesFrameRenderedHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" }),
        __metadata("design:type", String)
    ], GetInstancesIdFramesFrameRenderedHeaders.prototype, "accept", void 0);
    return GetInstancesIdFramesFrameRenderedHeaders;
}(SpeakeasyBase));
export { GetInstancesIdFramesFrameRenderedHeaders };
var GetInstancesIdFramesFrameRenderedRequest = /** @class */ (function (_super) {
    __extends(GetInstancesIdFramesFrameRenderedRequest, _super);
    function GetInstancesIdFramesFrameRenderedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInstancesIdFramesFrameRenderedPathParams)
    ], GetInstancesIdFramesFrameRenderedRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInstancesIdFramesFrameRenderedQueryParams)
    ], GetInstancesIdFramesFrameRenderedRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInstancesIdFramesFrameRenderedHeaders)
    ], GetInstancesIdFramesFrameRenderedRequest.prototype, "headers", void 0);
    return GetInstancesIdFramesFrameRenderedRequest;
}(SpeakeasyBase));
export { GetInstancesIdFramesFrameRenderedRequest };
var GetInstancesIdFramesFrameRenderedResponse = /** @class */ (function (_super) {
    __extends(GetInstancesIdFramesFrameRenderedResponse, _super);
    function GetInstancesIdFramesFrameRenderedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetInstancesIdFramesFrameRenderedResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetInstancesIdFramesFrameRenderedResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetInstancesIdFramesFrameRenderedResponse.prototype, "statusCode", void 0);
    return GetInstancesIdFramesFrameRenderedResponse;
}(SpeakeasyBase));
export { GetInstancesIdFramesFrameRenderedResponse };
