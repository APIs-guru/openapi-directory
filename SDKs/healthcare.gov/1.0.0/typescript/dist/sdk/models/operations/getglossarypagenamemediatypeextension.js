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
export var GetGlossaryPageNameMediaTypeExtensionMediaTypeExtensionEnum;
(function (GetGlossaryPageNameMediaTypeExtensionMediaTypeExtensionEnum) {
    GetGlossaryPageNameMediaTypeExtensionMediaTypeExtensionEnum["DotJson"] = ".json";
})(GetGlossaryPageNameMediaTypeExtensionMediaTypeExtensionEnum || (GetGlossaryPageNameMediaTypeExtensionMediaTypeExtensionEnum = {}));
var GetGlossaryPageNameMediaTypeExtensionPathParams = /** @class */ (function (_super) {
    __extends(GetGlossaryPageNameMediaTypeExtensionPathParams, _super);
    function GetGlossaryPageNameMediaTypeExtensionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=mediaTypeExtension" }),
        __metadata("design:type", String)
    ], GetGlossaryPageNameMediaTypeExtensionPathParams.prototype, "mediaTypeExtension", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=pageName" }),
        __metadata("design:type", String)
    ], GetGlossaryPageNameMediaTypeExtensionPathParams.prototype, "pageName", void 0);
    return GetGlossaryPageNameMediaTypeExtensionPathParams;
}(SpeakeasyBase));
export { GetGlossaryPageNameMediaTypeExtensionPathParams };
var GetGlossaryPageNameMediaTypeExtensionRequest = /** @class */ (function (_super) {
    __extends(GetGlossaryPageNameMediaTypeExtensionRequest, _super);
    function GetGlossaryPageNameMediaTypeExtensionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetGlossaryPageNameMediaTypeExtensionPathParams)
    ], GetGlossaryPageNameMediaTypeExtensionRequest.prototype, "pathParams", void 0);
    return GetGlossaryPageNameMediaTypeExtensionRequest;
}(SpeakeasyBase));
export { GetGlossaryPageNameMediaTypeExtensionRequest };
var GetGlossaryPageNameMediaTypeExtensionResponse = /** @class */ (function (_super) {
    __extends(GetGlossaryPageNameMediaTypeExtensionResponse, _super);
    function GetGlossaryPageNameMediaTypeExtensionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetGlossaryPageNameMediaTypeExtensionResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetGlossaryPageNameMediaTypeExtensionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetGlossaryPageNameMediaTypeExtensionResponse.prototype, "statusCode", void 0);
    return GetGlossaryPageNameMediaTypeExtensionResponse;
}(SpeakeasyBase));
export { GetGlossaryPageNameMediaTypeExtensionResponse };
