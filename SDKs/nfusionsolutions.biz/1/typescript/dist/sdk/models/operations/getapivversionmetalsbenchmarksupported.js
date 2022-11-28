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
import * as shared from "../shared";
var GetApiVVersionMetalsBenchmarkSupportedPathParams = /** @class */ (function (_super) {
    __extends(GetApiVVersionMetalsBenchmarkSupportedPathParams, _super);
    function GetApiVVersionMetalsBenchmarkSupportedPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" }),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsBenchmarkSupportedPathParams.prototype, "version", void 0);
    return GetApiVVersionMetalsBenchmarkSupportedPathParams;
}(SpeakeasyBase));
export { GetApiVVersionMetalsBenchmarkSupportedPathParams };
var GetApiVVersionMetalsBenchmarkSupportedQueryParams = /** @class */ (function (_super) {
    __extends(GetApiVVersionMetalsBenchmarkSupportedQueryParams, _super);
    function GetApiVVersionMetalsBenchmarkSupportedQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsBenchmarkSupportedQueryParams.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" }),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsBenchmarkSupportedQueryParams.prototype, "token", void 0);
    return GetApiVVersionMetalsBenchmarkSupportedQueryParams;
}(SpeakeasyBase));
export { GetApiVVersionMetalsBenchmarkSupportedQueryParams };
var GetApiVVersionMetalsBenchmarkSupportedRequest = /** @class */ (function (_super) {
    __extends(GetApiVVersionMetalsBenchmarkSupportedRequest, _super);
    function GetApiVVersionMetalsBenchmarkSupportedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiVVersionMetalsBenchmarkSupportedPathParams)
    ], GetApiVVersionMetalsBenchmarkSupportedRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiVVersionMetalsBenchmarkSupportedQueryParams)
    ], GetApiVVersionMetalsBenchmarkSupportedRequest.prototype, "queryParams", void 0);
    return GetApiVVersionMetalsBenchmarkSupportedRequest;
}(SpeakeasyBase));
export { GetApiVVersionMetalsBenchmarkSupportedRequest };
var GetApiVVersionMetalsBenchmarkSupportedResponse = /** @class */ (function (_super) {
    __extends(GetApiVVersionMetalsBenchmarkSupportedResponse, _super);
    function GetApiVVersionMetalsBenchmarkSupportedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetApiVVersionMetalsBenchmarkSupportedResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsBenchmarkSupportedResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], GetApiVVersionMetalsBenchmarkSupportedResponse.prototype, "getApiVVersionMetalsBenchmarkSupported200ApplicationJsonStrings", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetApiVVersionMetalsBenchmarkSupportedResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetApiVVersionMetalsBenchmarkSupportedResponse.prototype, "statusCode", void 0);
    return GetApiVVersionMetalsBenchmarkSupportedResponse;
}(SpeakeasyBase));
export { GetApiVVersionMetalsBenchmarkSupportedResponse };
