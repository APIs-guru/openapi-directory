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
import { Author } from "./author";
import { Answer } from "./answer";
// QuestionInput
/**
 * Represents a single question and some of its answers.
**/
var QuestionInput = /** @class */ (function (_super) {
    __extends(QuestionInput, _super);
    function QuestionInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=author" }),
        __metadata("design:type", Author)
    ], QuestionInput.prototype, "author", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], QuestionInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], QuestionInput.prototype, "text", void 0);
    return QuestionInput;
}(SpeakeasyBase));
export { QuestionInput };
// Question
/**
 * Represents a single question and some of its answers.
**/
var Question = /** @class */ (function (_super) {
    __extends(Question, _super);
    function Question() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=author" }),
        __metadata("design:type", Author)
    ], Question.prototype, "author", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Question.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Question.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], Question.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topAnswers", elemType: Answer }),
        __metadata("design:type", Array)
    ], Question.prototype, "topAnswers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalAnswerCount" }),
        __metadata("design:type", Number)
    ], Question.prototype, "totalAnswerCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Question.prototype, "updateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=upvoteCount" }),
        __metadata("design:type", Number)
    ], Question.prototype, "upvoteCount", void 0);
    return Question;
}(SpeakeasyBase));
export { Question };
