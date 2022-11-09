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
var GetToolsGenerateUidQueryParams = /** @class */ (function (_super) {
    __extends(GetToolsGenerateUidQueryParams, _super);
    function GetToolsGenerateUidQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=level" }),
        __metadata("design:type", String)
    ], GetToolsGenerateUidQueryParams.prototype, "level", void 0);
    return GetToolsGenerateUidQueryParams;
}(SpeakeasyBase));
export { GetToolsGenerateUidQueryParams };
var GetToolsGenerateUidRequest = /** @class */ (function (_super) {
    __extends(GetToolsGenerateUidRequest, _super);
    function GetToolsGenerateUidRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetToolsGenerateUidQueryParams)
    ], GetToolsGenerateUidRequest.prototype, "queryParams", void 0);
    return GetToolsGenerateUidRequest;
}(SpeakeasyBase));
export { GetToolsGenerateUidRequest };
var GetToolsGenerateUidResponse = /** @class */ (function (_super) {
    __extends(GetToolsGenerateUidResponse, _super);
    function GetToolsGenerateUidResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetToolsGenerateUidResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetToolsGenerateUidResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetToolsGenerateUidResponse.prototype, "statusCode", void 0);
    return GetToolsGenerateUidResponse;
}(SpeakeasyBase));
export { GetToolsGenerateUidResponse };
