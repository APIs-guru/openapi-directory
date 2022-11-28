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
var PutSetupV1LocationsIdHolidaysHolidayIdClosedPathParams = /** @class */ (function (_super) {
    __extends(PutSetupV1LocationsIdHolidaysHolidayIdClosedPathParams, _super);
    function PutSetupV1LocationsIdHolidaysHolidayIdClosedPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=closed" }),
        __metadata("design:type", Boolean)
    ], PutSetupV1LocationsIdHolidaysHolidayIdClosedPathParams.prototype, "closed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=holidayId" }),
        __metadata("design:type", String)
    ], PutSetupV1LocationsIdHolidaysHolidayIdClosedPathParams.prototype, "holidayId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PutSetupV1LocationsIdHolidaysHolidayIdClosedPathParams.prototype, "id", void 0);
    return PutSetupV1LocationsIdHolidaysHolidayIdClosedPathParams;
}(SpeakeasyBase));
export { PutSetupV1LocationsIdHolidaysHolidayIdClosedPathParams };
var PutSetupV1LocationsIdHolidaysHolidayIdClosedRequest = /** @class */ (function (_super) {
    __extends(PutSetupV1LocationsIdHolidaysHolidayIdClosedRequest, _super);
    function PutSetupV1LocationsIdHolidaysHolidayIdClosedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutSetupV1LocationsIdHolidaysHolidayIdClosedPathParams)
    ], PutSetupV1LocationsIdHolidaysHolidayIdClosedRequest.prototype, "pathParams", void 0);
    return PutSetupV1LocationsIdHolidaysHolidayIdClosedRequest;
}(SpeakeasyBase));
export { PutSetupV1LocationsIdHolidaysHolidayIdClosedRequest };
var PutSetupV1LocationsIdHolidaysHolidayIdClosedResponse = /** @class */ (function (_super) {
    __extends(PutSetupV1LocationsIdHolidaysHolidayIdClosedResponse, _super);
    function PutSetupV1LocationsIdHolidaysHolidayIdClosedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutSetupV1LocationsIdHolidaysHolidayIdClosedResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LocationViewModel)
    ], PutSetupV1LocationsIdHolidaysHolidayIdClosedResponse.prototype, "locationViewModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutSetupV1LocationsIdHolidaysHolidayIdClosedResponse.prototype, "statusCode", void 0);
    return PutSetupV1LocationsIdHolidaysHolidayIdClosedResponse;
}(SpeakeasyBase));
export { PutSetupV1LocationsIdHolidaysHolidayIdClosedResponse };
