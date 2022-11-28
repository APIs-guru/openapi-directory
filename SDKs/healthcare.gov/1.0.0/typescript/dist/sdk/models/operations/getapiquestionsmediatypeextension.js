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
export var GetApiQuestionsMediaTypeExtensionMediaTypeExtensionEnum;
(function (GetApiQuestionsMediaTypeExtensionMediaTypeExtensionEnum) {
    GetApiQuestionsMediaTypeExtensionMediaTypeExtensionEnum["DotJson"] = ".json";
})(GetApiQuestionsMediaTypeExtensionMediaTypeExtensionEnum || (GetApiQuestionsMediaTypeExtensionMediaTypeExtensionEnum = {}));
var GetApiQuestionsMediaTypeExtensionPathParams = /** @class */ (function (_super) {
    __extends(GetApiQuestionsMediaTypeExtensionPathParams, _super);
    function GetApiQuestionsMediaTypeExtensionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mediaTypeExtension" }),
        __metadata("design:type", String)
    ], GetApiQuestionsMediaTypeExtensionPathParams.prototype, "mediaTypeExtension", void 0);
    return GetApiQuestionsMediaTypeExtensionPathParams;
}(SpeakeasyBase));
export { GetApiQuestionsMediaTypeExtensionPathParams };
var GetApiQuestionsMediaTypeExtensionRequest = /** @class */ (function (_super) {
    __extends(GetApiQuestionsMediaTypeExtensionRequest, _super);
    function GetApiQuestionsMediaTypeExtensionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiQuestionsMediaTypeExtensionPathParams)
    ], GetApiQuestionsMediaTypeExtensionRequest.prototype, "pathParams", void 0);
    return GetApiQuestionsMediaTypeExtensionRequest;
}(SpeakeasyBase));
export { GetApiQuestionsMediaTypeExtensionRequest };
var GetApiQuestionsMediaTypeExtensionResponse = /** @class */ (function (_super) {
    __extends(GetApiQuestionsMediaTypeExtensionResponse, _super);
    function GetApiQuestionsMediaTypeExtensionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetApiQuestionsMediaTypeExtensionResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetApiQuestionsMediaTypeExtensionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetApiQuestionsMediaTypeExtensionResponse.prototype, "statusCode", void 0);
    return GetApiQuestionsMediaTypeExtensionResponse;
}(SpeakeasyBase));
export { GetApiQuestionsMediaTypeExtensionResponse };
