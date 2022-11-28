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
import { GridInput } from "./grid";
import { ImageInput } from "./image";
import { QuestionInput } from "./question";
import { Grid } from "./grid";
import { Image } from "./image";
import { Question } from "./question";
// QuestionGroupItemInput
/**
 * Defines a question that comprises multiple questions grouped together.
**/
var QuestionGroupItemInput = /** @class */ (function (_super) {
    __extends(QuestionGroupItemInput, _super);
    function QuestionGroupItemInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=grid" }),
        __metadata("design:type", GridInput)
    ], QuestionGroupItemInput.prototype, "grid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image" }),
        __metadata("design:type", ImageInput)
    ], QuestionGroupItemInput.prototype, "image", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=questions", elemType: QuestionInput }),
        __metadata("design:type", Array)
    ], QuestionGroupItemInput.prototype, "questions", void 0);
    return QuestionGroupItemInput;
}(SpeakeasyBase));
export { QuestionGroupItemInput };
// QuestionGroupItem
/**
 * Defines a question that comprises multiple questions grouped together.
**/
var QuestionGroupItem = /** @class */ (function (_super) {
    __extends(QuestionGroupItem, _super);
    function QuestionGroupItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=grid" }),
        __metadata("design:type", Grid)
    ], QuestionGroupItem.prototype, "grid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image" }),
        __metadata("design:type", Image)
    ], QuestionGroupItem.prototype, "image", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=questions", elemType: Question }),
        __metadata("design:type", Array)
    ], QuestionGroupItem.prototype, "questions", void 0);
    return QuestionGroupItem;
}(SpeakeasyBase));
export { QuestionGroupItem };
