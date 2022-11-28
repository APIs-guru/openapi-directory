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
var CorridorPathParams = /** @class */ (function (_super) {
    __extends(CorridorPathParams, _super);
    function CorridorPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=countryIso2From" }),
        __metadata("design:type", String)
    ], CorridorPathParams.prototype, "countryIso2From", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=countryIso2To" }),
        __metadata("design:type", String)
    ], CorridorPathParams.prototype, "countryIso2To", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=firstNameFrom" }),
        __metadata("design:type", String)
    ], CorridorPathParams.prototype, "firstNameFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=firstNameTo" }),
        __metadata("design:type", String)
    ], CorridorPathParams.prototype, "firstNameTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=lastNameFrom" }),
        __metadata("design:type", String)
    ], CorridorPathParams.prototype, "lastNameFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=lastNameTo" }),
        __metadata("design:type", String)
    ], CorridorPathParams.prototype, "lastNameTo", void 0);
    return CorridorPathParams;
}(SpeakeasyBase));
export { CorridorPathParams };
var CorridorSecurity = /** @class */ (function (_super) {
    __extends(CorridorSecurity, _super);
    function CorridorSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], CorridorSecurity.prototype, "apiKey", void 0);
    return CorridorSecurity;
}(SpeakeasyBase));
export { CorridorSecurity };
var CorridorRequest = /** @class */ (function (_super) {
    __extends(CorridorRequest, _super);
    function CorridorRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CorridorPathParams)
    ], CorridorRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CorridorSecurity)
    ], CorridorRequest.prototype, "security", void 0);
    return CorridorRequest;
}(SpeakeasyBase));
export { CorridorRequest };
var CorridorResponse = /** @class */ (function (_super) {
    __extends(CorridorResponse, _super);
    function CorridorResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CorridorResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CorridorOut)
    ], CorridorResponse.prototype, "corridorOut", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CorridorResponse.prototype, "statusCode", void 0);
    return CorridorResponse;
}(SpeakeasyBase));
export { CorridorResponse };
