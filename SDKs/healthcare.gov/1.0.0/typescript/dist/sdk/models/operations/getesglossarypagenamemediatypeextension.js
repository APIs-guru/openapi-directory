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
export var GetEsGlossaryPageNameMediaTypeExtensionMediaTypeExtensionEnum;
(function (GetEsGlossaryPageNameMediaTypeExtensionMediaTypeExtensionEnum) {
    GetEsGlossaryPageNameMediaTypeExtensionMediaTypeExtensionEnum["DotJson"] = ".json";
})(GetEsGlossaryPageNameMediaTypeExtensionMediaTypeExtensionEnum || (GetEsGlossaryPageNameMediaTypeExtensionMediaTypeExtensionEnum = {}));
var GetEsGlossaryPageNameMediaTypeExtensionPathParams = /** @class */ (function (_super) {
    __extends(GetEsGlossaryPageNameMediaTypeExtensionPathParams, _super);
    function GetEsGlossaryPageNameMediaTypeExtensionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mediaTypeExtension" }),
        __metadata("design:type", String)
    ], GetEsGlossaryPageNameMediaTypeExtensionPathParams.prototype, "mediaTypeExtension", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pageName" }),
        __metadata("design:type", String)
    ], GetEsGlossaryPageNameMediaTypeExtensionPathParams.prototype, "pageName", void 0);
    return GetEsGlossaryPageNameMediaTypeExtensionPathParams;
}(SpeakeasyBase));
export { GetEsGlossaryPageNameMediaTypeExtensionPathParams };
var GetEsGlossaryPageNameMediaTypeExtensionRequest = /** @class */ (function (_super) {
    __extends(GetEsGlossaryPageNameMediaTypeExtensionRequest, _super);
    function GetEsGlossaryPageNameMediaTypeExtensionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEsGlossaryPageNameMediaTypeExtensionPathParams)
    ], GetEsGlossaryPageNameMediaTypeExtensionRequest.prototype, "pathParams", void 0);
    return GetEsGlossaryPageNameMediaTypeExtensionRequest;
}(SpeakeasyBase));
export { GetEsGlossaryPageNameMediaTypeExtensionRequest };
var GetEsGlossaryPageNameMediaTypeExtensionResponse = /** @class */ (function (_super) {
    __extends(GetEsGlossaryPageNameMediaTypeExtensionResponse, _super);
    function GetEsGlossaryPageNameMediaTypeExtensionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetEsGlossaryPageNameMediaTypeExtensionResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetEsGlossaryPageNameMediaTypeExtensionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetEsGlossaryPageNameMediaTypeExtensionResponse.prototype, "statusCode", void 0);
    return GetEsGlossaryPageNameMediaTypeExtensionResponse;
}(SpeakeasyBase));
export { GetEsGlossaryPageNameMediaTypeExtensionResponse };
