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
var PutSetupV1ResourcesIdAvailabilityPathParams = /** @class */ (function (_super) {
    __extends(PutSetupV1ResourcesIdAvailabilityPathParams, _super);
    function PutSetupV1ResourcesIdAvailabilityPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PutSetupV1ResourcesIdAvailabilityPathParams.prototype, "id", void 0);
    return PutSetupV1ResourcesIdAvailabilityPathParams;
}(SpeakeasyBase));
export { PutSetupV1ResourcesIdAvailabilityPathParams };
var PutSetupV1ResourcesIdAvailabilityRequests = /** @class */ (function (_super) {
    __extends(PutSetupV1ResourcesIdAvailabilityRequests, _super);
    function PutSetupV1ResourcesIdAvailabilityRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.AvailabilityInputModel)
    ], PutSetupV1ResourcesIdAvailabilityRequests.prototype, "availabilityInputModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AvailabilityInputModel)
    ], PutSetupV1ResourcesIdAvailabilityRequests.prototype, "availabilityInputModel1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.AvailabilityInputModel)
    ], PutSetupV1ResourcesIdAvailabilityRequests.prototype, "availabilityInputModel2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.AvailabilityInputModel)
    ], PutSetupV1ResourcesIdAvailabilityRequests.prototype, "availabilityInputModel3", void 0);
    return PutSetupV1ResourcesIdAvailabilityRequests;
}(SpeakeasyBase));
export { PutSetupV1ResourcesIdAvailabilityRequests };
var PutSetupV1ResourcesIdAvailabilityRequest = /** @class */ (function (_super) {
    __extends(PutSetupV1ResourcesIdAvailabilityRequest, _super);
    function PutSetupV1ResourcesIdAvailabilityRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutSetupV1ResourcesIdAvailabilityPathParams)
    ], PutSetupV1ResourcesIdAvailabilityRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutSetupV1ResourcesIdAvailabilityRequests)
    ], PutSetupV1ResourcesIdAvailabilityRequest.prototype, "request", void 0);
    return PutSetupV1ResourcesIdAvailabilityRequest;
}(SpeakeasyBase));
export { PutSetupV1ResourcesIdAvailabilityRequest };
var PutSetupV1ResourcesIdAvailabilityResponse = /** @class */ (function (_super) {
    __extends(PutSetupV1ResourcesIdAvailabilityResponse, _super);
    function PutSetupV1ResourcesIdAvailabilityResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutSetupV1ResourcesIdAvailabilityResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ResourceAvailabilityViewModel)
    ], PutSetupV1ResourcesIdAvailabilityResponse.prototype, "resourceAvailabilityViewModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutSetupV1ResourcesIdAvailabilityResponse.prototype, "statusCode", void 0);
    return PutSetupV1ResourcesIdAvailabilityResponse;
}(SpeakeasyBase));
export { PutSetupV1ResourcesIdAvailabilityResponse };
