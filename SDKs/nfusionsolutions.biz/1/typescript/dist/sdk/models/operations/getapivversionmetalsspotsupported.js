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
var GetApiVVersionMetalsSpotSupportedPathParams = /** @class */ (function (_super) {
    __extends(GetApiVVersionMetalsSpotSupportedPathParams, _super);
    function GetApiVVersionMetalsSpotSupportedPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" }),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsSpotSupportedPathParams.prototype, "version", void 0);
    return GetApiVVersionMetalsSpotSupportedPathParams;
}(SpeakeasyBase));
export { GetApiVVersionMetalsSpotSupportedPathParams };
var GetApiVVersionMetalsSpotSupportedQueryParams = /** @class */ (function (_super) {
    __extends(GetApiVVersionMetalsSpotSupportedQueryParams, _super);
    function GetApiVVersionMetalsSpotSupportedQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsSpotSupportedQueryParams.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" }),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsSpotSupportedQueryParams.prototype, "token", void 0);
    return GetApiVVersionMetalsSpotSupportedQueryParams;
}(SpeakeasyBase));
export { GetApiVVersionMetalsSpotSupportedQueryParams };
var GetApiVVersionMetalsSpotSupportedRequest = /** @class */ (function (_super) {
    __extends(GetApiVVersionMetalsSpotSupportedRequest, _super);
    function GetApiVVersionMetalsSpotSupportedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiVVersionMetalsSpotSupportedPathParams)
    ], GetApiVVersionMetalsSpotSupportedRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiVVersionMetalsSpotSupportedQueryParams)
    ], GetApiVVersionMetalsSpotSupportedRequest.prototype, "queryParams", void 0);
    return GetApiVVersionMetalsSpotSupportedRequest;
}(SpeakeasyBase));
export { GetApiVVersionMetalsSpotSupportedRequest };
var GetApiVVersionMetalsSpotSupportedResponse = /** @class */ (function (_super) {
    __extends(GetApiVVersionMetalsSpotSupportedResponse, _super);
    function GetApiVVersionMetalsSpotSupportedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetApiVVersionMetalsSpotSupportedResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsSpotSupportedResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], GetApiVVersionMetalsSpotSupportedResponse.prototype, "getApiVVersionMetalsSpotSupported200ApplicationJsonStrings", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetApiVVersionMetalsSpotSupportedResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetApiVVersionMetalsSpotSupportedResponse.prototype, "statusCode", void 0);
    return GetApiVVersionMetalsSpotSupportedResponse;
}(SpeakeasyBase));
export { GetApiVVersionMetalsSpotSupportedResponse };
