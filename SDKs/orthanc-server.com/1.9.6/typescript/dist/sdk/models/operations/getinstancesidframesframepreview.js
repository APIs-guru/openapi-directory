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
var GetInstancesIdFramesFramePreviewPathParams = /** @class */ (function (_super) {
    __extends(GetInstancesIdFramesFramePreviewPathParams, _super);
    function GetInstancesIdFramesFramePreviewPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=frame" }),
        __metadata("design:type", Number)
    ], GetInstancesIdFramesFramePreviewPathParams.prototype, "frame", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetInstancesIdFramesFramePreviewPathParams.prototype, "id", void 0);
    return GetInstancesIdFramesFramePreviewPathParams;
}(SpeakeasyBase));
export { GetInstancesIdFramesFramePreviewPathParams };
var GetInstancesIdFramesFramePreviewQueryParams = /** @class */ (function (_super) {
    __extends(GetInstancesIdFramesFramePreviewQueryParams, _super);
    function GetInstancesIdFramesFramePreviewQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quality" }),
        __metadata("design:type", Number)
    ], GetInstancesIdFramesFramePreviewQueryParams.prototype, "quality", void 0);
    return GetInstancesIdFramesFramePreviewQueryParams;
}(SpeakeasyBase));
export { GetInstancesIdFramesFramePreviewQueryParams };
var GetInstancesIdFramesFramePreviewHeaders = /** @class */ (function (_super) {
    __extends(GetInstancesIdFramesFramePreviewHeaders, _super);
    function GetInstancesIdFramesFramePreviewHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" }),
        __metadata("design:type", String)
    ], GetInstancesIdFramesFramePreviewHeaders.prototype, "accept", void 0);
    return GetInstancesIdFramesFramePreviewHeaders;
}(SpeakeasyBase));
export { GetInstancesIdFramesFramePreviewHeaders };
var GetInstancesIdFramesFramePreviewRequest = /** @class */ (function (_super) {
    __extends(GetInstancesIdFramesFramePreviewRequest, _super);
    function GetInstancesIdFramesFramePreviewRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInstancesIdFramesFramePreviewPathParams)
    ], GetInstancesIdFramesFramePreviewRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInstancesIdFramesFramePreviewQueryParams)
    ], GetInstancesIdFramesFramePreviewRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInstancesIdFramesFramePreviewHeaders)
    ], GetInstancesIdFramesFramePreviewRequest.prototype, "headers", void 0);
    return GetInstancesIdFramesFramePreviewRequest;
}(SpeakeasyBase));
export { GetInstancesIdFramesFramePreviewRequest };
var GetInstancesIdFramesFramePreviewResponse = /** @class */ (function (_super) {
    __extends(GetInstancesIdFramesFramePreviewResponse, _super);
    function GetInstancesIdFramesFramePreviewResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetInstancesIdFramesFramePreviewResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetInstancesIdFramesFramePreviewResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetInstancesIdFramesFramePreviewResponse.prototype, "statusCode", void 0);
    return GetInstancesIdFramesFramePreviewResponse;
}(SpeakeasyBase));
export { GetInstancesIdFramesFramePreviewResponse };
