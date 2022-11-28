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
var GetOfferingsOfferingIdLearnersPendingSubmissionPathParams = /** @class */ (function (_super) {
    __extends(GetOfferingsOfferingIdLearnersPendingSubmissionPathParams, _super);
    function GetOfferingsOfferingIdLearnersPendingSubmissionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=offeringId" }),
        __metadata("design:type", String)
    ], GetOfferingsOfferingIdLearnersPendingSubmissionPathParams.prototype, "offeringId", void 0);
    return GetOfferingsOfferingIdLearnersPendingSubmissionPathParams;
}(SpeakeasyBase));
export { GetOfferingsOfferingIdLearnersPendingSubmissionPathParams };
var GetOfferingsOfferingIdLearnersPendingSubmissionQueryParams = /** @class */ (function (_super) {
    __extends(GetOfferingsOfferingIdLearnersPendingSubmissionQueryParams, _super);
    function GetOfferingsOfferingIdLearnersPendingSubmissionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=days" }),
        __metadata("design:type", String)
    ], GetOfferingsOfferingIdLearnersPendingSubmissionQueryParams.prototype, "days", void 0);
    return GetOfferingsOfferingIdLearnersPendingSubmissionQueryParams;
}(SpeakeasyBase));
export { GetOfferingsOfferingIdLearnersPendingSubmissionQueryParams };
var GetOfferingsOfferingIdLearnersPendingSubmissionRequest = /** @class */ (function (_super) {
    __extends(GetOfferingsOfferingIdLearnersPendingSubmissionRequest, _super);
    function GetOfferingsOfferingIdLearnersPendingSubmissionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetOfferingsOfferingIdLearnersPendingSubmissionPathParams)
    ], GetOfferingsOfferingIdLearnersPendingSubmissionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetOfferingsOfferingIdLearnersPendingSubmissionQueryParams)
    ], GetOfferingsOfferingIdLearnersPendingSubmissionRequest.prototype, "queryParams", void 0);
    return GetOfferingsOfferingIdLearnersPendingSubmissionRequest;
}(SpeakeasyBase));
export { GetOfferingsOfferingIdLearnersPendingSubmissionRequest };
var GetOfferingsOfferingIdLearnersPendingSubmissionResponse = /** @class */ (function (_super) {
    __extends(GetOfferingsOfferingIdLearnersPendingSubmissionResponse, _super);
    function GetOfferingsOfferingIdLearnersPendingSubmissionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: shared.AssessmentPendingSubmission }),
        __metadata("design:type", Array)
    ], GetOfferingsOfferingIdLearnersPendingSubmissionResponse.prototype, "assessmentPendingSubmissions", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetOfferingsOfferingIdLearnersPendingSubmissionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], GetOfferingsOfferingIdLearnersPendingSubmissionResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetOfferingsOfferingIdLearnersPendingSubmissionResponse.prototype, "statusCode", void 0);
    return GetOfferingsOfferingIdLearnersPendingSubmissionResponse;
}(SpeakeasyBase));
export { GetOfferingsOfferingIdLearnersPendingSubmissionResponse };
