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
var GetInstancesIdFramesFrameImageUint16PathParams = /** @class */ (function (_super) {
    __extends(GetInstancesIdFramesFrameImageUint16PathParams, _super);
    function GetInstancesIdFramesFrameImageUint16PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=frame" }),
        __metadata("design:type", Number)
    ], GetInstancesIdFramesFrameImageUint16PathParams.prototype, "frame", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetInstancesIdFramesFrameImageUint16PathParams.prototype, "id", void 0);
    return GetInstancesIdFramesFrameImageUint16PathParams;
}(SpeakeasyBase));
export { GetInstancesIdFramesFrameImageUint16PathParams };
var GetInstancesIdFramesFrameImageUint16QueryParams = /** @class */ (function (_super) {
    __extends(GetInstancesIdFramesFrameImageUint16QueryParams, _super);
    function GetInstancesIdFramesFrameImageUint16QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quality" }),
        __metadata("design:type", Number)
    ], GetInstancesIdFramesFrameImageUint16QueryParams.prototype, "quality", void 0);
    return GetInstancesIdFramesFrameImageUint16QueryParams;
}(SpeakeasyBase));
export { GetInstancesIdFramesFrameImageUint16QueryParams };
var GetInstancesIdFramesFrameImageUint16Headers = /** @class */ (function (_super) {
    __extends(GetInstancesIdFramesFrameImageUint16Headers, _super);
    function GetInstancesIdFramesFrameImageUint16Headers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" }),
        __metadata("design:type", String)
    ], GetInstancesIdFramesFrameImageUint16Headers.prototype, "accept", void 0);
    return GetInstancesIdFramesFrameImageUint16Headers;
}(SpeakeasyBase));
export { GetInstancesIdFramesFrameImageUint16Headers };
var GetInstancesIdFramesFrameImageUint16Request = /** @class */ (function (_super) {
    __extends(GetInstancesIdFramesFrameImageUint16Request, _super);
    function GetInstancesIdFramesFrameImageUint16Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInstancesIdFramesFrameImageUint16PathParams)
    ], GetInstancesIdFramesFrameImageUint16Request.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInstancesIdFramesFrameImageUint16QueryParams)
    ], GetInstancesIdFramesFrameImageUint16Request.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInstancesIdFramesFrameImageUint16Headers)
    ], GetInstancesIdFramesFrameImageUint16Request.prototype, "headers", void 0);
    return GetInstancesIdFramesFrameImageUint16Request;
}(SpeakeasyBase));
export { GetInstancesIdFramesFrameImageUint16Request };
var GetInstancesIdFramesFrameImageUint16Response = /** @class */ (function (_super) {
    __extends(GetInstancesIdFramesFrameImageUint16Response, _super);
    function GetInstancesIdFramesFrameImageUint16Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetInstancesIdFramesFrameImageUint16Response.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetInstancesIdFramesFrameImageUint16Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetInstancesIdFramesFrameImageUint16Response.prototype, "statusCode", void 0);
    return GetInstancesIdFramesFrameImageUint16Response;
}(SpeakeasyBase));
export { GetInstancesIdFramesFrameImageUint16Response };
