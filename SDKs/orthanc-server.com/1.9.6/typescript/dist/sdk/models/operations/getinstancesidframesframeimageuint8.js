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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
var GetInstancesIdFramesFrameImageUint8PathParams = /** @class */ (function (_super) {
    __extends(GetInstancesIdFramesFrameImageUint8PathParams, _super);
    function GetInstancesIdFramesFrameImageUint8PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=frame" }),
        __metadata("design:type", Number)
    ], GetInstancesIdFramesFrameImageUint8PathParams.prototype, "frame", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetInstancesIdFramesFrameImageUint8PathParams.prototype, "id", void 0);
    return GetInstancesIdFramesFrameImageUint8PathParams;
}(SpeakeasyBase));
export { GetInstancesIdFramesFrameImageUint8PathParams };
var GetInstancesIdFramesFrameImageUint8QueryParams = /** @class */ (function (_super) {
    __extends(GetInstancesIdFramesFrameImageUint8QueryParams, _super);
    function GetInstancesIdFramesFrameImageUint8QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quality" }),
        __metadata("design:type", Number)
    ], GetInstancesIdFramesFrameImageUint8QueryParams.prototype, "quality", void 0);
    return GetInstancesIdFramesFrameImageUint8QueryParams;
}(SpeakeasyBase));
export { GetInstancesIdFramesFrameImageUint8QueryParams };
var GetInstancesIdFramesFrameImageUint8Headers = /** @class */ (function (_super) {
    __extends(GetInstancesIdFramesFrameImageUint8Headers, _super);
    function GetInstancesIdFramesFrameImageUint8Headers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Accept" }),
        __metadata("design:type", String)
    ], GetInstancesIdFramesFrameImageUint8Headers.prototype, "accept", void 0);
    return GetInstancesIdFramesFrameImageUint8Headers;
}(SpeakeasyBase));
export { GetInstancesIdFramesFrameImageUint8Headers };
var GetInstancesIdFramesFrameImageUint8Request = /** @class */ (function (_super) {
    __extends(GetInstancesIdFramesFrameImageUint8Request, _super);
    function GetInstancesIdFramesFrameImageUint8Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetInstancesIdFramesFrameImageUint8PathParams)
    ], GetInstancesIdFramesFrameImageUint8Request.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetInstancesIdFramesFrameImageUint8QueryParams)
    ], GetInstancesIdFramesFrameImageUint8Request.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetInstancesIdFramesFrameImageUint8Headers)
    ], GetInstancesIdFramesFrameImageUint8Request.prototype, "headers", void 0);
    return GetInstancesIdFramesFrameImageUint8Request;
}(SpeakeasyBase));
export { GetInstancesIdFramesFrameImageUint8Request };
var GetInstancesIdFramesFrameImageUint8Response = /** @class */ (function (_super) {
    __extends(GetInstancesIdFramesFrameImageUint8Response, _super);
    function GetInstancesIdFramesFrameImageUint8Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetInstancesIdFramesFrameImageUint8Response.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetInstancesIdFramesFrameImageUint8Response.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetInstancesIdFramesFrameImageUint8Response.prototype, "statusCode", void 0);
    return GetInstancesIdFramesFrameImageUint8Response;
}(SpeakeasyBase));
export { GetInstancesIdFramesFrameImageUint8Response };
