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
var DeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdPathParams = /** @class */ (function (_super) {
    __extends(DeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdPathParams, _super);
    function DeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=assessmentId" }),
        __metadata("design:type", String)
    ], DeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdPathParams.prototype, "assessmentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=offeringId" }),
        __metadata("design:type", String)
    ], DeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdPathParams.prototype, "offeringId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userEmail" }),
        __metadata("design:type", String)
    ], DeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdPathParams.prototype, "userEmail", void 0);
    return DeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdPathParams;
}(SpeakeasyBase));
export { DeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdPathParams };
var DeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdRequest = /** @class */ (function (_super) {
    __extends(DeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdRequest, _super);
    function DeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdPathParams)
    ], DeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdRequest.prototype, "pathParams", void 0);
    return DeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdRequest;
}(SpeakeasyBase));
export { DeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdRequest };
var DeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdResponse = /** @class */ (function (_super) {
    __extends(DeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdResponse, _super);
    function DeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], DeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdResponse.prototype, "statusCode", void 0);
    return DeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdResponse;
}(SpeakeasyBase));
export { DeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdResponse };
