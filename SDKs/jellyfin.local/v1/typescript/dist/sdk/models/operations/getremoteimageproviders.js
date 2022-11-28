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
var GetRemoteImageProvidersPathParams = /** @class */ (function (_super) {
    __extends(GetRemoteImageProvidersPathParams, _super);
    function GetRemoteImageProvidersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" }),
        __metadata("design:type", String)
    ], GetRemoteImageProvidersPathParams.prototype, "itemId", void 0);
    return GetRemoteImageProvidersPathParams;
}(SpeakeasyBase));
export { GetRemoteImageProvidersPathParams };
var GetRemoteImageProvidersSecurity = /** @class */ (function (_super) {
    __extends(GetRemoteImageProvidersSecurity, _super);
    function GetRemoteImageProvidersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], GetRemoteImageProvidersSecurity.prototype, "customAuthentication", void 0);
    return GetRemoteImageProvidersSecurity;
}(SpeakeasyBase));
export { GetRemoteImageProvidersSecurity };
var GetRemoteImageProvidersRequest = /** @class */ (function (_super) {
    __extends(GetRemoteImageProvidersRequest, _super);
    function GetRemoteImageProvidersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRemoteImageProvidersPathParams)
    ], GetRemoteImageProvidersRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRemoteImageProvidersSecurity)
    ], GetRemoteImageProvidersRequest.prototype, "security", void 0);
    return GetRemoteImageProvidersRequest;
}(SpeakeasyBase));
export { GetRemoteImageProvidersRequest };
var GetRemoteImageProvidersResponse = /** @class */ (function (_super) {
    __extends(GetRemoteImageProvidersResponse, _super);
    function GetRemoteImageProvidersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRemoteImageProvidersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.ImageProviderInfo }),
        __metadata("design:type", Array)
    ], GetRemoteImageProvidersResponse.prototype, "imageProviderInfos", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetRemoteImageProvidersResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRemoteImageProvidersResponse.prototype, "statusCode", void 0);
    return GetRemoteImageProvidersResponse;
}(SpeakeasyBase));
export { GetRemoteImageProvidersResponse };
