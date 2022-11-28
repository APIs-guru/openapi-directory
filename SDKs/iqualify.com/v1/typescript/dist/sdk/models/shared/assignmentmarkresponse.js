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
var AssignmentMarkResponse = /** @class */ (function (_super) {
    __extends(AssignmentMarkResponse, _super);
    function AssignmentMarkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assessmentId" }),
        __metadata("design:type", String)
    ], AssignmentMarkResponse.prototype, "assessmentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assessmentItemDetails" }),
        __metadata("design:type", String)
    ], AssignmentMarkResponse.prototype, "assessmentItemDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assessmentItemName" }),
        __metadata("design:type", String)
    ], AssignmentMarkResponse.prototype, "assessmentItemName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=courseName" }),
        __metadata("design:type", String)
    ], AssignmentMarkResponse.prototype, "courseName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=learnerEmail" }),
        __metadata("design:type", String)
    ], AssignmentMarkResponse.prototype, "learnerEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=learnerFirstName" }),
        __metadata("design:type", String)
    ], AssignmentMarkResponse.prototype, "learnerFirstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=learnerLastName" }),
        __metadata("design:type", String)
    ], AssignmentMarkResponse.prototype, "learnerLastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=learnerPersonId" }),
        __metadata("design:type", String)
    ], AssignmentMarkResponse.prototype, "learnerPersonId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mark" }),
        __metadata("design:type", String)
    ], AssignmentMarkResponse.prototype, "mark", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=markFeedback" }),
        __metadata("design:type", String)
    ], AssignmentMarkResponse.prototype, "markFeedback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=markedBy" }),
        __metadata("design:type", String)
    ], AssignmentMarkResponse.prototype, "markedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=markedByEvaluator" }),
        __metadata("design:type", Boolean)
    ], AssignmentMarkResponse.prototype, "markedByEvaluator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=markedByFacilitator" }),
        __metadata("design:type", Boolean)
    ], AssignmentMarkResponse.prototype, "markedByFacilitator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=markedByMarker" }),
        __metadata("design:type", Boolean)
    ], AssignmentMarkResponse.prototype, "markedByMarker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=markedDateTime" }),
        __metadata("design:type", Date)
    ], AssignmentMarkResponse.prototype, "markedDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=submissionDateTime" }),
        __metadata("design:type", Date)
    ], AssignmentMarkResponse.prototype, "submissionDateTime", void 0);
    return AssignmentMarkResponse;
}(SpeakeasyBase));
export { AssignmentMarkResponse };
