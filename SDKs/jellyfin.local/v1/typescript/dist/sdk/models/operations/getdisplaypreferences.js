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
var GetDisplayPreferencesPathParams = /** @class */ (function (_super) {
    __extends(GetDisplayPreferencesPathParams, _super);
    function GetDisplayPreferencesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=displayPreferencesId" }),
        __metadata("design:type", String)
    ], GetDisplayPreferencesPathParams.prototype, "displayPreferencesId", void 0);
    return GetDisplayPreferencesPathParams;
}(SpeakeasyBase));
export { GetDisplayPreferencesPathParams };
var GetDisplayPreferencesQueryParams = /** @class */ (function (_super) {
    __extends(GetDisplayPreferencesQueryParams, _super);
    function GetDisplayPreferencesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=client" }),
        __metadata("design:type", String)
    ], GetDisplayPreferencesQueryParams.prototype, "client", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" }),
        __metadata("design:type", String)
    ], GetDisplayPreferencesQueryParams.prototype, "userId", void 0);
    return GetDisplayPreferencesQueryParams;
}(SpeakeasyBase));
export { GetDisplayPreferencesQueryParams };
var GetDisplayPreferencesSecurity = /** @class */ (function (_super) {
    __extends(GetDisplayPreferencesSecurity, _super);
    function GetDisplayPreferencesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], GetDisplayPreferencesSecurity.prototype, "customAuthentication", void 0);
    return GetDisplayPreferencesSecurity;
}(SpeakeasyBase));
export { GetDisplayPreferencesSecurity };
var GetDisplayPreferencesRequest = /** @class */ (function (_super) {
    __extends(GetDisplayPreferencesRequest, _super);
    function GetDisplayPreferencesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDisplayPreferencesPathParams)
    ], GetDisplayPreferencesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDisplayPreferencesQueryParams)
    ], GetDisplayPreferencesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDisplayPreferencesSecurity)
    ], GetDisplayPreferencesRequest.prototype, "security", void 0);
    return GetDisplayPreferencesRequest;
}(SpeakeasyBase));
export { GetDisplayPreferencesRequest };
var GetDisplayPreferencesResponse = /** @class */ (function (_super) {
    __extends(GetDisplayPreferencesResponse, _super);
    function GetDisplayPreferencesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDisplayPreferencesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DisplayPreferencesDto)
    ], GetDisplayPreferencesResponse.prototype, "displayPreferencesDto", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDisplayPreferencesResponse.prototype, "statusCode", void 0);
    return GetDisplayPreferencesResponse;
}(SpeakeasyBase));
export { GetDisplayPreferencesResponse };
