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
var ParseNameGeoPathParams = /** @class */ (function (_super) {
    __extends(ParseNameGeoPathParams, _super);
    function ParseNameGeoPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=countryIso2" }),
        __metadata("design:type", String)
    ], ParseNameGeoPathParams.prototype, "countryIso2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nameFull" }),
        __metadata("design:type", String)
    ], ParseNameGeoPathParams.prototype, "nameFull", void 0);
    return ParseNameGeoPathParams;
}(SpeakeasyBase));
export { ParseNameGeoPathParams };
var ParseNameGeoSecurity = /** @class */ (function (_super) {
    __extends(ParseNameGeoSecurity, _super);
    function ParseNameGeoSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], ParseNameGeoSecurity.prototype, "apiKey", void 0);
    return ParseNameGeoSecurity;
}(SpeakeasyBase));
export { ParseNameGeoSecurity };
var ParseNameGeoRequest = /** @class */ (function (_super) {
    __extends(ParseNameGeoRequest, _super);
    function ParseNameGeoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ParseNameGeoPathParams)
    ], ParseNameGeoRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ParseNameGeoSecurity)
    ], ParseNameGeoRequest.prototype, "security", void 0);
    return ParseNameGeoRequest;
}(SpeakeasyBase));
export { ParseNameGeoRequest };
var ParseNameGeoResponse = /** @class */ (function (_super) {
    __extends(ParseNameGeoResponse, _super);
    function ParseNameGeoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ParseNameGeoResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PersonalNameParsedOut)
    ], ParseNameGeoResponse.prototype, "personalNameParsedOut", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ParseNameGeoResponse.prototype, "statusCode", void 0);
    return ParseNameGeoResponse;
}(SpeakeasyBase));
export { ParseNameGeoResponse };
