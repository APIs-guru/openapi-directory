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
var PostConsumerV1AppointmentsQueryParams = /** @class */ (function (_super) {
    __extends(PostConsumerV1AppointmentsQueryParams, _super);
    function PostConsumerV1AppointmentsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=completeBooking" }),
        __metadata("design:type", String)
    ], PostConsumerV1AppointmentsQueryParams.prototype, "completeBooking", void 0);
    return PostConsumerV1AppointmentsQueryParams;
}(SpeakeasyBase));
export { PostConsumerV1AppointmentsQueryParams };
var PostConsumerV1AppointmentsRequests = /** @class */ (function (_super) {
    __extends(PostConsumerV1AppointmentsRequests, _super);
    function PostConsumerV1AppointmentsRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.AppointmentInitialModel)
    ], PostConsumerV1AppointmentsRequests.prototype, "appointmentInitialModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AppointmentInitialModel)
    ], PostConsumerV1AppointmentsRequests.prototype, "appointmentInitialModel1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.AppointmentInitialModel)
    ], PostConsumerV1AppointmentsRequests.prototype, "appointmentInitialModel2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.AppointmentInitialModel)
    ], PostConsumerV1AppointmentsRequests.prototype, "appointmentInitialModel3", void 0);
    return PostConsumerV1AppointmentsRequests;
}(SpeakeasyBase));
export { PostConsumerV1AppointmentsRequests };
var PostConsumerV1AppointmentsRequest = /** @class */ (function (_super) {
    __extends(PostConsumerV1AppointmentsRequest, _super);
    function PostConsumerV1AppointmentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostConsumerV1AppointmentsQueryParams)
    ], PostConsumerV1AppointmentsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostConsumerV1AppointmentsRequests)
    ], PostConsumerV1AppointmentsRequest.prototype, "request", void 0);
    return PostConsumerV1AppointmentsRequest;
}(SpeakeasyBase));
export { PostConsumerV1AppointmentsRequest };
var PostConsumerV1AppointmentsResponse = /** @class */ (function (_super) {
    __extends(PostConsumerV1AppointmentsResponse, _super);
    function PostConsumerV1AppointmentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AppointmentInitialViewModel)
    ], PostConsumerV1AppointmentsResponse.prototype, "appointmentInitialViewModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostConsumerV1AppointmentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostConsumerV1AppointmentsResponse.prototype, "statusCode", void 0);
    return PostConsumerV1AppointmentsResponse;
}(SpeakeasyBase));
export { PostConsumerV1AppointmentsResponse };
