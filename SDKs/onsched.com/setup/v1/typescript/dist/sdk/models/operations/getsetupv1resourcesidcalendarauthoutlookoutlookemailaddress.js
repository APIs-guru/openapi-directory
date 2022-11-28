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
var GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressPathParams = /** @class */ (function (_super) {
    __extends(GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressPathParams, _super);
    function GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressPathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=outlookEmailAddress" }),
        __metadata("design:type", String)
    ], GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressPathParams.prototype, "outlookEmailAddress", void 0);
    return GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressPathParams;
}(SpeakeasyBase));
export { GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressPathParams };
var GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressQueryParams = /** @class */ (function (_super) {
    __extends(GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressQueryParams, _super);
    function GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outlookAuthReturnUrl" }),
        __metadata("design:type", String)
    ], GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressQueryParams.prototype, "outlookAuthReturnUrl", void 0);
    return GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressQueryParams;
}(SpeakeasyBase));
export { GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressQueryParams };
var GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressRequest = /** @class */ (function (_super) {
    __extends(GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressRequest, _super);
    function GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressPathParams)
    ], GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressQueryParams)
    ], GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressRequest.prototype, "queryParams", void 0);
    return GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressRequest;
}(SpeakeasyBase));
export { GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressRequest };
var GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressResponse = /** @class */ (function (_super) {
    __extends(GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressResponse, _super);
    function GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CalendarAuthViewModel)
    ], GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressResponse.prototype, "calendarAuthViewModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressResponse.prototype, "statusCode", void 0);
    return GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressResponse;
}(SpeakeasyBase));
export { GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressResponse };
