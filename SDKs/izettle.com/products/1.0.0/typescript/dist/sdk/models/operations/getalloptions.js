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
var GetAllOptionsPathParams = /** @class */ (function (_super) {
    __extends(GetAllOptionsPathParams, _super);
    function GetAllOptionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationUuid" }),
        __metadata("design:type", String)
    ], GetAllOptionsPathParams.prototype, "organizationUuid", void 0);
    return GetAllOptionsPathParams;
}(SpeakeasyBase));
export { GetAllOptionsPathParams };
var GetAllOptionsSecurity = /** @class */ (function (_super) {
    __extends(GetAllOptionsSecurity, _super);
    function GetAllOptionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeZettleApiKey)
    ], GetAllOptionsSecurity.prototype, "zettleApiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeZettleOauth)
    ], GetAllOptionsSecurity.prototype, "zettleOauth", void 0);
    return GetAllOptionsSecurity;
}(SpeakeasyBase));
export { GetAllOptionsSecurity };
var GetAllOptionsRequest = /** @class */ (function (_super) {
    __extends(GetAllOptionsRequest, _super);
    function GetAllOptionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAllOptionsPathParams)
    ], GetAllOptionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAllOptionsSecurity)
    ], GetAllOptionsRequest.prototype, "security", void 0);
    return GetAllOptionsRequest;
}(SpeakeasyBase));
export { GetAllOptionsRequest };
var GetAllOptionsResponse = /** @class */ (function (_super) {
    __extends(GetAllOptionsResponse, _super);
    function GetAllOptionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAllOptionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAllOptionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.VariantOptionsResponse }),
        __metadata("design:type", Array)
    ], GetAllOptionsResponse.prototype, "variantOptionsResponses", void 0);
    return GetAllOptionsResponse;
}(SpeakeasyBase));
export { GetAllOptionsResponse };
