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
var GetMediaReceiverRegistrar3PathParams = /** @class */ (function (_super) {
    __extends(GetMediaReceiverRegistrar3PathParams, _super);
    function GetMediaReceiverRegistrar3PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serverId" }),
        __metadata("design:type", String)
    ], GetMediaReceiverRegistrar3PathParams.prototype, "serverId", void 0);
    return GetMediaReceiverRegistrar3PathParams;
}(SpeakeasyBase));
export { GetMediaReceiverRegistrar3PathParams };
var GetMediaReceiverRegistrar3Request = /** @class */ (function (_super) {
    __extends(GetMediaReceiverRegistrar3Request, _super);
    function GetMediaReceiverRegistrar3Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMediaReceiverRegistrar3PathParams)
    ], GetMediaReceiverRegistrar3Request.prototype, "pathParams", void 0);
    return GetMediaReceiverRegistrar3Request;
}(SpeakeasyBase));
export { GetMediaReceiverRegistrar3Request };
var GetMediaReceiverRegistrar3Response = /** @class */ (function (_super) {
    __extends(GetMediaReceiverRegistrar3Response, _super);
    function GetMediaReceiverRegistrar3Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetMediaReceiverRegistrar3Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetMediaReceiverRegistrar3Response.prototype, "getMediaReceiverRegistrar3200TextXmlBinaryString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetMediaReceiverRegistrar3Response.prototype, "statusCode", void 0);
    return GetMediaReceiverRegistrar3Response;
}(SpeakeasyBase));
export { GetMediaReceiverRegistrar3Response };
