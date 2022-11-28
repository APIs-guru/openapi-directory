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
import { ChoiceQuestion } from "./choicequestion";
import { DateQuestion } from "./datequestion";
import { FileUploadQuestion } from "./fileuploadquestion";
import { Grading } from "./grading";
import { RowQuestion } from "./rowquestion";
import { ScaleQuestion } from "./scalequestion";
import { TextQuestion } from "./textquestion";
import { TimeQuestion } from "./timequestion";
import { ChoiceQuestionInput } from "./choicequestion";
// Question
/**
 * Any question. The specific type of question is known by its `kind`.
**/
var Question = /** @class */ (function (_super) {
    __extends(Question, _super);
    function Question() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=choiceQuestion" }),
        __metadata("design:type", ChoiceQuestion)
    ], Question.prototype, "choiceQuestion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateQuestion" }),
        __metadata("design:type", DateQuestion)
    ], Question.prototype, "dateQuestion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fileUploadQuestion" }),
        __metadata("design:type", FileUploadQuestion)
    ], Question.prototype, "fileUploadQuestion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=grading" }),
        __metadata("design:type", Grading)
    ], Question.prototype, "grading", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=questionId" }),
        __metadata("design:type", String)
    ], Question.prototype, "questionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=required" }),
        __metadata("design:type", Boolean)
    ], Question.prototype, "required", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rowQuestion" }),
        __metadata("design:type", RowQuestion)
    ], Question.prototype, "rowQuestion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scaleQuestion" }),
        __metadata("design:type", ScaleQuestion)
    ], Question.prototype, "scaleQuestion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textQuestion" }),
        __metadata("design:type", TextQuestion)
    ], Question.prototype, "textQuestion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeQuestion" }),
        __metadata("design:type", TimeQuestion)
    ], Question.prototype, "timeQuestion", void 0);
    return Question;
}(SpeakeasyBase));
export { Question };
// QuestionInput
/**
 * Any question. The specific type of question is known by its `kind`.
**/
var QuestionInput = /** @class */ (function (_super) {
    __extends(QuestionInput, _super);
    function QuestionInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=choiceQuestion" }),
        __metadata("design:type", ChoiceQuestionInput)
    ], QuestionInput.prototype, "choiceQuestion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateQuestion" }),
        __metadata("design:type", DateQuestion)
    ], QuestionInput.prototype, "dateQuestion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fileUploadQuestion" }),
        __metadata("design:type", FileUploadQuestion)
    ], QuestionInput.prototype, "fileUploadQuestion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=grading" }),
        __metadata("design:type", Grading)
    ], QuestionInput.prototype, "grading", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=questionId" }),
        __metadata("design:type", String)
    ], QuestionInput.prototype, "questionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=required" }),
        __metadata("design:type", Boolean)
    ], QuestionInput.prototype, "required", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rowQuestion" }),
        __metadata("design:type", RowQuestion)
    ], QuestionInput.prototype, "rowQuestion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scaleQuestion" }),
        __metadata("design:type", ScaleQuestion)
    ], QuestionInput.prototype, "scaleQuestion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textQuestion" }),
        __metadata("design:type", TextQuestion)
    ], QuestionInput.prototype, "textQuestion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeQuestion" }),
        __metadata("design:type", TimeQuestion)
    ], QuestionInput.prototype, "timeQuestion", void 0);
    return QuestionInput;
}(SpeakeasyBase));
export { QuestionInput };
