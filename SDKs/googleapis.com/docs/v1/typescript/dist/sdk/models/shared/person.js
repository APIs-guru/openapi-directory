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
import { PersonProperties } from "./personproperties";
import { SuggestedTextStyle } from "./suggestedtextstyle";
import { TextStyle } from "./textstyle";
// Person
/**
 * A person or email address mentioned in a document. These mentions behave as a single, immutable element containing the person's name or email address.
**/
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=personId" }),
        __metadata("design:type", String)
    ], Person.prototype, "personId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=personProperties" }),
        __metadata("design:type", PersonProperties)
    ], Person.prototype, "personProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suggestedDeletionIds" }),
        __metadata("design:type", Array)
    ], Person.prototype, "suggestedDeletionIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suggestedInsertionIds" }),
        __metadata("design:type", Array)
    ], Person.prototype, "suggestedInsertionIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suggestedTextStyleChanges", elemType: SuggestedTextStyle }),
        __metadata("design:type", Map)
    ], Person.prototype, "suggestedTextStyleChanges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textStyle" }),
        __metadata("design:type", TextStyle)
    ], Person.prototype, "textStyle", void 0);
    return Person;
}(SpeakeasyBase));
export { Person };
// PersonInput
/**
 * A person or email address mentioned in a document. These mentions behave as a single, immutable element containing the person's name or email address.
**/
var PersonInput = /** @class */ (function (_super) {
    __extends(PersonInput, _super);
    function PersonInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suggestedDeletionIds" }),
        __metadata("design:type", Array)
    ], PersonInput.prototype, "suggestedDeletionIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suggestedInsertionIds" }),
        __metadata("design:type", Array)
    ], PersonInput.prototype, "suggestedInsertionIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suggestedTextStyleChanges", elemType: SuggestedTextStyle }),
        __metadata("design:type", Map)
    ], PersonInput.prototype, "suggestedTextStyleChanges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textStyle" }),
        __metadata("design:type", TextStyle)
    ], PersonInput.prototype, "textStyle", void 0);
    return PersonInput;
}(SpeakeasyBase));
export { PersonInput };
