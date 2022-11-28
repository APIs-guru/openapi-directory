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
import { Document } from "./document";
import { ThemeResponse } from "./themeresponse";
var AssessmentResponse = /** @class */ (function (_super) {
    __extends(AssessmentResponse, _super);
    function AssessmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], AssessmentResponse.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documents", elemType: Document }),
        __metadata("design:type", Array)
    ], AssessmentResponse.prototype, "documents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dueDate" }),
        __metadata("design:type", Date)
    ], AssessmentResponse.prototype, "dueDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=durationMinutes" }),
        __metadata("design:type", Number)
    ], AssessmentResponse.prototype, "durationMinutes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filename" }),
        __metadata("design:type", String)
    ], AssessmentResponse.prototype, "filename", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hidden" }),
        __metadata("design:type", Boolean)
    ], AssessmentResponse.prototype, "hidden", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AssessmentResponse.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=markNumber" }),
        __metadata("design:type", String)
    ], AssessmentResponse.prototype, "markNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=markType" }),
        __metadata("design:type", String)
    ], AssessmentResponse.prototype, "markType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxAttempts" }),
        __metadata("design:type", Number)
    ], AssessmentResponse.prototype, "maxAttempts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=openDate" }),
        __metadata("design:type", Date)
    ], AssessmentResponse.prototype, "openDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pid" }),
        __metadata("design:type", String)
    ], AssessmentResponse.prototype, "pid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=points" }),
        __metadata("design:type", String)
    ], AssessmentResponse.prototype, "points", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=themes", elemType: ThemeResponse }),
        __metadata("design:type", Array)
    ], AssessmentResponse.prototype, "themes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], AssessmentResponse.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalQuestions" }),
        __metadata("design:type", Number)
    ], AssessmentResponse.prototype, "totalQuestions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalThemes" }),
        __metadata("design:type", Number)
    ], AssessmentResponse.prototype, "totalThemes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AssessmentResponse.prototype, "type", void 0);
    return AssessmentResponse;
}(SpeakeasyBase));
export { AssessmentResponse };
