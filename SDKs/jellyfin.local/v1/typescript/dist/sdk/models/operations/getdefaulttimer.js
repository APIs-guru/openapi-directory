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
var GetDefaultTimerQueryParams = /** @class */ (function (_super) {
    __extends(GetDefaultTimerQueryParams, _super);
    function GetDefaultTimerQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=programId" }),
        __metadata("design:type", String)
    ], GetDefaultTimerQueryParams.prototype, "programId", void 0);
    return GetDefaultTimerQueryParams;
}(SpeakeasyBase));
export { GetDefaultTimerQueryParams };
var GetDefaultTimerSecurity = /** @class */ (function (_super) {
    __extends(GetDefaultTimerSecurity, _super);
    function GetDefaultTimerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], GetDefaultTimerSecurity.prototype, "customAuthentication", void 0);
    return GetDefaultTimerSecurity;
}(SpeakeasyBase));
export { GetDefaultTimerSecurity };
var GetDefaultTimerRequest = /** @class */ (function (_super) {
    __extends(GetDefaultTimerRequest, _super);
    function GetDefaultTimerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDefaultTimerQueryParams)
    ], GetDefaultTimerRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDefaultTimerSecurity)
    ], GetDefaultTimerRequest.prototype, "security", void 0);
    return GetDefaultTimerRequest;
}(SpeakeasyBase));
export { GetDefaultTimerRequest };
var GetDefaultTimerResponse = /** @class */ (function (_super) {
    __extends(GetDefaultTimerResponse, _super);
    function GetDefaultTimerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDefaultTimerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SeriesTimerInfoDto)
    ], GetDefaultTimerResponse.prototype, "seriesTimerInfoDto", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDefaultTimerResponse.prototype, "statusCode", void 0);
    return GetDefaultTimerResponse;
}(SpeakeasyBase));
export { GetDefaultTimerResponse };
