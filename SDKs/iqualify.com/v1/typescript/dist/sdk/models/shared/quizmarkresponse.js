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
var QuizMarkResponse = /** @class */ (function (_super) {
    __extends(QuizMarkResponse, _super);
    function QuizMarkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attempts" }),
        __metadata("design:type", Number)
    ], QuizMarkResponse.prototype, "attempts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastAttemptAt" }),
        __metadata("design:type", Date)
    ], QuizMarkResponse.prototype, "lastAttemptAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=learnerEmail" }),
        __metadata("design:type", String)
    ], QuizMarkResponse.prototype, "learnerEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=learnerFullname" }),
        __metadata("design:type", String)
    ], QuizMarkResponse.prototype, "learnerFullname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=learnerPersonId" }),
        __metadata("design:type", String)
    ], QuizMarkResponse.prototype, "learnerPersonId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mark" }),
        __metadata("design:type", String)
    ], QuizMarkResponse.prototype, "mark", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quizId" }),
        __metadata("design:type", String)
    ], QuizMarkResponse.prototype, "quizId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quizTitle" }),
        __metadata("design:type", String)
    ], QuizMarkResponse.prototype, "quizTitle", void 0);
    return QuizMarkResponse;
}(SpeakeasyBase));
export { QuizMarkResponse };
