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
var GetInstancesIdFramesFrameImageInt16PathParams = /** @class */ (function (_super) {
    __extends(GetInstancesIdFramesFrameImageInt16PathParams, _super);
    function GetInstancesIdFramesFrameImageInt16PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=frame" }),
        __metadata("design:type", Number)
    ], GetInstancesIdFramesFrameImageInt16PathParams.prototype, "frame", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetInstancesIdFramesFrameImageInt16PathParams.prototype, "id", void 0);
    return GetInstancesIdFramesFrameImageInt16PathParams;
}(SpeakeasyBase));
export { GetInstancesIdFramesFrameImageInt16PathParams };
var GetInstancesIdFramesFrameImageInt16QueryParams = /** @class */ (function (_super) {
    __extends(GetInstancesIdFramesFrameImageInt16QueryParams, _super);
    function GetInstancesIdFramesFrameImageInt16QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quality" }),
        __metadata("design:type", Number)
    ], GetInstancesIdFramesFrameImageInt16QueryParams.prototype, "quality", void 0);
    return GetInstancesIdFramesFrameImageInt16QueryParams;
}(SpeakeasyBase));
export { GetInstancesIdFramesFrameImageInt16QueryParams };
var GetInstancesIdFramesFrameImageInt16Headers = /** @class */ (function (_super) {
    __extends(GetInstancesIdFramesFrameImageInt16Headers, _super);
    function GetInstancesIdFramesFrameImageInt16Headers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" }),
        __metadata("design:type", String)
    ], GetInstancesIdFramesFrameImageInt16Headers.prototype, "accept", void 0);
    return GetInstancesIdFramesFrameImageInt16Headers;
}(SpeakeasyBase));
export { GetInstancesIdFramesFrameImageInt16Headers };
var GetInstancesIdFramesFrameImageInt16Request = /** @class */ (function (_super) {
    __extends(GetInstancesIdFramesFrameImageInt16Request, _super);
    function GetInstancesIdFramesFrameImageInt16Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInstancesIdFramesFrameImageInt16PathParams)
    ], GetInstancesIdFramesFrameImageInt16Request.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInstancesIdFramesFrameImageInt16QueryParams)
    ], GetInstancesIdFramesFrameImageInt16Request.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInstancesIdFramesFrameImageInt16Headers)
    ], GetInstancesIdFramesFrameImageInt16Request.prototype, "headers", void 0);
    return GetInstancesIdFramesFrameImageInt16Request;
}(SpeakeasyBase));
export { GetInstancesIdFramesFrameImageInt16Request };
var GetInstancesIdFramesFrameImageInt16Response = /** @class */ (function (_super) {
    __extends(GetInstancesIdFramesFrameImageInt16Response, _super);
    function GetInstancesIdFramesFrameImageInt16Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetInstancesIdFramesFrameImageInt16Response.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetInstancesIdFramesFrameImageInt16Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetInstancesIdFramesFrameImageInt16Response.prototype, "statusCode", void 0);
    return GetInstancesIdFramesFrameImageInt16Response;
}(SpeakeasyBase));
export { GetInstancesIdFramesFrameImageInt16Response };
