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
var GenderFullGeoPathParams = /** @class */ (function (_super) {
    __extends(GenderFullGeoPathParams, _super);
    function GenderFullGeoPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=countryIso2" }),
        __metadata("design:type", String)
    ], GenderFullGeoPathParams.prototype, "countryIso2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fullName" }),
        __metadata("design:type", String)
    ], GenderFullGeoPathParams.prototype, "fullName", void 0);
    return GenderFullGeoPathParams;
}(SpeakeasyBase));
export { GenderFullGeoPathParams };
var GenderFullGeoSecurity = /** @class */ (function (_super) {
    __extends(GenderFullGeoSecurity, _super);
    function GenderFullGeoSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GenderFullGeoSecurity.prototype, "apiKey", void 0);
    return GenderFullGeoSecurity;
}(SpeakeasyBase));
export { GenderFullGeoSecurity };
var GenderFullGeoRequest = /** @class */ (function (_super) {
    __extends(GenderFullGeoRequest, _super);
    function GenderFullGeoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GenderFullGeoPathParams)
    ], GenderFullGeoRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GenderFullGeoSecurity)
    ], GenderFullGeoRequest.prototype, "security", void 0);
    return GenderFullGeoRequest;
}(SpeakeasyBase));
export { GenderFullGeoRequest };
var GenderFullGeoResponse = /** @class */ (function (_super) {
    __extends(GenderFullGeoResponse, _super);
    function GenderFullGeoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GenderFullGeoResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PersonalNameGenderedOut)
    ], GenderFullGeoResponse.prototype, "personalNameGenderedOut", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GenderFullGeoResponse.prototype, "statusCode", void 0);
    return GenderFullGeoResponse;
}(SpeakeasyBase));
export { GenderFullGeoResponse };
