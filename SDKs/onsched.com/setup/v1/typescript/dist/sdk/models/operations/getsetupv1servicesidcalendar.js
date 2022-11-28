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
var GetSetupV1ServicesIdCalendarPathParams = /** @class */ (function (_super) {
    __extends(GetSetupV1ServicesIdCalendarPathParams, _super);
    function GetSetupV1ServicesIdCalendarPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetSetupV1ServicesIdCalendarPathParams.prototype, "id", void 0);
    return GetSetupV1ServicesIdCalendarPathParams;
}(SpeakeasyBase));
export { GetSetupV1ServicesIdCalendarPathParams };
var GetSetupV1ServicesIdCalendarQueryParams = /** @class */ (function (_super) {
    __extends(GetSetupV1ServicesIdCalendarQueryParams, _super);
    function GetSetupV1ServicesIdCalendarQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locationId" }),
        __metadata("design:type", String)
    ], GetSetupV1ServicesIdCalendarQueryParams.prototype, "locationId", void 0);
    return GetSetupV1ServicesIdCalendarQueryParams;
}(SpeakeasyBase));
export { GetSetupV1ServicesIdCalendarQueryParams };
var GetSetupV1ServicesIdCalendarRequest = /** @class */ (function (_super) {
    __extends(GetSetupV1ServicesIdCalendarRequest, _super);
    function GetSetupV1ServicesIdCalendarRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSetupV1ServicesIdCalendarPathParams)
    ], GetSetupV1ServicesIdCalendarRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSetupV1ServicesIdCalendarQueryParams)
    ], GetSetupV1ServicesIdCalendarRequest.prototype, "queryParams", void 0);
    return GetSetupV1ServicesIdCalendarRequest;
}(SpeakeasyBase));
export { GetSetupV1ServicesIdCalendarRequest };
var GetSetupV1ServicesIdCalendarResponse = /** @class */ (function (_super) {
    __extends(GetSetupV1ServicesIdCalendarResponse, _super);
    function GetSetupV1ServicesIdCalendarResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSetupV1ServicesIdCalendarResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServiceCalendarViewModel)
    ], GetSetupV1ServicesIdCalendarResponse.prototype, "serviceCalendarViewModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSetupV1ServicesIdCalendarResponse.prototype, "statusCode", void 0);
    return GetSetupV1ServicesIdCalendarResponse;
}(SpeakeasyBase));
export { GetSetupV1ServicesIdCalendarResponse };
