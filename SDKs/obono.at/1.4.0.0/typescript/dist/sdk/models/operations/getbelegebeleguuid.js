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
var GetBelegeBelegUuidPathParams = /** @class */ (function (_super) {
    __extends(GetBelegeBelegUuidPathParams, _super);
    function GetBelegeBelegUuidPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=belegUuid" }),
        __metadata("design:type", String)
    ], GetBelegeBelegUuidPathParams.prototype, "belegUuid", void 0);
    return GetBelegeBelegUuidPathParams;
}(SpeakeasyBase));
export { GetBelegeBelegUuidPathParams };
var GetBelegeBelegUuidRequest = /** @class */ (function (_super) {
    __extends(GetBelegeBelegUuidRequest, _super);
    function GetBelegeBelegUuidRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBelegeBelegUuidPathParams)
    ], GetBelegeBelegUuidRequest.prototype, "pathParams", void 0);
    return GetBelegeBelegUuidRequest;
}(SpeakeasyBase));
export { GetBelegeBelegUuidRequest };
var GetBelegeBelegUuidResponse = /** @class */ (function (_super) {
    __extends(GetBelegeBelegUuidResponse, _super);
    function GetBelegeBelegUuidResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Beleg)
    ], GetBelegeBelegUuidResponse.prototype, "beleg", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetBelegeBelegUuidResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetBelegeBelegUuidResponse.prototype, "statusCode", void 0);
    return GetBelegeBelegUuidResponse;
}(SpeakeasyBase));
export { GetBelegeBelegUuidResponse };
