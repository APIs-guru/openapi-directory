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
var PutSetupV1ServicesIdAvailabilityPathParams = /** @class */ (function (_super) {
    __extends(PutSetupV1ServicesIdAvailabilityPathParams, _super);
    function PutSetupV1ServicesIdAvailabilityPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PutSetupV1ServicesIdAvailabilityPathParams.prototype, "id", void 0);
    return PutSetupV1ServicesIdAvailabilityPathParams;
}(SpeakeasyBase));
export { PutSetupV1ServicesIdAvailabilityPathParams };
var PutSetupV1ServicesIdAvailabilityRequests = /** @class */ (function (_super) {
    __extends(PutSetupV1ServicesIdAvailabilityRequests, _super);
    function PutSetupV1ServicesIdAvailabilityRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.AvailabilityInputModel)
    ], PutSetupV1ServicesIdAvailabilityRequests.prototype, "availabilityInputModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AvailabilityInputModel)
    ], PutSetupV1ServicesIdAvailabilityRequests.prototype, "availabilityInputModel1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.AvailabilityInputModel)
    ], PutSetupV1ServicesIdAvailabilityRequests.prototype, "availabilityInputModel2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.AvailabilityInputModel)
    ], PutSetupV1ServicesIdAvailabilityRequests.prototype, "availabilityInputModel3", void 0);
    return PutSetupV1ServicesIdAvailabilityRequests;
}(SpeakeasyBase));
export { PutSetupV1ServicesIdAvailabilityRequests };
var PutSetupV1ServicesIdAvailabilityRequest = /** @class */ (function (_super) {
    __extends(PutSetupV1ServicesIdAvailabilityRequest, _super);
    function PutSetupV1ServicesIdAvailabilityRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutSetupV1ServicesIdAvailabilityPathParams)
    ], PutSetupV1ServicesIdAvailabilityRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutSetupV1ServicesIdAvailabilityRequests)
    ], PutSetupV1ServicesIdAvailabilityRequest.prototype, "request", void 0);
    return PutSetupV1ServicesIdAvailabilityRequest;
}(SpeakeasyBase));
export { PutSetupV1ServicesIdAvailabilityRequest };
var PutSetupV1ServicesIdAvailabilityResponse = /** @class */ (function (_super) {
    __extends(PutSetupV1ServicesIdAvailabilityResponse, _super);
    function PutSetupV1ServicesIdAvailabilityResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutSetupV1ServicesIdAvailabilityResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServiceAvailabilityViewModel)
    ], PutSetupV1ServicesIdAvailabilityResponse.prototype, "serviceAvailabilityViewModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutSetupV1ServicesIdAvailabilityResponse.prototype, "statusCode", void 0);
    return PutSetupV1ServicesIdAvailabilityResponse;
}(SpeakeasyBase));
export { PutSetupV1ServicesIdAvailabilityResponse };
