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
var GetInstancesIdFilePathParams = /** @class */ (function (_super) {
    __extends(GetInstancesIdFilePathParams, _super);
    function GetInstancesIdFilePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetInstancesIdFilePathParams.prototype, "id", void 0);
    return GetInstancesIdFilePathParams;
}(SpeakeasyBase));
export { GetInstancesIdFilePathParams };
var GetInstancesIdFileHeaders = /** @class */ (function (_super) {
    __extends(GetInstancesIdFileHeaders, _super);
    function GetInstancesIdFileHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" }),
        __metadata("design:type", String)
    ], GetInstancesIdFileHeaders.prototype, "accept", void 0);
    return GetInstancesIdFileHeaders;
}(SpeakeasyBase));
export { GetInstancesIdFileHeaders };
var GetInstancesIdFileRequest = /** @class */ (function (_super) {
    __extends(GetInstancesIdFileRequest, _super);
    function GetInstancesIdFileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInstancesIdFilePathParams)
    ], GetInstancesIdFileRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInstancesIdFileHeaders)
    ], GetInstancesIdFileRequest.prototype, "headers", void 0);
    return GetInstancesIdFileRequest;
}(SpeakeasyBase));
export { GetInstancesIdFileRequest };
var GetInstancesIdFileResponse = /** @class */ (function (_super) {
    __extends(GetInstancesIdFileResponse, _super);
    function GetInstancesIdFileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetInstancesIdFileResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetInstancesIdFileResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetInstancesIdFileResponse.prototype, "getInstancesIdFile200ApplicationDicomPlusJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetInstancesIdFileResponse.prototype, "statusCode", void 0);
    return GetInstancesIdFileResponse;
}(SpeakeasyBase));
export { GetInstancesIdFileResponse };
