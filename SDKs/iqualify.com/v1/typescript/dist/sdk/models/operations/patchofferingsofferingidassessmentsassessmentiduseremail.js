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
var PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailPathParams = /** @class */ (function (_super) {
    __extends(PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailPathParams, _super);
    function PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=assessmentId" }),
        __metadata("design:type", String)
    ], PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailPathParams.prototype, "assessmentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=offeringId" }),
        __metadata("design:type", String)
    ], PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailPathParams.prototype, "offeringId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userEmail" }),
        __metadata("design:type", String)
    ], PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailPathParams.prototype, "userEmail", void 0);
    return PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailPathParams;
}(SpeakeasyBase));
export { PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailPathParams };
var PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailRequestBody = /** @class */ (function (_super) {
    __extends(PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailRequestBody, _super);
    function PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dueDate" }),
        __metadata("design:type", Date)
    ], PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailRequestBody.prototype, "dueDate", void 0);
    return PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailRequestBody;
}(SpeakeasyBase));
export { PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailRequestBody };
var PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailRequest = /** @class */ (function (_super) {
    __extends(PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailRequest, _super);
    function PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailPathParams)
    ], PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailRequestBody)
    ], PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailRequest.prototype, "request", void 0);
    return PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailRequest;
}(SpeakeasyBase));
export { PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailRequest };
var PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailResponse = /** @class */ (function (_super) {
    __extends(PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailResponse, _super);
    function PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailResponse.prototype, "statusCode", void 0);
    return PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailResponse;
}(SpeakeasyBase));
export { PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailResponse };
