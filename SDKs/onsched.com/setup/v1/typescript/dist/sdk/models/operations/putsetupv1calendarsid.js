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
var PutSetupV1CalendarsIdPathParams = /** @class */ (function (_super) {
    __extends(PutSetupV1CalendarsIdPathParams, _super);
    function PutSetupV1CalendarsIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PutSetupV1CalendarsIdPathParams.prototype, "id", void 0);
    return PutSetupV1CalendarsIdPathParams;
}(SpeakeasyBase));
export { PutSetupV1CalendarsIdPathParams };
var PutSetupV1CalendarsIdRequests = /** @class */ (function (_super) {
    __extends(PutSetupV1CalendarsIdRequests, _super);
    function PutSetupV1CalendarsIdRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.ScheduleUpdateModel)
    ], PutSetupV1CalendarsIdRequests.prototype, "scheduleUpdateModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ScheduleUpdateModel)
    ], PutSetupV1CalendarsIdRequests.prototype, "scheduleUpdateModel1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.ScheduleUpdateModel)
    ], PutSetupV1CalendarsIdRequests.prototype, "scheduleUpdateModel2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.ScheduleUpdateModel)
    ], PutSetupV1CalendarsIdRequests.prototype, "scheduleUpdateModel3", void 0);
    return PutSetupV1CalendarsIdRequests;
}(SpeakeasyBase));
export { PutSetupV1CalendarsIdRequests };
var PutSetupV1CalendarsIdRequest = /** @class */ (function (_super) {
    __extends(PutSetupV1CalendarsIdRequest, _super);
    function PutSetupV1CalendarsIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutSetupV1CalendarsIdPathParams)
    ], PutSetupV1CalendarsIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutSetupV1CalendarsIdRequests)
    ], PutSetupV1CalendarsIdRequest.prototype, "request", void 0);
    return PutSetupV1CalendarsIdRequest;
}(SpeakeasyBase));
export { PutSetupV1CalendarsIdRequest };
var PutSetupV1CalendarsIdResponse = /** @class */ (function (_super) {
    __extends(PutSetupV1CalendarsIdResponse, _super);
    function PutSetupV1CalendarsIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutSetupV1CalendarsIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ScheduleViewModel)
    ], PutSetupV1CalendarsIdResponse.prototype, "scheduleViewModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutSetupV1CalendarsIdResponse.prototype, "statusCode", void 0);
    return PutSetupV1CalendarsIdResponse;
}(SpeakeasyBase));
export { PutSetupV1CalendarsIdResponse };
