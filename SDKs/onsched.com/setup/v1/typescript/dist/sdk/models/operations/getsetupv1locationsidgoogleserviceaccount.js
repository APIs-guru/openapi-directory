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
var GetSetupV1LocationsIdGoogleServiceAccountPathParams = /** @class */ (function (_super) {
    __extends(GetSetupV1LocationsIdGoogleServiceAccountPathParams, _super);
    function GetSetupV1LocationsIdGoogleServiceAccountPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetSetupV1LocationsIdGoogleServiceAccountPathParams.prototype, "id", void 0);
    return GetSetupV1LocationsIdGoogleServiceAccountPathParams;
}(SpeakeasyBase));
export { GetSetupV1LocationsIdGoogleServiceAccountPathParams };
var GetSetupV1LocationsIdGoogleServiceAccountRequest = /** @class */ (function (_super) {
    __extends(GetSetupV1LocationsIdGoogleServiceAccountRequest, _super);
    function GetSetupV1LocationsIdGoogleServiceAccountRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSetupV1LocationsIdGoogleServiceAccountPathParams)
    ], GetSetupV1LocationsIdGoogleServiceAccountRequest.prototype, "pathParams", void 0);
    return GetSetupV1LocationsIdGoogleServiceAccountRequest;
}(SpeakeasyBase));
export { GetSetupV1LocationsIdGoogleServiceAccountRequest };
var GetSetupV1LocationsIdGoogleServiceAccountResponse = /** @class */ (function (_super) {
    __extends(GetSetupV1LocationsIdGoogleServiceAccountResponse, _super);
    function GetSetupV1LocationsIdGoogleServiceAccountResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSetupV1LocationsIdGoogleServiceAccountResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleServiceAccountCreds)
    ], GetSetupV1LocationsIdGoogleServiceAccountResponse.prototype, "googleServiceAccountCreds", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSetupV1LocationsIdGoogleServiceAccountResponse.prototype, "statusCode", void 0);
    return GetSetupV1LocationsIdGoogleServiceAccountResponse;
}(SpeakeasyBase));
export { GetSetupV1LocationsIdGoogleServiceAccountResponse };
