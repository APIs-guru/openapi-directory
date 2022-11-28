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
var GetClientThumbnailPathParams = /** @class */ (function (_super) {
    __extends(GetClientThumbnailPathParams, _super);
    function GetClientThumbnailPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clientId" }),
        __metadata("design:type", String)
    ], GetClientThumbnailPathParams.prototype, "clientId", void 0);
    return GetClientThumbnailPathParams;
}(SpeakeasyBase));
export { GetClientThumbnailPathParams };
var GetClientThumbnailDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetClientThumbnailDefaultApplicationJson, _super);
    function GetClientThumbnailDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetClientThumbnailDefaultApplicationJson.prototype, "errors", void 0);
    return GetClientThumbnailDefaultApplicationJson;
}(SpeakeasyBase));
export { GetClientThumbnailDefaultApplicationJson };
var GetClientThumbnailRequest = /** @class */ (function (_super) {
    __extends(GetClientThumbnailRequest, _super);
    function GetClientThumbnailRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetClientThumbnailPathParams)
    ], GetClientThumbnailRequest.prototype, "pathParams", void 0);
    return GetClientThumbnailRequest;
}(SpeakeasyBase));
export { GetClientThumbnailRequest };
var GetClientThumbnailResponse = /** @class */ (function (_super) {
    __extends(GetClientThumbnailResponse, _super);
    function GetClientThumbnailResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetClientThumbnailResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetClientThumbnailResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetClientThumbnailResponse.prototype, "getClientThumbnail200ImagePngBinaryString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetClientThumbnailDefaultApplicationJson)
    ], GetClientThumbnailResponse.prototype, "getClientThumbnailDefaultApplicationJsonObject", void 0);
    return GetClientThumbnailResponse;
}(SpeakeasyBase));
export { GetClientThumbnailResponse };
