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
var UsRaceEthnicityPathParams = /** @class */ (function (_super) {
    __extends(UsRaceEthnicityPathParams, _super);
    function UsRaceEthnicityPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=firstName" }),
        __metadata("design:type", String)
    ], UsRaceEthnicityPathParams.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=lastName" }),
        __metadata("design:type", String)
    ], UsRaceEthnicityPathParams.prototype, "lastName", void 0);
    return UsRaceEthnicityPathParams;
}(SpeakeasyBase));
export { UsRaceEthnicityPathParams };
var UsRaceEthnicitySecurity = /** @class */ (function (_super) {
    __extends(UsRaceEthnicitySecurity, _super);
    function UsRaceEthnicitySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], UsRaceEthnicitySecurity.prototype, "apiKey", void 0);
    return UsRaceEthnicitySecurity;
}(SpeakeasyBase));
export { UsRaceEthnicitySecurity };
var UsRaceEthnicityRequest = /** @class */ (function (_super) {
    __extends(UsRaceEthnicityRequest, _super);
    function UsRaceEthnicityRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UsRaceEthnicityPathParams)
    ], UsRaceEthnicityRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UsRaceEthnicitySecurity)
    ], UsRaceEthnicityRequest.prototype, "security", void 0);
    return UsRaceEthnicityRequest;
}(SpeakeasyBase));
export { UsRaceEthnicityRequest };
var UsRaceEthnicityResponse = /** @class */ (function (_super) {
    __extends(UsRaceEthnicityResponse, _super);
    function UsRaceEthnicityResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UsRaceEthnicityResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FirstLastNameUsRaceEthnicityOut)
    ], UsRaceEthnicityResponse.prototype, "firstLastNameUsRaceEthnicityOut", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UsRaceEthnicityResponse.prototype, "statusCode", void 0);
    return UsRaceEthnicityResponse;
}(SpeakeasyBase));
export { UsRaceEthnicityResponse };
